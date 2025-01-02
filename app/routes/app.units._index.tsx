import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";

export default function Units() {
  return (
    <div>
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Units</Title>
        <Link to="/app/units/new" className="btn btn-primary text-white btn-sm">
          New
        </Link>
      </div>
    </div>
  );
}
