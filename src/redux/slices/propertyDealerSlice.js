import { PROPERTY_DEALER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const propertyDealerSlice = apiSlice.injectEndpoints({
<<<<<<< HEAD
	endpoints: (builder) => ({
		// Fetch all property dealers
		getPropertyDealer: builder.query({
			query: () => ({
				url: PROPERTY_DEALER_URL,
			}),
			providesTags: ["PropertyDealer"],
			keepUnusedDataFor: 5, // Cache data for 5 seconds
		}),

		// Create a new property dealer
		createPropertyDealer: builder.mutation({
			query: (data) => ({
				url: PROPERTY_DEALER_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["PropertyDealer"], // Refetch data after creation
		}),

		// Update a property dealer by ID
		updatePropertyDealer: builder.mutation({
			query: (data) => ({
				url: `${PROPERTY_DEALER_URL}/${data.id}`, // Assumes data contains 'id'
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["PropertyDealer"], // Refetch data after update
		}),

		// Delete a property dealer by ID
		deletePropertyDealer: builder.mutation({
			query: (id) => ({
				url: `${PROPERTY_DEALER_URL}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["PropertyDealer"], // Refetch data after deletion
		}),

		// Get property dealer details by ID
		getPropertyDealerById: builder.query({
			query: (id) => ({
				url: `${PROPERTY_DEALER_URL}/${id}`,
			}),
			keepUnusedDataFor: 5, // Cache details for 5 seconds
		}),
	}),
=======
    endpoints: (builder) => ({
        // Fetch all property dealers
        getPropertyDealer: builder.query({
            query: () => ({
                url: PROPERTY_DEALER_URL,
            }),
            providesTags: ["PropertyDealer"],
            keepUnusedDataFor: 5, // Cache data for 5 seconds
        }),

        // Create a new property dealer
        createPropertyDealer: builder.mutation({
            query: (data) => ({
                url: PROPERTY_DEALER_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["PropertyDealer"], // Refetch data after creation
        }),

        // Update a property dealer by ID
        updatePropertyDealer: builder.mutation({
            query: (data) => ({
                url: `${PROPERTY_DEALER_URL}/${data.id}`, // Assumes data contains 'id'
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["PropertyDealer"], // Refetch data after update
        }),

        // Delete a property dealer by ID
        deletePropertyDealer: builder.mutation({
            query: (id) => ({
                url: `${PROPERTY_DEALER_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["PropertyDealer"], // Refetch data after deletion
        }),

        // Get property dealer details by ID
        getPropertyDealerById: builder.query({
            query: (id) => ({
                url: `${PROPERTY_DEALER_URL}/${id}`,
            }),
            keepUnusedDataFor: 5, // Cache details for 5 seconds
        }),
    }),
>>>>>>> dev
});

// Export hooks for use in components
export const {
<<<<<<< HEAD
	useGetPropertyDealerQuery,
	useCreatePropertyDealerMutation,
	useUpdatePropertyDealerMutation,
	useDeletePropertyDealerMutation,
	useGetPropertyDealerByIdQuery,
=======
    useGetPropertyDealerQuery,
    useCreatePropertyDealerMutation,
    useUpdatePropertyDealerMutation,
    useDeletePropertyDealerMutation,
    useGetPropertyDealerByIdQuery,
>>>>>>> dev
} = propertyDealerSlice;
