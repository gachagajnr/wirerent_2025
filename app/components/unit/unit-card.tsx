import type { FC } from "react";

import { HiArrowCircleUp, HiPencil } from "react-icons/hi";
import { BlockData } from "../block/block";

export interface UnitData {
  _id?: string;
  name: string;
  type: string;
  rent: number;
  block: BlockData;
  floor: number;
  meterNo: number;
  isOccupied: boolean;
}

type UnitProps = {
  unit: UnitData;
};

const UnitCard: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="card   hover:cursor-pointer  shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className=" text-primary-content font-semibold    ">
          {unit.name}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-1   text-sm btn btn-xs    ">
            <HiPencil /> Change
          </div>
        </div>
      </div>
      <div className="mt-1   text-xs">KES {unit.rent}</div>

      <div className="flex flex-col  items-start mt-1 ">
        <p className="text-sm text-gray-700">Floor: {unit.floor}</p>
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowCircleUp /> {unit.type}
        </p>
        {unit.meterNo && (
          <div className="mt-1 text-black text-xs">Mtr No: {unit.meterNo}</div>
        )}
      </div>
    </div>
  );
};

export default UnitCard;
