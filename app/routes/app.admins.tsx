import { Link, Outlet } from "@remix-run/react";
export default function Admins() {
  return (
    <div>
      Admins Page
      <Link to="/app/admins/4">Admin 4</Link>
      <Outlet />
    </div>
  );
}
