// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// export the whole sessionStorage object

if (!process.env.SESSION_SECRET) {
  throw new Error("Session secret is missing");
}
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
