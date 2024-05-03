"use server"

import { Config } from "@/config";
import { logOut } from "@/lib/action";
import { TTokenUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getToken() {
          const token = cookies().get(Config.cookieName)?.value!;

          if (!token) return redirect('/auth/login');

          return token;
}

export async function getUserFromToken() {
          const token = cookies().get(Config.cookieName)?.value!;

          if (token) {
                    const decoded = jwtDecode(token) as TTokenUser;

                    if (!decoded || (decoded?.exp && decoded?.exp * 1000 < Date.now())) {
                              await logOut();
                              return redirect('/auth/login');
                    }

                    return decoded;
          }

          return null;
}