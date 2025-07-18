
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export { auth as middleware } from "@/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuth = !!req.auth;

  const publicPaths = ["/", "/sign-in"];

  if (isAuth) {
    // Authenticated user trying to access public pages — redirect to dashboard
    if (publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  } else {
    // Not authenticated user trying to access protected page — redirect to sign-in
    if (!publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/", "/sign-in"],
};
