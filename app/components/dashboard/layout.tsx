import { Outlet, Link } from "@remix-run/react";
export default function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
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
        </ul>
      </div>
    </div>
  );
}
