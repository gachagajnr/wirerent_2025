import { useLoaderData, Outlet, useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft } from "react-icons/hi";
import { connectToDatabase } from "~/utils/db.server";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { ObjectId } from "mongodb";

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();

  const response = await db
    .collection("plans")
    .find({ _id: new ObjectId(params.Id) });

  const plans = JSON.parse(JSON.stringify(response));

  return { user, plans };
};

export default function Unit() {
  const response = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  console.log(response);
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
        <Title order={4}>You&apos;re Subscribing</Title>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
        <Outlet />
      </div>
    </div>
  );
}
