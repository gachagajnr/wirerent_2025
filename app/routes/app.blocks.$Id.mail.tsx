import { useNavigate } from "@remix-run/react";
import { Title } from "@mantine/core";
import { HiXCircle } from "react-icons/hi";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import MailForm from "../components/forms/mail";

// export const loader = async ({ params }: UnitProps) => {
//   const unit = await getContact(params.contactId);
//   return json({ unit });
// };

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  // console.log("first", params.Id);
  // const { db } = await connectToDatabase();

  // const response = await db
  //   .collection("units")
  //   .aggregate([
  //     {
  //       $match: { _id: new ObjectId(params.Id) },
  //     },
  //     {
  //       $lookup: {
  //         from: "blocks",
  //         localField: "blockId",
  //         foreignField: "_id",
  //         as: "block",
  //       },
  //     },
  //     {
  //       $lookup: {
  //         from: "tenants",
  //         localField: "tenantId",
  //         foreignField: "_id",
  //         as: "tenant",
  //       },
  //     },
  //     {
  //       $unwind: {
  //         path: "$block",
  //         preserveNullAndEmptyArrays: true,
  //       },
  //     },
  //     {
  //       $unwind: {
  //         path: "$tenant",
  //         preserveNullAndEmptyArrays: true,
  //       },
  //     },
  //   ])
  //   .next();

  // const unit = JSON.parse(JSON.stringify(response));

  return { user };
};

export default function MailView() {
  const navigate = useNavigate();

  return (
    <div className="card p-4 border rounded-lg shadow">
      <div className="flex flex-row gap-4 items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-circle btn-sm"
        >
          <HiXCircle />
        </button>
        <Title order={5}>Send Mail</Title>
      </div>
      <MailForm />
    </div>
  );
}
