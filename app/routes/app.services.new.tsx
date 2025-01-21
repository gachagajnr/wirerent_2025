import { useNavigate } from "@remix-run/react";
import { Title, Paper } from "@mantine/core";
// import UnitForm from "~/components/forms/unit";
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
import MemberForm from "~/components/forms/team-member";

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
  const firstname = form.get("firstname") as string;
  const lastname = form.get("lastname") as string;
  const dob = form.get("dob") as string;
  const email = form.get("email") as string;
  const phone = form.get("phone") as string;
  const idNumber = form.get("idNumber") as string;
  const jobTitle = form.get("jobTitle") as string;
  const gender = form.get("gender") as string;
  const notes = form.get("notes") as string;
  const zone = form.get("zone") as string;
  // const uploadedFiles = JSON.parse(form.get("uploadedFiles") || "[]");

  const errors = {
    firstname: "",
    lastname: "",
    dob: "",
    idNumber: "",
    jobTitle: "",
    gender: "",
    notes: "",
    email: "",
    zone: "",
    phone: "",
    // profile: uploadedFiles,
  };

  if (!firstname) {
    errors.firstname = "Firstname is Required";
  }

  if (!lastname) {
    errors.lastname = "Lastname is Required";
  }

  if (!dob) {
    errors.dob = "Date of Birth is Required";
  }

  if (!email) {
    errors.email = "Email address is Required";
  }

  if (!idNumber) {
    errors.idNumber = "ID Number is Required";
  }

  if (!jobTitle) {
    errors.jobTitle = "Job Title is Required";
  }

  if (!gender) {
    errors.gender = "Gender is required";
  }

  if (!notes) {
    errors.notes = "Notes are required";
  }

  if (!zone) {
    errors.zone = "Zone/Area are required";
  }

  if (!phone) {
    errors.phone = "Phone is required";
  }

  if (Object.values(errors).some((error) => error !== "")) {
    return json({ errors });
  }

  const data = {
    image: "",
    firstname: firstname,
    lastname: lastname,
    zone: zone,
    idNumber: Number(idNumber),
    dob: dob,
    gender: gender,
    phone: phone,
    jobTitle: jobTitle,
    isOccupied: false,
  };

  const { db } = await connectToDatabase();

  const blockExists = await db
    .collection("teams")
    .findOne({ idNumber: idNumber, phone: phone });
  if (!blockExists) {
    const result = await db.collection("teams").insertOne(data);

    if (!result.acknowledged) {
      throw new Error("Failed to create member");
    }
    return redirect("/app/teams");
  }
  throw new Error("Unit with name already exists");
};

export default function NewUnit() {
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
        <Title order={4}>New Team Player</Title>
      </div>

      <Paper shadow="xs" radius="xs" p="xl" maw={550}>
        <MemberForm />
      </Paper>
    </div>
  );
}
