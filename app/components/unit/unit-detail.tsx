import { Link } from "@remix-run/react";
import type { FC } from "react";

import {
  HiArrowSmRight,
  HiClock,
  HiHome,
  HiOfficeBuilding,
} from "react-icons/hi";
import { BlockData } from "../block/block";
import { TenantData } from "../tenant/tenant";
import { formatDate } from "~/helpers/formatters";

export interface UnitData {
  _id?: string;
  name: string;
  type: string;
  rent: number;
  block: BlockData;
  tenant: TenantData;
  floor: number;
  contact_1?: number;
  contact_2?: number;
  contact_3?: number;
  startDate?: string;
}

type UnitProps = {
  unit: UnitData;
};

const UnitDetail: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="card  hover:cursor-pointer  shadow-lg rounded-lg p-4">
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
      {unit.startDate && (
        <p className="flex flex-row justify-end items-center mt-1 gap-2 text-sm ">
          <HiClock  className="text-accent"/> Tenant Since: {formatDate(unit.startDate)}
        </p>
      )}
    </div>
  );
};

export default UnitDetail;
