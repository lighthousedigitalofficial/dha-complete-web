import { AFFILIATES_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const affiliatesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getAffiliates: builder.query({
			query: () => ({
				url: AFFILIATES_URL,
			}),
			providesTags: ["Affiliates"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetAffiliatesQuery } = affiliatesSlice; 