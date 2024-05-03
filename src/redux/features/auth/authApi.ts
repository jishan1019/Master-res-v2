import { baseApi } from "@/redux/api/baseApi/baseApi";

const authApi = baseApi
    .injectEndpoints({
        endpoints: (builder) => ({
            getUserByToken: builder.query({
                query: () => ({
                    url: "/users/me",
                }),
                providesTags: ["User"],
            }),

            loginUser: builder.mutation({
                query: (body: any) => ({
                    url: "/users/login",
                    method: "POST",
                    body: body,
                }),
                invalidatesTags: ["User"],
            }),
        }),
    });

export const {
    useGetUserByTokenQuery,
    useLoginUserMutation,
} = authApi;
