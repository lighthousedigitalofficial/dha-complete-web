import {ENGINEERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const EngineersSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getEngineers: builder.query({
			query: () => ({
				url: ENGINEERS_URL,
			}),
			providesTags: ["Engineers"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetEngineersQuery } = EngineersSlice; 