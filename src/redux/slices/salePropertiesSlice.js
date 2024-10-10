import { SALE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const salePropertiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSaleProperties: builder.mutation({
      query: (data) => ({
        url: SALE_PROPERTIES_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SaleProperties"],
    }),
    getSaleProperties: builder.query({
      query: () => ({
        url: SALE_PROPERTIES_URL,
      }),
      providesTags: ["SaleProperties"],
      keepUnusedDataFor: 5,
    }),

    getSaleProperty: builder.query({
      query: (id) => ({
        url: `${SALE_PROPERTIES_URL}/${id}`,
      }),
    }),

    updateSaleProperties: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${SALE_PROPERTIES_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),

    deleteSaleProperties: builder.mutation({
      query: (id) => ({
        url: `${SALE_PROPERTIES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateSalePropertiesMutation,
  useGetSalePropertiesQuery,
  useGetSalePropertyQuery,
  useUpdateSalePropertiesMutation,
  useDeleteSalePropertiesMutation,
} = salePropertiesApiSlice;
