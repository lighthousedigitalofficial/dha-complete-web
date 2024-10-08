import { EVENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => ({
                url: EVENTS_URL,
            }),
            providesTags: ["Events"],
            keepUnusedDataFor: 5,
        }),
        getEvent: builder.query({
            query: (id) => ({
                url: `${EVENTS_URL}/${id}`,
            }),
            providesTags: (result, error, id) => [{ type: "Events", id }],
            keepUnusedDataFor: 5,
        }),
        
        createEvent: builder.mutation({
            query: (eventData) => ({
                url: EVENTS_URL,
                method: "POST",
                body: eventData,
            }),
            invalidatesTags: ["Events"],
        }),
        
        updateEvent: builder.mutation({
            query: (eventData) => ({
                url: `${EVENTS_URL}/${eventData.id}`,
                method: "PUT",
                body: eventData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Events", id }],
        }),
        
        deleteEvent: builder.mutation({
            query: (eventId) => ({
                url: `${EVENTS_URL}/${eventId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Events"],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useGetEventQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
} = eventsSlice;
