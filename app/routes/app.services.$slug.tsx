import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft, HiChat, HiMail } from "react-icons/hi";
import BlockCard from "~/components/block/block-card";
import { LoaderFunction } from "@remix-run/node";
import { ObjectId } from "mongodb";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import UnitCard from "~/components/unit/unit-card";
import TenantCard from "~/components/tenant/tenant-card";

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();

  const tenantData = await db
    .collection("tenants")
    .aggregate([
      // Match the tenant by their ID
      {
        $match: { _id: new ObjectId(params.Id) },
      },
      // Lookup to fetch the associated unit details
      {
        $lookup: {
          from: "units", // Join with the units collection
          localField: "unitId", // Match tenants.unitId
          foreignField: "_id", // With units._id
          as: "unitDetails", // Save the matched unit as "unitDetails"
        },
      },
      {
        $unwind: {
          path: "$unitDetails",
          preserveNullAndEmptyArrays: true, // Keep tenants even if they have no associated unit
        },
      },
      {
        $lookup: {
          from: "blocks", // Join with the blocks collection
          localField: "blockId", // Match tenants.blockId
          foreignField: "_id", // With blocks._id
          as: "blockDetails", // Save the matched block as "blockDetails"
        },
      },
      {
        $unwind: {
          path: "$blockDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          idNumber: 1,
          phone: 1,
          email: 1,
          paymentDue: 1,
          notes: 1,
          unitDetails: 1,
          blockDetails: 1,
        },
      },
    ])
    .next();

  const tenant = JSON.parse(JSON.stringify(tenantData));

  return { user, tenant };
};

export default function Team() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
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
        <Title order={4}>Team Player Details</Title>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
        <div className="flex flex-col gap-2 w-full lg:w-3/5 md:w-3/5 sm:w-full">
          <div className="flex flex-row justify-between">
            <Title order={4}>Units</Title>
            <Link
              to="/app/teams/new"
              className="btn btn-xs btn-primary text-white"
            >
              New
            </Link>
          </div>
          {/* <UnitTable units={data.block.allunits} /> */}
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5 sm:w-full">
          <div className="card flex flex-col p-4   ">
            <div className="flex flex-col gap-1.5">
              <TenantCard tenant={data.tenant} />
              <UnitCard unit={data.tenant.unitDetails} />
              <BlockCard block={data.tenant.blockDetails} />

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
