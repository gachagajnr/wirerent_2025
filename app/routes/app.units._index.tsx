import { Link, useLoaderData } from "@remix-run/react";
import { TextInput, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";
import { HiSearch } from "react-icons/hi";
import Unit, { UnitData } from "~/components/unit/unit";

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
      .collection("units")
      .aggregate([
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
            preserveNullAndEmptyArrays: true, // Keep units without associated blocks
          },
        },
        {
          $unwind: {
            path: "$tenant",
            preserveNullAndEmptyArrays: true, // Keep units without associated tenants
          },
        },
      ])
      .toArray();
  } else {
    data = await db
      .collection("units")
      .aggregate([
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
      .toArray();
  }
  const units = JSON.parse(JSON.stringify(data));

  return { user, year, units };
};

export default function Units() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between  gap-4">
        <div className="flex gap-2 items-center flex-1">
          <Title order={4}>Units</Title>
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<HiSearch />}
            label=""
            placeholder=" Search"
          />
        </div>
        <Link to="/app/units/new" className="btn btn-primary text-white btn-sm">
          New
        </Link>
      </div>

      <div className="flex flex-row flex-wrap justify-center sm:justify-center lg:justify-start gap-3">
        {data.units.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 units`}</p>
        ) : (
          data.units.map((unit: UnitData) => {
            return <Unit key={unit._id} unit={unit} />;
          })
        )}
      </div>
    </div>
  );
}
