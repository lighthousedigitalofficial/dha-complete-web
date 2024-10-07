import { MEDIA_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const advertisementSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getAdertisements: builder.query({
			query: () => ({
				url: MEDIA_URL,
			}),
			providesTags: ["Adertisements"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetAdertisementsQuery } = advertisementSlice; 