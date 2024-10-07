import { PURCHASE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const purchasePropertiesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getpurchaseProperties: builder.query({
			query: () => ({
				url:PURCHASE_PROPERTIES_URL,
			}),
			providesTags: ["PurchaseProperties"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetpurchasePropertiesQuery } = purchasePropertiesSlice; 