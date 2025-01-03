import { Link, useLoaderData } from "@remix-run/react";
import { TextInput, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import { HiSearch } from "react-icons/hi";
import Tenant, { TenantData } from "~/components/tenant/tenant";

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
    data = await db
      .collection("tenants")
      .aggregate([
        {
          $lookup: {
            from: "units",
            localField: "unitId",
            foreignField: "_id",
            as: "unit",
          },
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
          $unwind: "$unit",
        },
        {
          $unwind: "$block",
        },
      ])
      .toArray();
  } else {
    data = await db
      .collection("tenants")
      .aggregate([
        {
          $lookup: {
            from: "units",
            localField: "unitId",
            foreignField: "_id",
            as: "unit",
          },
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
          $unwind: "$unit",
        },
        {
          $unwind: "$block",
        },
      ])
      .toArray();
  }
  const tenants = JSON.parse(JSON.stringify(data));

  return { user, year, tenants };
};

export default function Tenants() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Tenants</Title>
        <Link
          to="/app/tenants/new"
          className="btn btn-primary text-white btn-sm"
        >
          New
        </Link>
      </div>

      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<HiSearch />}
        label=""
        placeholder=" Search"
      />
      <div className="flex flex-row flex-wrap justify-center sm:justify-center lg:justify-start gap-3">
        {data.tenants.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 units`}</p>
        ) : (
          data.tenants.map((tenant: TenantData) => {
            return <Tenant key={tenant._id} tenant={tenant} />;
          })
        )}
      </div>
    </div>
  );
}
