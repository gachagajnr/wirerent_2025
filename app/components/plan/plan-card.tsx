import { Link } from "@remix-run/react";
import type { FC } from "react";

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

const PlanCard: FC<PlanProps> = ({ plan }) => {
  return (
    <div className="    hover:cursor-pointer   p-6">
      <div className="mb-6 flex items-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 2H6C5.44772 2 5 2.44772 5 3V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V7L16 2Z" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 ml-4">
          {plan.name}
        </h3>
      </div>
      <p className="text-xl font-semibold mb-4 text-gray-800">
        KES <span className="text-primary">{plan.price}</span>/<span className="font-light">{plan.frequency}</span>
      </p>
      <p className="text-lg text-gray-700 mb-4">{plan.description}</p>
      <ul className="text-gray-700 list-disc list-inside mb-6">
        {plan.addons.map((addon: string) => {
          return <li key={addon}>{addon}</li>;
        })}
      </ul>
      <div>
        <Link
          to={`subscribe/${plan._id}`}
          className="btn btn-outline px-8 py-3 rounded-full font-semibold border-gray-300 text-gray-700 hover:bg-gray-200 transition-all"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
