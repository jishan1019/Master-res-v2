import { baseApi } from "@/redux/api/baseApi/baseApi";

const discountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveDiscount: builder.query({
      query: () => "/discount/active",
      providesTags: ["Discount"],
    }),
  }),
});

export const { useGetActiveDiscountQuery } = discountApi;
