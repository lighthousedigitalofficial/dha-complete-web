import { PHASES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const phasesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPhases: builder.query({
			query: () => ({
				url: PHASES_URL,
			}),
			providesTags: ["Phases"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetPhasesQuery } = phasesSlice; 