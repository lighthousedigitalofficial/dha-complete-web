import { TEAMS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const teamsSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getTeams: builder.query({
			query: () => ({
				url: TEAMS_URL,
			}),
			providesTags: ["Teams"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetTeamsQuery } = teamsSlice; 