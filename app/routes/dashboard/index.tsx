import { LoaderFunction, redirect } from "@remix-run/node";
 
export const loader: LoaderFunction = async ({ request }) => {
  try {
    // Get the token from the cookie/storage first
    const token = await feathersClient.authentication.getAccessToken();

    if (!token) {
      // If no token exists, allow access to login page
      return null;
    }

    // Try to reauthenticate with the token
    const res = await feathersClient.reAuthenticate();
    console.log("Authentication successful:", res);
    return redirect("/dashboard");
  } catch (error) {
    // Clear any invalid tokens
    await feathersClient.authentication.removeAccessToken();
    console.log("Authentication error:", error);
    return null;
  }
};

import { Outlet } from "@remix-run/react";
import DashboardLayout from "~/components/dashboard/layout";
import feathersClient from "~/utils/feathersClient";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
