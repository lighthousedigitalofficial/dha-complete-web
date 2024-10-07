import { PROPERTY_DEALER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const propertyDealerSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPropertyDealers: builder.query({
      query: () => ({
        url: PROPERTY_DEALER_URL,
      }),
      providesTags: ["PropertyDealer"],
      keepUnusedDataFor: 5,
    }),
    getPropertyDealer: builder.query({
      query: (id) => ({
        url: `${PROPERTY_DEALER_URL}/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "PropertyDealer", id }],
    }),
    createPropertyDealer: builder.mutation({
      query: (data) => ({
        url: PROPERTY_DEALER_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["PropertyDealer"],
    }),
    updatePropertyDealer: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${PROPERTY_DEALER_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "PropertyDealer", id },
      ],
    }),
    deletePropertyDealer: builder.mutation({
      query: (id) => ({
        url: `${PROPERTY_DEALER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "PropertyDealer", id }],
    }),
  }),
});

export const {
  useGetPropertyDealersQuery,
  useGetPropertyDealerQuery,
  useCreatePropertyDealerMutation,
  useUpdatePropertyDealerMutation,
  useDeletePropertyDealerMutation,
} = propertyDealerSlice;
