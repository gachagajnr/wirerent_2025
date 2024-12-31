import {  LoaderFunction } from "@remix-run/node";
 import { authenticator } from "~/utils/auth.server";


import DashboardLayout from "~/components/dashboard/layout";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
   });
};

export default function Dashboard() {
  return <DashboardLayout />;
}
