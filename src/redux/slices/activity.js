import {ACTIVITY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const activitySlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getActivity: builder.query({
			query: () => ({
				url: ACTIVITY_URL,
			}),
			providesTags: ["Activity"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetActivityQuery } = activitySlice; 