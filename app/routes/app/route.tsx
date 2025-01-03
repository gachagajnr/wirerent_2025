import { LoaderFunction, ActionFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import DashboardLayout from "~/components/dashboard/layout";

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.logout(request, { redirectTo: "/login" });
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();

  return <DashboardLayout user={user} />;
}
