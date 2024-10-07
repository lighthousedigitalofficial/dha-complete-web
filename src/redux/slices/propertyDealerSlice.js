import { PROPERTY_DEALER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const propertyDealerSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPropertyDealer: builder.query({
			query: () => ({
				url: PROPERTY_DEALER_URL,
			}),
			providesTags: ["PropertyDealer"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetPropertyDealerQuery } = propertyDealerSlice; 