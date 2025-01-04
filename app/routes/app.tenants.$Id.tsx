import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft } from "react-icons/hi";

export default function Tenant() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/tenants" className="btn btn-circle btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>Tenant Detail</Title>
      </div>
      {/* <BlockForm /> */}
    </div>
  );
}
