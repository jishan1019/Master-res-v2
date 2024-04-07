import { baseApi } from "@/redux/api/baseApi/baseApi";

const authApi = baseApi.enhanceEndpoints({ addTagTypes: ["User"] })
    .injectEndpoints({
        endpoints: (builder: typeof baseApi) => ({
            getUserByToken: builder.query({
                queryFn: () => "/users/getMe",
                providesTags: ["User"],
            }),

            loginUser: builder.mutation({
                queryFn: (body: any) => ({
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
