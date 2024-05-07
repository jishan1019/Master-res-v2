import { baseApi } from "@/redux/api/baseApi/baseApi";

const postCodeApi = baseApi
          .injectEndpoints({
                    endpoints: (builder) => ({
                              getAllPostCodes: builder.query({
                                        query: () => "/postcodes/get-all",
                                        providesTags: ["PostCode"],
                              }),
                    }),
          });

export const {
          useGetAllPostCodesQuery,
} = postCodeApi;
