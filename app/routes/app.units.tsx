import { Link, Outlet } from "@remix-run/react";
export default function Units() {
  return (
    <div>
      Units Page
      <Link to="/app/units/4">Unit 4</Link>
      <Outlet />
    </div>
  );
}