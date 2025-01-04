import { Link } from "@remix-run/react";
import React from "react";

interface UnitData {
  _id?: string;
  name: string;
  type: string;
  rent: number;
  block: {
    name: string;
  };
  tenant: {
    _id: string;

    firstName: string;
    lastName: string;
  } | null;
  floor: number;
  meterNo: number;
  isOccupied: boolean;
}

interface Props {
  units: UnitData[];
}

const UnitTable: React.FC<Props> = ({ units }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Rent</th>
            <th>Tenant</th>
            <th>Floor</th>
            <th>Meter No</th>
            <th>Occupied</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr key={unit._id || index}>
              {/* <th>{index + 1}</th> */}
              <td>
                <Link to={`/app/units/${unit._id}`} className="text-primary">
                  {unit.name}
                </Link>
              </td>
              <td>{unit.type}</td>
              <td>{unit.rent}</td>

              <td>
                {unit.tenant ? (
                  <Link
                    to={`/app/tenants/${unit.tenant._id}`}
                    className="text-primary"
                  >
                    {unit.tenant.firstName} {unit.tenant.lastName}
                  </Link>
                ) : (
                  "Unoccupied"
                )}
              </td>
              <td>{unit.floor}</td>
              <td>{unit.meterNo}</td>
              <td>{unit.isOccupied ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTable;
