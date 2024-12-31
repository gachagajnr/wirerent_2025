import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchBlocks } from "~/utils/dataFetch";

interface Block {
  id: string;
  name: string;
}

interface LoaderData {
  data: Block[];
}

export const loader: LoaderFunction = async () => {
  return fetchBlocks();
};

export default function Blocks() {
  const blocks = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Blocks</h1>
      <ul>
        {blocks.data.map((block: any) => (
          <li key={block.id}>{block.name}</li>
        ))}
      </ul>
    </div>
  );
}
