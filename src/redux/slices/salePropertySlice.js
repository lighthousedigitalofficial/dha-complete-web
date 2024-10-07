import { SALE_PROPERTIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const salePropertySlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getSalePropertySlice: builder.query({
			query: () => ({
				url:SALE_PROPERTIES_URL,
			}),
			providesTags: ["SalePropertySlice"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetSalePropertySliceQuery } = salePropertySlice; 