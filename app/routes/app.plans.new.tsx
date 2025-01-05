import { useNavigate } from "@remix-run/react";
import { Title, Paper } from "@mantine/core";
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
import PlanForm from "~/components/forms/plan";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return { user };
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  // try {
  const form = await request.clone().formData();
  const name = form.get("name") as string;
  const description = form.get("description") as string;
  const price = form.get("price") as string;
  const addons = form
    .getAll("addons[]")
    .map((addon) => (typeof addon === "string" ? addon.trim() : addon));

  const errors: {
    name: string;
    description: string;
    price: string;
    addons: string[];
  } = {
    name: "",
    description: "",
    price: "",
    addons: [],
  };

  if (!name) {
    errors.name = "Name is Required";
  }

  if (!description) {
    errors.description = "Description is Required";
  }

  if (!price || isNaN(Number(price)) || Number(price) <= 0) {
    errors.price = "Price must be a positive number";
  }

  addons.forEach((addon, index) => {
    if (addon === "") {
      errors.addons[index] = `Addon ${index + 1} cannot be empty`;
    }
  });
  console.log("2", name, description, price, addons);

  if (Object.values(errors).some((error) => error !== "")) {
    return json({ errors });
  }

  console.log("4", name, description, price, addons);

  const data = {
    name: name,
    description: description,
    price: price,
    addons: addons,
  };
  console.log("data,", data);

  const { db } = await connectToDatabase();

  const planExists = await db.collection("plans").findOne({ name: name });
  if (!planExists) {
    const result = await db.collection("plans").insertOne(data);

    if (!result.acknowledged) {
      throw new Error("Failed to create plan");
    }
    return redirect("/app/plans");
  }
  throw new Error("Plan with name already exists");
};

export default function NewUnit() {
  // const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-circle btn-sm"
        >
          <HiArrowLeft />
        </button>
        <Title order={4}>New Subscription Plan</Title>
      </div>

      <Paper shadow="xs" radius="xs" p="xl" maw={550}>
        <PlanForm />
      </Paper>
    </div>
  );
}
