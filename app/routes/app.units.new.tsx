import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";
// import BlockForm from "~/components/forms/block";
import { HiArrowLeft } from "react-icons/hi";

export default function NewUnit() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link
          to="/app/units"
          className="btn    btn-sm"
        >
          <HiArrowLeft />
        </Link>
        <Title order={4}>New Unit</Title>
      </div>
      {/* <BlockForm /> */}
    </div>
  );
}
