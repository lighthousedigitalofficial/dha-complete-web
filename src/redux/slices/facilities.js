import { FACILITIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const facilitiesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getFacilities: builder.query({
			query: () => ({
				url:FACILITIES_URL,
			}),
			providesTags: ["Facilities"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetFacilitiesQuery } = facilitiesSlice; 