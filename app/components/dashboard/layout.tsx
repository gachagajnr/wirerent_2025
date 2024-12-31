import { Outlet, Link, Form } from "@remix-run/react";
import { User } from "~/utils/auth.server";

interface DashboardLayoutProps {
  user: User;
}

export default function DashboardLayout({ user }: DashboardLayoutProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary btn-sm drawer-button lg:hidden right-4"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu    min-h-full w-80 p-4">
          <li>
            <Link to="/app/agencies">Agencies</Link>
          </li>
          <li>
            <Link to="/app/blocks">Blocks</Link>
          </li>
          <li>
            <Link to="/app/units">Units</Link>
          </li>
          <li>
            <Link to="/app/admins">Admins</Link>
          </li>
          <li>
            <Link to="/app/account">{user.email}</Link>
          </li>
          <Form method="post">
            <button type="submit" name="action" value="logout" className="btn btn-error btn-sm text-white">
              Logout
            </button>
          </Form>
        </ul>
      </div>
    </div>
  );
}
