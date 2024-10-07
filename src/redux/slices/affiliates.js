import { AFFILIATES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const affiliatesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch affiliates
    getAffiliates: builder.query({
      query: () => ({
        url: AFFILIATES_URL,
      }),
      providesTags: ["Affiliates"],
      keepUnusedDataFor: 5,
    }),
    
    // Create a new affiliate
    createAffiliate: builder.mutation({
      query: (newAffiliate) => ({
        url: AFFILIATES_URL,
        method: "POST",
        body: newAffiliate,
      }),
      invalidatesTags: ["Affiliates"], // Invalidate the affiliates cache to refetch
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAffiliatesQuery,
  useCreateAffiliateMutation,
} = affiliatesSlice;
