import { REGISTRATION_PROPERTIES } from "../constants";
import { apiSlice } from "./apiSlice";

export const registrationPropertySlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getregistrationPropertySlice: builder.query({
			query: () => ({
				url:REGISTRATION_PROPERTIES,
			}),
			providesTags: ["registrationPropertySlice"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetregistrationPropertySliceQuery } = registrationPropertySlice; 