"use server"

import { Config } from "@/config";
import { cookies } from 'next/headers';

export async function login(token: string) {
          cookies().set(Config.cookieName, token, {
                    path: "/",
                    httpOnly: Config.nodeEnv === "production",
                    expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
                    secure: Config.nodeEnv === "production",
          });
}

export async function logOut() {
          cookies().set(Config.cookieName, "", {
                    path: "/",
                    httpOnly: Config.nodeEnv === "production",
                    expires: new Date(0),
          });
}