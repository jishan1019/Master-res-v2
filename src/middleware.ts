import { Config } from '@/config';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
          const token = req.cookies.get(Config.cookieName)?.value;

          const path = req.nextUrl.pathname;

          if (path.startsWith("/auth") && token) {
                    return NextResponse.redirect(new URL("/", req.nextUrl))
          }

          if (!path.startsWith("/auth") && !token) {
                    return NextResponse.redirect(new URL("/auth/login", req.nextUrl))
          }

          const url = new URL(req.url);
          const pathname = url.pathname;
          const requestHeaders = new Headers(req.headers);
          requestHeaders.set('x-pathname', pathname);

          return NextResponse.next({
                    headers: requestHeaders,
          });
}

export const config = {
          matcher: [
                    "/dashboard/:path*",
                    "/auth/:path*",
          ],
}