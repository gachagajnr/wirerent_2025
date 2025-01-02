import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";
export default function Units() {
  return (
    <div>
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Units</Title>
        <Link to="/app/units/new" className="btn btn-primary btn-sm">
          New
        </Link>
      </div>
      <Link to="/app/units/2" className="btn btn-primary btn-sm">
        Three
      </Link>
      <Link to="/app/units/3" className="btn btn-primary btn-sm">
        Four
      </Link>
    </div>
  );
}
