import { authenticator } from "~/utils/auth.server";

export const loader = async ({ request }: { request: Request }) => {
  return await authenticator.authenticate("google", request, {
    successRedirect: "/app",
    failureRedirect: "/login",
  });
};
