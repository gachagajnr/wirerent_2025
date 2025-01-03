import { Link, useLoaderData } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft } from "react-icons/hi";
import { connectToDatabase } from "~/utils/db.server";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { ObjectId } from "mongodb";
import UnitDetail from "~/components/unit/unit-detail";

// export const loader = async ({ params }: UnitProps) => {
//   const unit = await getContact(params.contactId);
//   return json({ unit });
// };

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  console.log("first", params.Id);
  const { db } = await connectToDatabase();

  const response = await db
    .collection("units")
    .aggregate([
      {
        $match: { _id: new ObjectId(params.Id) },
      },
      {
        $lookup: {
          from: "blocks",
          localField: "blockId",
          foreignField: "_id",
          as: "block",
        },
      },
      {
        $unwind: {
          path: "$block",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .next();

  const unit = JSON.parse(JSON.stringify(response));

  return { user, unit };
};

export default function Unit() {
  const response = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/units" className="btn btn-circle btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>
          {response.unit.name} {response.unit.block.name}
        </Title>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
        <div className="w-full lg:w-3/5 md:w-3/5 sm:w-full">
          <UnitDetail unit={response.unit} />
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5 sm:w-full">
          <div className="card flex flex-col p-4 border rounded-lg">
            <Title order={4}>Tenant</Title>
            <div>Tenant details</div>
          </div>
        </div>
      </div>
    </div>
  );
}
