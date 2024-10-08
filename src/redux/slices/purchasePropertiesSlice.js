import { PURCHASE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const purchasePropertiesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Fetch all purchase properties
		getPurchaseProperties: builder.query({
			query: () => ({
				url: PURCHASE_PROPERTIES_URL,
			}),
			providesTags: ["PurchaseProperties"],
			keepUnusedDataFor: 5, // Cache data for 5 seconds
		}),

		// Create a new purchase property
		createPurchaseProperty: builder.mutation({
			query: (data) => ({
				url: PURCHASE_PROPERTIES_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["PurchaseProperties"], // Refetch after creating a new purchase property
		}),

		// Update a purchase property by ID
		updatePurchaseProperty: builder.mutation({
			query: (data) => ({
				url: `${PURCHASE_PROPERTIES_URL}/${data.id}`, // Assumes data contains 'id'
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["PurchaseProperties"], // Refetch after updating a purchase property
		}),

		// Delete a purchase property by ID
		deletePurchaseProperty: builder.mutation({
			query: (id) => ({
				url: `${PURCHASE_PROPERTIES_URL}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["PurchaseProperties"], // Refetch after deleting a purchase property
		}),

		// Get purchase property details by ID
		getPurchasePropertyById: builder.query({
			query: (id) => ({
				url: `${PURCHASE_PROPERTIES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5, // Cache details for 5 seconds
		}),
	}),
});

// Export hooks for usage in components
export const {
	useGetPurchasePropertiesQuery,
	useCreatePurchasePropertyMutation,
	useUpdatePurchasePropertyMutation,
	useDeletePurchasePropertyMutation,
	useGetPurchasePropertyByIdQuery,
} = purchasePropertiesSlice;
