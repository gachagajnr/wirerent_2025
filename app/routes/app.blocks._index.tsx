import { Title,TextInput } from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";
import { connectToDatabase } from "~/utils/db.server";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "../utils/auth.server";
import Block, { BlockData } from "~/components/block/block";
import {  HiSearch } from "react-icons/hi";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { db } = await connectToDatabase();
  const url = new URL(request.url);
  const yearFilter = Number(url.searchParams.get("year"));
  const year = yearFilter || new Date().getFullYear();

  let blocks;

  if (yearFilter) {
    blocks = await db.collection("blocks").find({}).toArray();
  } else {
    blocks = await db.collection("blocks").find({}).toArray();
  }
  const data = JSON.parse(JSON.stringify(blocks));

  return { user, year, data };
};

export default function Blocks() {
  const blocks = useLoaderData<typeof loader>();
  // console.log("USER IS", user);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between  gap-4">
        <div className="flex flex-row justify-start items-center gap-2">
          <Title order={5}>Blocks</Title>
          <Title order={5}>({blocks.data.length})</Title>
        </div>
        <Link to="/app/blocks/new" className="btn btn-primary text-white btn-sm">
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
        {blocks.data.length === 0 ? (
          <p className="text-gray-500 italic">{`You have added 0 blocks`}</p>
        ) : (
           blocks.data.map((block: BlockData) => {
            return <Block key={block._id} block={block} />;
          })
        )}
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
