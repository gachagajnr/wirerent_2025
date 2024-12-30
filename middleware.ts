import { NextRequest, NextResponse } from "next/server";
import feathersClient from "@/utils/api";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  try {
    // Attempt to re-authenticate the user
    await feathersClient.reAuthenticate();
  } catch {
    // Redirect unauthenticated users to the login page
    if (!url.pathname.startsWith("/login")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/protected-route/:path*"],
};
