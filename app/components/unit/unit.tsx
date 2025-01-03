import { Link } from "@remix-run/react";
import type { FC } from "react";

import {
  HiArrowSmRight,
  HiUserAdd,
  HiUser,
  HiLocationMarker,
  HiOfficeBuilding,
} from "react-icons/hi";
import { BlockData } from "../block/block";
import { TenantData } from "../tenant/tenant";

export interface UnitData {
  _id?: string;
  name: string;
  type: string;
  rent: number;
  block: BlockData;
  tenant: TenantData;
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
        <div className="flex flex-col">
          <div className="mt-1 text-info text-xs">KES {unit.rent}</div>
          {unit.tenant && (
            <div className="text-warnning text-xs">
              Due {unit.tenant.paymentDue}
            </div>
          )}
        </div>{" "}
      </div>
      <div className="mt-1 flex flex-row gap-1 items-center  text-xs">
        {" "}
        <HiOfficeBuilding />
        {unit.block.name} <HiLocationMarker />
        {unit.block.location}
      </div>
      {unit.meterNo && (
        <div className="mt-1 text-black text-xs">Mtr No: {unit.meterNo}</div>
      )}

      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="text-sm text-gray-700">Floor: {unit.floor}</p>
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowSmRight /> {unit.type}
        </p>
      </div>
      {unit.isOccupied && unit.tenant ? (
        <Link
          to={`/app/tenants/${unit.tenant._id}`}
          className="flex flex-row items-center flex-1 text-primary  justify-end btn btn-xs btn-ghost"
        >
          <HiUser />
          {unit.tenant.firstName} {unit.tenant.lastName}
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
