import { Link, useLoaderData } from "@remix-run/react";
import { Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import { PlanData } from "~/components/plan/plan-card";
import AdminPlanCard from "~/components/plan/admin-plan-card ";

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
  console.log(plans);
  return { user, year, plans };
};

export default function Plans() {
  const data = useLoaderData<typeof loader>();
 
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
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-start gap-2">
        {data.plans.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 plans`}</p>
        ) : (
          data.plans.map((plan: PlanData) => {
            return (
              <div
                key={plan._id}
                className=" text-left p-4"
              >
                <AdminPlanCard plan={plan} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
