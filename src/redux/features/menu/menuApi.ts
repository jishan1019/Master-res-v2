import { baseApi } from "@/redux/api/baseApi/baseApi";

const menuApi = baseApi
          .injectEndpoints({
                    endpoints: (builder) => ({
                              getAllCategories: builder.query({
                                        query: () => ({
                                                  url: "/categories/all-categories",
                                        }),
                                        providesTags: ["Menu"],
                              }),

                              getSingleCategory: builder.query({
                                        query: (id: string) => ({
                                                  url: `/categories/category/${id}`,
                                        }),
                                        providesTags: ["Menu"],
                              }),
                    }),
          });

export const {
          useGetAllCategoriesQuery,
          useGetSingleCategoryQuery,
} = menuApi;
