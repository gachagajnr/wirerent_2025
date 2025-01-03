import { Link } from "@remix-run/react";
import type { FC } from "react";

import { HiArrowSmRight, HiHome, HiOfficeBuilding } from "react-icons/hi";
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

const UnitDetail: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="card bg-base-100 hover:cursor-pointer border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/app/units/${unit._id?.toString()}`}
          className="flex flex-row items-center gap-2   font-semibold  text-secondary  "
        >
          <HiHome /> {unit.name}
        </Link>
        <div className=" text-primary font-semibold  ">KES {unit.rent}</div>
      </div>
      <div className="  flex flex-row gap-2 items-center text-sm ">
        <HiOfficeBuilding /> {unit.block.name}
      </div>

      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="text-sm text-gray-700">
          <strong>Floor:</strong> {unit.floor}
        </p>
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowSmRight /> {unit.type}
        </p>
      </div>
    </div>
  );
};

export default UnitDetail;
