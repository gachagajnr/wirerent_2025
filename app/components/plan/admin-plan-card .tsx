import { Link } from "@remix-run/react";
import type { FC } from "react";
import { HiPencil } from "react-icons/hi";

export interface PlanData {
  _id?: string;
  name: string;
  frequency: string;
  price: number;
  description: string;
  addons: string[];
}

type PlanProps = {
  plan: PlanData;
};

const AdminPlanCard: FC<PlanProps> = ({ plan }) => {
  return (
    <div className=" w-72   hover:cursor-pointer ">
      <div className="mb-6 flex items-center">
        <h3 className="text-2xl font-semibold text-gray-900  ">{plan.name}</h3>
      </div>
      <p className="text-xl font-semibold mb-4 text-gray-800">
      KES <span className="text-primary">{plan.price}</span>/<span className="font-light">{plan.frequency}</span>
      </p>
      <p className="text-sm text-gray-700 mb-4">{plan.description}</p>
      <ul className="text-gray-700 list-disc list-inside text-sm mb-6">
        {plan.addons.map((addon: string) => {
          return <li key={addon}>{addon}</li>;
        })}
      </ul>
      <div>
        <Link
          to={`/plans/${plan._id}/edit`}
          className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all"
        >
          <HiPencil /> Change
        </Link>
      </div>
    </div>
  );
};

export default AdminPlanCard;
