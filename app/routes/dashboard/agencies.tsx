import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAgencies } from "~/utils/dataFetch";

interface Agency {
  id: string;
  name: string;
}

interface LoaderData {
  data: Agency[];
}

export const loader: LoaderFunction = async () => {
  return fetchAgencies();
};

export default function Agencies() {
  const agencies = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Agencies</h1>
      <ul>
        {agencies.data.map((agency: any) => (
          <li key={agency.id}>{agency.name}</li>
        ))}
      </ul>
    </div>
  );
}
