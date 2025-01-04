import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft, HiChat, HiMail } from "react-icons/hi";
import { LoaderFunction } from "@remix-run/node";
import { ObjectId } from "mongodb";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import BlockCard from "~/components/block/block-card";
import UnitTable from "~/components/unit/unit-table";

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();

  const blockDetails = await db
    .collection("blocks")
    .aggregate([
      // Match the block by its ID
      {
        $match: { _id: new ObjectId(params.Id) },
      },
      // Lookup to fetch all units belonging to this block
      {
        $lookup: {
          from: "units", // Join with the units collection
          localField: "_id", // Match blocks._id
          foreignField: "blockId", // With units.blockId
          as: "allunits", // Save the matched units as "allunits"
        },
      },
      // Unwind the units array to process each unit individually
      {
        $unwind: {
          path: "$allunits",
          preserveNullAndEmptyArrays: true, // Keep blocks even if they have no units
        },
      },
      // Lookup to fetch the tenant details for each unit
      {
        $lookup: {
          from: "tenants", // Join with the tenants collection
          localField: "allunits.tenantId",
          foreignField: "_id",
          as: "allunits.tenant",
        },
      },
      // Unwind the tenant array (if each unit has a single tenant)
      {
        $unwind: {
          path: "$allunits.tenant",
          preserveNullAndEmptyArrays: true, // Keep units even if they have no tenants
        },
      },

      {
        $group: {
          _id: "$_id",
          blockDetails: { $first: "$$ROOT" },
          allunits: { $push: "$allunits" }, // Collect all units (with tenants) into an array
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$blockDetails", { allunits: "$allunits" }],
          },
        },
      },
    ])
    .next();

  const block = JSON.parse(JSON.stringify(blockDetails));

  return { user, block };
};

export default function BlockDetail() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  console.log(data);
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
        <Title order={4}>
          {data.block.name} ({data.block.allunits.length} Units)
        </Title>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
        <div className="flex flex-col gap-2 w-full lg:w-3/5 md:w-3/5 sm:w-full">
          <div className="flex flex-row justify-between">
            <Title order={4}>Units</Title>
            <Link
              to="/app/units/new"
              className="btn btn-xs btn-primary text-white"
            >
              New
            </Link>
          </div>
          <UnitTable units={data.block.allunits} />
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5 sm:w-full">
          <div className="card flex flex-col p-4   ">
            <div className="flex flex-col gap-1.5">
              <BlockCard block={data.block} />

              <div className="flex flex-row gap-2 card shadow-lg rounded-lg items-center p-4">
                <Link
                  to="mail"
                  className="btn btn-circle btn-sm"
                  title="Send Mail"
                >
                  <HiMail />
                </Link>

                <Link
                  to="sms"
                  className="btn btn-circle btn-sm"
                  title="Send Sms"
                >
                  <HiChat />
                </Link>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
