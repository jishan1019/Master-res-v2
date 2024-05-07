"use server"

import { dashboardNavLinks } from "@/utils";
import { headers } from "next/headers";

export async function dashboardAuthorizedRoutes(role: string) {
          const headersList = headers();
          const pathname = headersList.get('x-pathname');

          const route = dashboardNavLinks.find(route => route.href === pathname);

          const isAllowed = route?.roles.includes(role) ? true : false;

          return isAllowed;
}