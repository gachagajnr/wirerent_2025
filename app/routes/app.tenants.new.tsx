import { Link, useLoaderData } from "@remix-run/react";
import { Title, Paper } from "@mantine/core";
import UnitForm from "~/components/forms/unit";
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
    blocks = await db.collection("blocks").find({}).toArray();
  }
  const data = JSON.parse(JSON.stringify(blocks));

  return { user, year, data };
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  // try {
  const form = await request.clone().formData();
  const blockId = form.get("blockId") as string;
  const name = form.get("name") as string;
  const floor = form.get("floor") as string;
  const type = form.get("type") as string;
  const rent = form.get("rent") as string;
  const amenities = form.get("amenities") as string;

  const errors = {
    blockId: "",
    name: "",
    floor: "",
    type: "",
    rent: "",
    amenities: "",
  };

  if (!blockId) {
    errors.blockId = "Block is Required";
  }

  if (!name) {
    errors.name = "House Number is Required";
  }

  if (!floor) {
    errors.floor = "Floor is Required";
  }

  if (!type) {
    errors.type = "Unit type is Required";
  }

  if (!rent) {
    errors.rent = "Rent amount is required";
  }

  if (!amenities) {
    errors.amenities = "Unit amenities are required";
  }

  if (Object.values(errors).some((error) => error !== "")) {
    return json({ errors });
  }

  const data = {
    name: name,
    blockId: new ObjectId(blockId),
    type: type,
    floor: Number(floor),
    rent: Number(rent),
    amenities: amenities,
  };

  const { db } = await connectToDatabase();

  const blockExists = await db
    .collection("units")
    .findOne({ name: name, blockId: new ObjectId(blockId) });
  if (!blockExists) {
    const result = await db.collection("units").insertOne(data);

    if (!result.acknowledged) {
      throw new Error("Failed to create unit");
    }
    return redirect("/app/units");
  }
  throw new Error("Unit with name already exists");
};

export default function NewTenant() {
  const blocks = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/blocks" className="btn btn-circle   btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>New Unit</Title>
      </div>

      <Paper shadow="xs" radius="xs" p="xl" maw={550}>
        <UnitForm blocks={blocks.data} />
      </Paper>
    </div>
  );
}
