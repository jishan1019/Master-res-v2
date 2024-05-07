import { Config } from "@/config";
import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: Config.baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth?.token;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["User", "Menu", "PostCode"],
});
