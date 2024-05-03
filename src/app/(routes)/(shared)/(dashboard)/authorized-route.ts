"use server"

import { navLinks } from "@/utils/nav-links";
import { headers } from "next/headers";

export async function dashboardAuthorizedRoutes(role: string) {
          const headersList = headers();
          const pathname = headersList.get('x-pathname');

          const route = navLinks.find(route => route.href === pathname);

          const isAllowed = route?.roles.includes(role) ? true : false;

          return isAllowed;
}