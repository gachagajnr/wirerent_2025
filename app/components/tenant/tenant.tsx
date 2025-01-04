import { Link } from "@remix-run/react";
import type { FC } from "react";

import {
  HiArrowCircleRight,
  HiArrowSmRight,
  HiDocument,
  HiHome,
  HiOfficeBuilding,
  HiPhone,
} from "react-icons/hi";
import { BlockData } from "../block/block";
import { UnitData } from "../unit/unit";

export interface TenantData {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: number;
  paymentDue: number;
  unit: UnitData;
  block: BlockData;
  idNumber: number;
  email?: string;
  notes?: string;
  // contact_3?: number;
}

type TenantProps = {
  tenant: TenantData;
};

const Tenant: FC<TenantProps> = ({ tenant }) => {
  return (
    <Link
      to={`/app/tenants/${tenant._id?.toString()}`}
      className="card bg-base-100 hover:bg-base-200 hover:cursor-pointer w-80 shadow-lg rounded-lg p-4"
    >
      <div className="flex justify-between items-center">
        <div className=" text-primary-content font-semibold">
          <div className=" text-xs rounded-sm">
            {tenant.firstName} {tenant.lastName}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-1 text-info text-xs">KES {tenant.unit.rent}</div>
          <div className="text-warnning text-xs">Due {tenant.paymentDue}</div>
        </div>
      </div>
      <div className="mt-1 flex flex-row items-center gap-1  text-sm">
        <HiHome /> {tenant.unit.name} - <HiOfficeBuilding /> {tenant.block.name}
      </div>
      <div className=" flex flex-row mt-1 items-center gap-1  text-xs">
        <HiPhone /> {tenant.phone} - <HiDocument /> {tenant.idNumber}
      </div>

      <div className="flex flex-row flex-wrap items-center text-xs space-x-2">
        <p className="text-sm text-gray-700">
          <strong>Floor:</strong> {tenant.unit.floor}
        </p>
        <p className="flex flex-row items-center gap-2 text-sm text-secondary">
          <HiArrowSmRight /> {tenant.unit.type}
        </p>
        <Link
          to={`/app/units/${tenant.unit._id}`}
          className="flex flex-1 text-primary  justify-end btn btn-ghost"
        >
          <HiArrowCircleRight />
        </Link>
      </div>
    </Link>
  );
};

export default Tenant;
