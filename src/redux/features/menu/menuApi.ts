import { baseApi } from "@/redux/api/baseApi/baseApi";

const menuApi = baseApi
          .injectEndpoints({
                    endpoints: (builder) => ({
                              getAllMenu: builder.query({
                                        query: () => "/menus/all",
                                        providesTags: ["Menu"],
                              }),

                              getSingleMenuByCategoryId: builder.query({
                                        query: (query) => `/menus/all?${query}`,
                                        providesTags: ["Menu"],
                              }),

                              getMenusByCategory: builder.query({
                                        query: (category) => `/menus/all?category=${category}&skipLimit=YES`,
                                        providesTags: ["Menu"],
                              }),

                              getSingleMenuItemByID: builder.query({
                                        query: (id) => `/menus/menu/${id}`,
                                        providesTags: ["Menu"],
                              }),

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
          useGetAllMenuQuery,
          useGetSingleMenuByCategoryIdQuery,
          useGetMenusByCategoryQuery,
          useGetSingleMenuItemByIDQuery,
          useGetAllCategoriesQuery,
          useGetSingleCategoryQuery,
} = menuApi;
