import { Link } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft } from "react-icons/hi";

export default function Block() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/app/blocks" className="btn  btn-circle  btn-sm">
          <HiArrowLeft />
        </Link>
        <Title order={4}>Block Detail</Title>
      </div>
      {/* <BlockForm /> */}
    </div>
  );
}
