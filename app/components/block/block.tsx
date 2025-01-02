
import { Link} from "@remix-run/react";
import type { FC } from "react";
 
import {
  HiLocationMarker,
  HiHome,
  HiPhone,
  HiOutlineArrowRight,
} from "react-icons/hi";

export interface BlockData {
  _id?: string;
  name: string;
  location: string;
  units: number;
  floors: number;
  contact_1?: number;
  contact_2?: number;
  contact_3?: number;
}

type BlockProps = {
  block: BlockData;
};

const Block: FC<BlockProps> = ({ block }) => {

  return (
    <div className="card bg-base-100 hover:bg-base-300 hover:cursor-pointer w-80 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/app/blocks/${block._id?.toString()}`}
          className="  text-accent "
        >
          <div className="badge badge-neutral">{block.name}</div>
        </Link>

        <Link
          to={`/app/blocks/${block._id}`}
          className="btn-circle text-primary px-3 rounded-md font-semibold"
        >
          <HiOutlineArrowRight />
        </Link>
      </div>

      {/* Details: Location, Units, and Floors */}
      <div className="flex flex-row flex-wrap items-center mt-1 space-x-2">
        <p className="flex flex-row items-center gap-2 text-sm text-gray-700">
          <HiLocationMarker /> {block.location}
        </p>
        <p className="flex flex-row items-center gap-2 text-sm text-gray-700">
          <HiHome /> {block.units}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Floors:</strong> {block.floors}
        </p>
      </div>

      {/* Contact Info */}
      {(block.contact_1 || block.contact_2 || block.contact_3) && (
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
      )}
    </div>
  );
};

export default Block;
