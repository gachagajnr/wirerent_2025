import { Link } from "@remix-run/react";
import type { FC } from "react";

import {
  HiArrowSmRight,
  HiCurrencyDollar,
  // HiLocationMarker,
  // HiHome,
  // HiPhone,
  HiPlusCircle,
} from "react-icons/hi";
import { BlockData } from "../block/block";

export interface UnitData {
  _id?: string;
  name: string;
  type: string;
  rent: number;
  block: BlockData;
  floor: number;
  contact_1?: number;
  contact_2?: number;
  contact_3?: number;
}

type UnitProps = {
  unit: UnitData;
};

const Block: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="card bg-base-100 hover:bg-base-200 hover:cursor-pointer w-80 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/app/blocks/${unit._id?.toString()}`}
          className=" text-primary-content font-semibold border   p-1.5 rounded-box "
        >
          <div className="  rounded-sm">{unit.name}</div>
        </Link>

        <div className="flex flex-row gap-2 items-center">
          <Link
            to={`/app/blocks/${unit._id}/new`}
            className="flex flex-row items-center gap-1   text-info btn-xs  "
          >
            <HiPlusCircle /> Unit
          </Link>
        </div>
      </div>
      <div className="mt-1  text-sm">{unit.block.name}</div>


      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowSmRight /> {unit.type}
        </p>
        <p className="flex flex-row items-center gap-2 text-sm text-gray-700">
          <HiCurrencyDollar /> {unit.rent}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Floor:</strong> {unit.floor}
        </p>
      </div>

      {/* {(block.contact_1 || block.contact_2 || block.contact_3) && (
        <div className="flex flex-row items-center flex-wrap mt-1 space-x-2">
          <p className="flex flex-row items-center gap-2 text-sm text-gray-700">
            <HiPhone /> {block.contact_1 ? block.contact_1 : "N/A"}
          </p>
          <p className="text-sm text-gray-700">
            {block.contact_2 ? block.contact_2 : "N/A"}
          </p>
          <p className="text-sm text-gray-700">
            {block.contact_3 ? block.contact_3 : "N/A"}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Block;
