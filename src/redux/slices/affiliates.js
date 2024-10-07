import { AFFILIATES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const affiliatesSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAffiliates: builder.query({
            query: () => ({
                url: AFFILIATES_URL,
            }),
            providesTags: ["Affiliates"],
            keepUnusedDataFor: 5,
        }),
        createAffiliate: builder.mutation({
            query: (newAffiliate) => ({
                url: AFFILIATES_URL,
                method: 'POST',
                body: newAffiliate,
            }),
            invalidatesTags: ["Affiliates"], // Invalidate the affiliates cache to refetch
        }),
        updateAffiliate: builder.mutation({
            query: ({ id, ...updatedAffiliate }) => ({
                url: `${AFFILIATES_URL}/${id}`,
                method: 'PUT',
                body: updatedAffiliate,
            }),
            invalidatesTags: ["Affiliates"],
        }),
        deleteAffiliate: builder.mutation({
            query: (id) => ({
                url: `${AFFILIATES_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Affiliates"],
        }),
    }),
});

export const {
    useGetAffiliatesQuery,
    useCreateAffiliateMutation,
    useUpdateAffiliateMutation,
    useDeleteAffiliateMutation,
} = affiliatesSlice;
