import { SALE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const salePropertyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all sale properties
        getSaleProperties: builder.query({
            query: () => ({
                url: SALE_PROPERTIES_URL,
            }),
            providesTags: ["SaleProperties"],
            keepUnusedDataFor: 5, // Cache data for 5 seconds
        }),

        // Create a new sale property
        createSaleProperty: builder.mutation({
            query: (data) => ({
                url: SALE_PROPERTIES_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["SaleProperties"], // Refetch sale properties after creation
        }),

        // Update a sale property by ID
        updateSaleProperty: builder.mutation({
            query: (data) => ({
                url: `${SALE_PROPERTIES_URL}/${data.id}`, // Assumes data contains 'id'
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["SaleProperties"], // Refetch sale properties after update
        }),

        // Delete a sale property by ID
        deleteSaleProperty: builder.mutation({
            query: (id) => ({
                url: `${SALE_PROPERTIES_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SaleProperties"], // Refetch sale properties after deletion
        }),

        // Get sale property details by ID
        getSalePropertyById: builder.query({
            query: (id) => ({
                url: `${SALE_PROPERTIES_URL}/${id}`,
            }),
            keepUnusedDataFor: 5, // Cache property details for 5 seconds
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetSalePropertiesQuery,
    useCreateSalePropertyMutation,
    useUpdateSalePropertyMutation,
    useDeleteSalePropertyMutation,
    useGetSalePropertyByIdQuery,
} = salePropertyApiSlice;
