import { Link, Outlet } from "@remix-run/react";
export default function Agencies() {
  return (
    <div>
      Agencies Page
      <Link to="/app/agencies/4">Number 4</Link>
      <Outlet />
    </div>
  );
}
