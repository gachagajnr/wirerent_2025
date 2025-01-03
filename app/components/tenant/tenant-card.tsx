 import { Link } from "@remix-run/react";
import type { FC } from "react";

import {
  HiArrowCircleRight,
  HiDocument,
  HiMail,
  HiPhone,
} from "react-icons/hi";

export interface TenantData {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: number;
  paymentDue: number;
  idNumber: number;
  email?: string;
  notes?: string;
  // contact_3?: number;
}

type TenantProps = {
  tenant: TenantData;
};

const TenantCard: FC<TenantProps> = ({ tenant }) => {
  return (
    <div className="card bg-base-100   hover:cursor-pointer w-80 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/app/tenants/${tenant._id?.toString()}`}
          className=" text-primary-content font-semibold"
        >
          <div className=" rounded-sm">
            {tenant.firstName} {tenant.lastName}
          </div>
        </Link>
        <div className="flex flex-col">
         
          <div className="text-warnning text-xs">Due {tenant.paymentDue}</div>
        </div>
      </div>
      <div className=" flex flex-row mt-1 items-center gap-1  text-xs">
        <HiMail /> Email: {tenant.email}
      </div>
      <div className=" flex flex-row mt-1 items-center gap-1  text-xs">
        <HiPhone /> Phone: {tenant.phone}
      </div>
      <div className=" flex flex-row mt-1 items-center gap-1  text-xs">
        <HiDocument /> ID Number: {tenant.idNumber}
      </div>

      <div className="flex flex-row flex-wrap items-center text-xs space-x-2">
        <Link
          to={`/app/tenants/${tenant._id}`}
          className="flex flex-1 text-primary  justify-end btn btn-ghost"
        >
          <HiArrowCircleRight />
        </Link>
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

export default TenantCard;
