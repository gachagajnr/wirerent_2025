import { Title } from "@mantine/core";
import { Link } from "@remix-run/react";
export default function Blocks() {
  return (
    <div>
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Blocks</Title>
        <Link to="/app/blocks/new" className="btn btn-primary btn-sm">
          New
        </Link>
      </div>
      <Link to="/app/blocks/2" className="btn btn-primary btn-sm">
        Three
      </Link>
      <Link to="/app/blocks/3" className="btn btn-primary btn-sm">
        Four
      </Link>
      {/* <Outlet /> */}
    </div>
  );
}
