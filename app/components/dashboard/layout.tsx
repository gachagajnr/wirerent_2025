import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "@remix-run/react";

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* Header Section */}
      <AppShell.Header>
        <div className="flex items-center justify-between px-4">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </div>
      </AppShell.Header>

      {/* Sidebar (Navbar) Section */}
      <AppShell.Navbar p="md">
        <nav>
          <ul>
            <li>
              <Link to="/app/agencies">Agencies</Link>
            </li>
            <li>
              <Link to="/app/blocks">Blocks</Link>
            </li>
            <li>
              <Link to="/app/units">Units</Link>
            </li>
          </ul>
        </nav>
      </AppShell.Navbar>

      {/* Main Content Section */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
