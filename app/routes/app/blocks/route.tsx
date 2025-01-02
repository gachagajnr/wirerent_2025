import { Title } from "@mantine/core";
import { Outlet } from "@remix-run/react";
export default function Blocks() {
  return (
    <div>
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Blocks</Title>
      </div>

      <Outlet />
    </div>
  );
}
