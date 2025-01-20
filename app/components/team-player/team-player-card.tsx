import type { FC } from "react";

import { HiPencil } from "react-icons/hi";

export interface TeamPlayerData {
  _id?: string;
  image: string;
  firstname: string;
  lastname: string;
  zone: string;
  idNumber: number;
  dob: string;
  gender: string;
  phone: string;
  jobTitle: string;
  isOccupied: boolean;
}

type TeamPlayerProps = {
  teamPlayer: TeamPlayerData;
};

const TeamPlayerCard: FC<TeamPlayerProps> = ({ teamPlayer }) => {
  const {
    image,
    firstname,
    lastname,
    zone,
    idNumber,
    dob,
    gender,
    phone,
    jobTitle,
    isOccupied,
  } = teamPlayer;
  return (
    <div className="card shadow-lg rounded-lg p-4 hover:cursor-pointer">
      <div className="flex items-center">
        <img
          src={image || "/default-avatar.png"}
          alt={`${firstname} ${lastname}`}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-lg font-bold text-primary">
            {firstname} {lastname}
          </h2>
          <p className="text-sm text-gray-600">{jobTitle}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm">
          <span className="font-semibold">Zone:</span> {zone}
        </p>
        <p className="text-sm">
          <span className="font-semibold">ID Number:</span> {idNumber}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Date of Birth:</span> {dob}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Gender:</span> {gender}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Occupied:</span>{" "}
          {isOccupied ? "Yes" : "No"}
        </p>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="btn btn-xs btn-secondary flex items-center gap-1">
          <HiPencil />
          Edit
        </button>
      </div>
    </div>
  );
};

export default TeamPlayerCard;
