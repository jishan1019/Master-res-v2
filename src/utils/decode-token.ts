import { TTokenUser } from "@/types";
import { jwtDecode } from "jwt-decode";

export const decodeToken = (token: string) => {
          const decoded = jwtDecode(token) as TTokenUser;
          return decoded;
};