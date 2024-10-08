import { ENGINEERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const EngineersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all engineers
        getEngineers: builder.query({
            query: () => ({
                url: ENGINEERS_URL,
            }),
            providesTags: ["Engineers"],
            keepUnusedDataFor: 5, // Cache data for 5 seconds
        }),

        // Create a new engineer
        createEngineer: builder.mutation({
            query: (data) => ({
                url: ENGINEERS_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Engineers"], // Refetch engineers after creating a new one
        }),

        // Update an engineer by ID
        updateEngineer: builder.mutation({
            query: (data) => ({
                url: `${ENGINEERS_URL}/${data.id}`, // Assumes data contains 'id'
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Engineers"], // Refetch engineers after update
        }),

        // Delete an engineer by ID
        deleteEngineer: builder.mutation({
            query: (id) => ({
                url: `${ENGINEERS_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Engineers"], // Refetch engineers after deletion
        }),

        // Get engineer details by ID
        getEngineerById: builder.query({
            query: (id) => ({
                url: `${ENGINEERS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5, // Cache details for 5 seconds
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetEngineersQuery,
    useCreateEngineerMutation,
    useUpdateEngineerMutation,
    useDeleteEngineerMutation,
    useGetEngineerByIdQuery,
} = EngineersSlice;
