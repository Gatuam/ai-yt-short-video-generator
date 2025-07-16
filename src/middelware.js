import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    },
  },
  async middleware(req) {
    const token = req.nextauth?.token;


    if (!token && (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/profile"))) {
      return NextResponse.redirect(new URL("/", req.url));
    }

 
    if (token && req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/", "/dashboard/:path*", "/profile/:path*"],
};
