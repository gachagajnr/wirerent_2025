import { useLoaderData, Outlet, useNavigate } from "@remix-run/react";
import { Text, Paper, Title } from "@mantine/core";
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
    .findOne({ _id: new ObjectId(params.Id) });

  const plan = JSON.parse(JSON.stringify(response));
  return { user, plan };
};

export default function Unit() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <div className="container  mx-auto flex justify-start items-center min-h-screen mt-16  flex-col gap-4">
      <div className=" max-w-5xl">
        <div className="flex flex-row gap-4 items-center py-4">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-circle btn-sm"
          >
            <HiArrowLeft />
          </button>
          <Title order={4}>
            You&apos;re Subscribing to{" "}
            <span className="text-primary">{data.plan.name}</span>
          </Title>
        </div>
        <Paper shadow="xs" p="xl" radius="lg" withBorder miw={800}>
          <Text>
            Dear <span className="text-secondary">{data.user.email}</span>
          </Text>
          <Text>
            You&apos;re subscribing to a{" "}
            <span className="font-bold">AroundHS</span> Lawn Management{" "}
            <span className="text-primary font-semibold">
              {" "}
              {data.plan.frequency}
            </span>{" "}
            package plan of{" "}
            <span className="text-primary font-semibold">
              KES {data.plan.price}
            </span>{" "}
            with the benefits listed below;
          </Text>
          <ul className="text-gray-700 list-disc list-inside mb-6 mt-6">
            {data.plan.addons.map((addon: string) => {
              return <li key={addon}>{addon}</li>;
            })}
          </ul>
          <div className="flex flex-row justify-end">
            <button
              // to={`subscribe/${plan._id}`}
              className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all"
            >
              Subscribe
            </button>
          </div>
        </Paper>
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
