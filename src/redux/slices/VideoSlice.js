import {VIDEOS_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const videoSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getVideo: builder.query({
			query: () => ({
				url: VIDEOS_URL ,
			}),
			providesTags: ["Video"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetVideoQuery } = videoSlice; 