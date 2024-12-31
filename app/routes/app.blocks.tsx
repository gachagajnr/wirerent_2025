import { Link, Outlet } from "@remix-run/react";
export default function Blocks() {
  return (
    <div>
      Blocks Page
      <Link to="/app/blocks/4">Block Number 4</Link>
      <Outlet />
    </div>
  );
}
