import {MEDIA_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const mediaSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getMedia: builder.query({
			query: () => ({
				url: MEDIA_URL,
			}),
			providesTags: ["Media"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetMediaQuery } = mediaSlice; 