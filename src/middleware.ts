import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("Middle Ware!");

  const res = request.cookies.has("accessToken"); // => true
  if (request.nextUrl.pathname.startsWith("/home") && !res) {
    console.log(res);
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    (request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup") &&
    res
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  } else {
    return NextResponse.next();
  }
}
