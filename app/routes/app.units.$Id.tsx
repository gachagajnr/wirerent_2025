import { Link, useLoaderData, Outlet, useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft, HiChat, HiMail, HiPhone, HiTicket } from "react-icons/hi";
import { connectToDatabase } from "~/utils/db.server";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { ObjectId } from "mongodb";
import UnitDetail from "~/components/unit/unit-detail";
import TenantCard from "~/components/tenant/tenant-card";

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

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
        $lookup: {
          from: "tenants",
          localField: "tenantId",
          foreignField: "_id",
          as: "tenant",
        },
      },
      {
        $unwind: {
          path: "$block",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$tenant",
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
        <Title order={4}>
          {response.unit.name} {response.unit.block.name}
        </Title>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col  gap-4">
        <div className="flex flex-col gap-2 w-full lg:w-3/5 md:w-3/5 sm:w-full">
          <UnitDetail unit={response.unit} />
          <Title order={4}>History</Title>
        </div>
        <div className="w-full lg:w-2/5 md:w-2/5 sm:w-full">
          <div className="card flex flex-col p-4   rounded-lg">
            {response.unit.tenant ? (
              <div className="flex flex-col gap-1.5">
                <TenantCard tenant={response.unit.tenant} />

                <div className="flex flex-row gap-2 card shadow-lg rounded-lg items-center p-4">
                  <Link
                    to="mail"
                    className="btn btn-circle btn-sm"
                    title="Send Mail"
                  >
                    <HiMail />
                  </Link>
                  <div className="btn btn-circle btn-sm">
                    <HiPhone />
                  </div>
                  <Link
                    to="sms"
                    className="btn btn-circle btn-sm"
                    title="Send Sms"
                  >
                    <HiChat />
                  </Link>
                  <Link
                    to="ticket"
                    className="btn btn-circle btn-sm"
                    title="Open a ticket"
                  >
                    <HiTicket />
                  </Link>
                </div>
                <Outlet />
              </div>
            ) : (
              <Link to="">Assign Tenant</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
