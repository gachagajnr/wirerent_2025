import { Link, useLoaderData } from "@remix-run/react";
import { Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();
  const url = new URL(request.url);
  const yearFilter = Number(url.searchParams.get("year"));
  const year = yearFilter || new Date().getFullYear();

  let data;

  if (yearFilter) {
    data = await db.collection("plans").find({}).toArray();
  } else {
    data = await db.collection("plans").find({}).toArray();
  }
  const plans = JSON.parse(JSON.stringify(data));

  return { user, year, plans };
};

export default function Plans() {
  const data = useLoaderData<typeof loader>();
  console.log(data)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between  gap-4">
        <div className="flex gap-2 items-center flex-1">
          <Title order={4}>Subscription Plans</Title>
        </div>
        <Link to="/app/plans/new" className="btn btn-primary text-white btn-sm">
          New
        </Link>
      </div>

      <div className="flex flex-row flex-wrap justify-center sm:justify-center lg:justify-start gap-3">
        {/* {data.plans.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 units`}</p>
        ) : (
          data.plans.map((unit: UnitData) => {
            return <Unit key={unit._id} unit={unit} />;
          })
        )} */}
      </div>
    </div>
  );
}
