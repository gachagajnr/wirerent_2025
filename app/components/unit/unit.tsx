import { Link } from "@remix-run/react";
import type { FC } from "react";

import { HiArrowSmRight, HiUserAdd, HiUser } from "react-icons/hi";
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

const Unit: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="card bg-base-100 hover:bg-base-200 hover:cursor-pointer w-80 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/app/units/${unit._id?.toString()}`}
          className=" text-primary-content font-semibold text-sm   "
        >
          {unit.name}
        </Link>
        <div className="mt-1 text-info text-xs">KES {unit.rent}</div>
      </div>
      <div className="mt-1  text-xs">{unit.block.name}</div>
      {unit.meterNo && (
        <div className="mt-1 text-black text-xs">Mtr No: {unit.meterNo}</div>
      )}

      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="text-sm text-gray-700">Floor: {unit.floor}</p>
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowSmRight /> {unit.type}
        </p>
      </div>
      {unit.isOccupied ? (
        <Link
          to="/app/tenants/${unit.tenant}"
          className="flex flex-row items-center flex-1 text-primary  justify-end btn btn-sm btn-ghost"
        >
          <HiUser />
          Tenant
        </Link>
      ) : (
        <Link
          to={`/app/units/${unit._id}`}
          className="flex flex-row items-center flex-1 text-primary  justify-end btn btn-sm btn-ghost"
        >
          <HiUserAdd />
        </Link>
      )}
    </div>
  );
};

export default Unit;
