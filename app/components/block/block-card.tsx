import { Title } from "@mantine/core";
import type { FC } from "react";

import {
  HiLocationMarker,
  HiPhone,
  HiOfficeBuilding,
  HiPencil,
} from "react-icons/hi";

export interface BlockData {
  _id?: string;
  name: string;
  location: string;
  floors: number;
  contact_1?: number;
  contact_2?: number;
  contact_3?: number;
  units: string;
}

type BlockProps = {
  block: BlockData;
};

const BlockCard: FC<BlockProps> = ({ block }) => {
  return (
    <div className="card    shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className=" text-primary-content font-semibold  ">
          {block.name}
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-1   text-sm btn btn-xs    ">
            <HiPencil /> Change
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="flex flex-row items-center gap-2 text-sm ">
          Total Units: {block.units}
          <HiOfficeBuilding />
          Floors {block.floors}
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiLocationMarker /> {block.location}
        </p>
      </div>
      <Title order={6} className="mt-1">
        Contacts
      </Title>
      {(block.contact_1 || block.contact_2 || block.contact_3) && (
        <div className="flex flex-col items-start   mt-1 space-y-1">
          <p className="flex flex-row items-center gap-1 text-xs text-gray-700">
            <HiPhone /> {block.contact_1 ? block.contact_1 : "N/A"}
          </p>
          <p className="flex flex-row items-center gap-1 text-xs text-gray-700">
            <HiPhone /> {block.contact_2 ? block.contact_2 : "N/A"}
          </p>
          <p className="flex flex-row items-center gap-1 text-xs text-gray-700">
            <HiPhone /> {block.contact_3 ? block.contact_3 : "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockCard;
