import { PURCHASE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const purchasePropertiesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
		createPurchaseProperties: builder.mutation({
			query: (teamData) => ({
			  url: PURCHASE_PROPERTIES_URL,
			  method: "POST",
			  body: teamData,
			}),
			invalidatesTags: ["PurchaseProperties"],
		  }),
        getPurchaseProperties: builder.query({
			query: () => ({
				url:PURCHASE_PROPERTIES_URL,
			}),
			providesTags: ["PurchaseProperties"],
			keepUnusedDataFor: 5,
		}),

		getPurchaseProperty: builder.query({
			query: (id) => ({
			  url: `${PURCHASE_PROPERTIES_URL}/${id}`,
			}),
		  }),
	  
		  updatePurchaseProperties: builder.mutation({
			query: ({ id, ...data }) => ({
			  url: `${PURCHASE_PROPERTIES_URL}/${id}`,
			  method: "PUT",
			  body: data,
			}),
			keepUnusedDataFor: 5,
		  }),
	  
		  deletePurchaseProperties: builder.mutation({
			query: (id) => ({
			  url: `${PURCHASE_PROPERTIES_URL}/${id}`,
			  method: "DELETE",
			}),
		  }),
    })
})


export const {
	useCreatePurchasePropertiesMutation,
	useGetPurchasePropertiesQuery,
	useGetPurchasePropertyQuery,
	useUpdatePurchasePropertiesMutation,
	useDeletePurchasePropertiesMutation,
  } = purchasePropertiesSlice;
  