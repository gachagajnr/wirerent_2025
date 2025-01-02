import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";
import BlockForm from "~/components/forms/block";
import { HiArrowLeft } from "react-icons/hi";

import { ActionFunction, LoaderFunction } from "@remix-run/node";

import { connectToDatabase } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  // return await authenticator.isAuthenticated(request, {
  //   successRedirect: "/app",
  // });
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.clone().formData();
  const name = form.get("name") as string;
  const location = form.get("location") as string;
  const units = form.get("units") as string;
  const floors = form.get("floors") as string;
  const contact_1 = form.get("contact_1") as string;
  const contact_2 = form.get("contact_2") as string;
  const contact_3 = form.get("contact_3") as string;

  const data = {
    name: name,
    location: location,
    units: units,
    floors: floors,
    contact_1: Number(contact_1),
    contact_2: Number(contact_2),
    contact_3: Number(contact_3),
  };
  console.log("DATA", data);

  const { db } = await connectToDatabase();

  const blockExists = await db.collection("blocks").findOne({ name: name });
  if (!blockExists) {
    const result = await db.collection("blocks").insertOne(data);
    console.log("CREATING", result);

    if (!result.acknowledged) {
      throw new Error("Failed to create block");
    }
    console.log("CREATING", result);
    const block = data;
    // block._id = result.insertedId;
    return block;
    
  }
  throw new Error("Block with name already exists");
};

export default function NewBlock() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/blocks" className="btn    btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>New Block</Title>
      </div>
      <BlockForm />
    </div>
  );
}
