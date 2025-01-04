import { useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiArrowLeft } from "react-icons/hi";

export default function Tenant() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-circle btn-sm"
        >
          <HiArrowLeft />
        </button>
        <Title order={4}>Tenant Detail</Title>
      </div>
      {/* <BlockForm /> */}
    </div>
  );
}
