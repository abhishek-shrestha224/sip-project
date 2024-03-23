import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/about", request.url));
  }

  if (request.nextUrl.pathname === "/json") {
    return Response.json({ message: "authentication failed" }, { status: 200 });
  }

  if (request.nextUrl.pathname === "/cookies") {
    const response = NextResponse.next();
    // console.log(request.cookies.has("test"));

    request.cookies.delete("test");
    request.cookies.has("test"); // => false
    const allCookies = request.cookies.getAll();
    console.log(allCookies);

    // Setting cookies on the response using the `ResponseCookies` API
    return response;
  }

  // return NextResponse.next();
}
