import { Link } from "@remix-run/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/agencies">Agencies</Link>
          </li>
          <li>
            <Link to="/dashboard/blocks">Blocks</Link>
          </li>
          <li>
            <Link to="/dashboard/units">Units</Link>
          </li>
          <li>
            <Link to="/dashboard/user">Profile</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
