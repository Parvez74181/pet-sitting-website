import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const protectedRoutes = [
  /^\/admin(\/.*)?/,
  /^\/cart(\/.*)?/,
  /^\/checkout(\/.*)?/,
  /^\/my-orders(\/.*)?/,
  /^\/my-reviews(\/.*)?/,
  /^\/my-returns-cancellations(\/.*)?/,
  /^\/update-profile(\/.*)?/,
  /^\/manage-my-account(\/.*)?/,
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the requested path matches any of the protected routes
  const isProtected = protectedRoutes.some((route) => route.test(pathname));

  if (isProtected) {
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET!,
      secureCookie: process.env.NODE_ENV === "production",
    });

    // If the token doesn't exist, redirect to the login page
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("next", req.url); // Use req.url to get the original URL

      return NextResponse.redirect(loginUrl);
    }
  }

  // If the token exists, continue to the requested route
  return NextResponse.next();
}
