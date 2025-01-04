import { Link } from "@remix-run/react";
import type { FC } from "react";

import { HiDocument, HiMail, HiPhone } from "react-icons/hi";

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
    <div className="card bg-base-100   hover:cursor-pointer  shadow-lg rounded-lg p-4">
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
    </div>
  );
};

export default TenantCard;
