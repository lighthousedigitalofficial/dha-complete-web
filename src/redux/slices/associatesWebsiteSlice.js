import { ASSOCIATE_WEBSITES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const associatesWebsite = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getassociates: builder.query({
			query: () => ({
				url: ASSOCIATE_WEBSITES_URL,
			}),
			providesTags: ["associates"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetassociatesQuery } = associatesWebsite; 