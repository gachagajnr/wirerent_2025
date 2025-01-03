import { Link, useLoaderData } from "@remix-run/react";
import { Title, Paper } from "@mantine/core";
import TenantForm from "~/components/forms/tenant";
import { HiArrowLeft } from "react-icons/hi";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  ActionFunctionArgs,
  json,
} from "@remix-run/node";

import { connectToDatabase } from "~/utils/db.server";
import { authenticator } from "~/utils/auth.server";
import { ObjectId } from "mongodb";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();
  const url = new URL(request.url);
  const yearFilter = Number(url.searchParams.get("year"));
  const year = yearFilter || new Date().getFullYear();

  let blocks;

  if (yearFilter) {
    blocks = await db.collection("blocks").find({}).toArray();
  } else {
    blocks = await db
      .collection("blocks")
      .aggregate([
        {
          $lookup: {
            from: "units",
            localField: "_id",
            foreignField: "blockId",
            as: "units",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            location: 1,
            // Include only units where isOccupied is false
            units: {
              $filter: {
                input: "$units",
                as: "unit",
                cond: { $eq: ["$$unit.isOccupied", false] },
              },
            },
          },
        },
      ])
      .toArray();
  }
  const data = JSON.parse(JSON.stringify(blocks));

  return { user, year, data };
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const form = await request.clone().formData();
  const blockId = form.get("blockId") as string;
  const unitId = form.get("unitId") as string;
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const idNumber = form.get("idNumber") as string;
  const phone = form.get("phone") as string;
  const email = form.get("email") as string;
  const paymentDue = form.get("paymentDue") as string;
  const notes = form.get("notes") as string;

  const errors = {
    blockId: "",
    unitId: "",
    firstName: "",
    lastName: "",
    idNumber: "",
    phone: "",
    email: "",
    paymentDue: "",
    notes: "",
  };

  if (!blockId) {
    errors.blockId = "Block is Required";
  }

  if (!firstName) {
    errors.firstName = "First name is Required";
  }

  if (!lastName) {
    errors.lastName = "Last name is Required";
  }

  if (!idNumber) {
    errors.idNumber = "ID Number is Required";
  }

  if (!/^\d{10}$/.test(phone)) {
    errors.phone = "Phone is Required";
  }

  if (!email) {
    errors.email = "Email address is required";
  }

  if (!notes) {
    errors.notes = "Notes is required";
  }

  if (!paymentDue) {
    errors.paymentDue = "Payment due date required";
  }

  if (Object.values(errors).some((error) => error !== "")) {
    return json({ errors });
  }

  const data = {
    blockId: new ObjectId(blockId),
    unitId: new ObjectId(unitId),
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    phone: Number(phone),
    email: email,
    paymentDue: Number(paymentDue),
    notes: notes,
  };

  const { db } = await connectToDatabase();

  const tenantExists = await db
    .collection("tenants")
    .findOne({ idNumber: idNumber, phone: phone });
  if (!tenantExists) {
    const result = await db.collection("tenants").insertOne(data);

    if (!result.acknowledged) {
      throw new Error("Failed to create tenant");
    }

    await db.collection("units").findOneAndUpdate(
      { _id: new ObjectId(unitId) },
      {
        $set: {
          isOccupied: true,
          tenantId: result.insertedId,
          startDate: new Date(),
        },
      }
    );
    return redirect("/app/tenants");
  }
  throw new Error("Tenant already already exists");
};

export default function NewTenant() {
  const blocks = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/tenants" className="btn btn-circle   btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>New Tenant</Title>
      </div>

      <Paper shadow="xs" radius="xs" p="xl" maw={550}>
        <TenantForm blocks={blocks.data} />
      </Paper>
    </div>
  );
}
