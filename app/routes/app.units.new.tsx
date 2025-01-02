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
  const name = form.get("name") as string;
  const location = form.get("location") as string;
  const floors = form.get("floors") as string;
  const units = form.get("units") as string;
  const contact_1 = form.get("contact_1") as string;
  const contact_2 = form.get("contact_2") as string;
  const contact_3 = form.get("contact_3") as string;

  const errors = {
    name: "",
    location: "",
    floors: "",
    units: "",
    contact_1: "",
    contact_2: "",
    contact_3: "",
  };

  if (!name) {
    errors.name = "Name is Required";
  }

  if (!location) {
    errors.location = "Location is Required";
  }

  if (!floors) {
    errors.floors = "Floors is Required";
  }

  if (!units) {
    errors.units = "No of units is Required";
  }

  if (!/^\d{10}$/.test(contact_1)) {
    errors.contact_1 = "Phone should be exactly 10 digits";
  }

  if (!/^\d{10}$/.test(contact_2)) {
    errors.contact_2 = "Phone should be exactly 10 digits";
  }

  if (!/^\d{10}$/.test(contact_3)) {
    errors.contact_3 = "Phone should be exactly 10 digits";
  }

  if (Object.values(errors).some((error) => error !== "")) {
    return json({ errors });
  }

  const data = {
    name: name,
    location: location,
    units: Number(units),
    floors: Number(floors),
    contact_1: Number(contact_1),
    contact_2: Number(contact_2),
    contact_3: Number(contact_3),
  };

  const { db } = await connectToDatabase();

  const blockExists = await db.collection("blocks").findOne({ name: name });
  if (!blockExists) {
    const result = await db.collection("blocks").insertOne(data);

    if (!result.acknowledged) {
      throw new Error("Failed to create block");
    }
    return redirect("/app/blocks");
  }
  throw new Error("Block with name already exists");
};

export default function NewUnit() {
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
