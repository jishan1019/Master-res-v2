import { baseApi } from "@/redux/api/baseApi/baseApi";

const authApi = baseApi
    .injectEndpoints({
        endpoints: (builder) => ({
            getUserByToken: builder.query({
                query: () => ({
                    url: "/users/getMe",
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
            registerUser: builder.mutation({
                query: (body: any) => ({
                    url: "/users/register",
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
    useRegisterUserMutation,
} = authApi;
