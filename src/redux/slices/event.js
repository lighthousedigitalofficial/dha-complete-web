import { EVENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getEvents: builder.query({
			query: () => ({
				url: EVENTS_URL,
			}),
			providesTags: ["Events"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetEventsQuery } = eventsSlice; 