import { Link, useLoaderData, } from "@remix-run/react";
import { Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import TeamPlayerCard, { TeamPlayerData } from "~/components/team-player/team-player-card";
// import { PlanData } from "~/components/plan/plan-card";
// import AdminPlanCard from "~/components/plan/admin-plan-card ";

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
    data = await db.collection("teams").find({}).toArray();
  } else {
    data = await db.collection("teams").find({}).toArray();
  }
  const teams = JSON.parse(JSON.stringify(data));
   return { user, year, teams };
};

export default function Services() {
  const data = useLoaderData<typeof loader>();
 
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between  gap-4">
        <div className="flex gap-2 items-center flex-1">
          <Title order={4}>Teams</Title>
        </div>
        <Link to="/app/services/new" className="btn btn-primary text-white btn-sm">
          New
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-start gap-2">
        {data.teams.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 team players`}</p>
        ) : (
          data.teams.map((team: TeamPlayerData) => {
            return (
              <div
                key={team._id}
                className=" text-left p-4"
              >
                <TeamPlayerCard teamPlayer={team} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
