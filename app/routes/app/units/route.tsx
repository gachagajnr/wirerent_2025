import { Title } from "@mantine/core";
import { Outlet } from "@remix-run/react";
export default function Units() {
  return (
    <div>
      <div className="flex flex-row justify-between  gap-4">
        <Title order={3}>Units</Title>
      </div>

      <Outlet />
    </div>
  );
}
