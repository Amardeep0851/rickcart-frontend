import { NextResponse, type NextRequest } from "next/server";
import { getCurrentUser } from "./lib/get-current-user";

const protectedRoute = ["/checkut","/orders", "/wishlist"]
const authRoutes = ["/sign-in", "/sign-up"]

export const middleware = (req:NextRequest) => {

  const session = req?.cookies?.get("SessionToken")?.value;
  const path = req.nextUrl.pathname;
  if(!session){
  if(protectedRoute.some((route) => path.startsWith(route))){
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  }

  if(session){
    if(authRoutes.includes(path)){
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};