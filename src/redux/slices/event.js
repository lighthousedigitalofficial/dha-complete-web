import { EVENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all events
        getEvents: builder.query({
            query: () => ({
                url: EVENTS_URL,
            }),
            providesTags: ["Events"],
            keepUnusedDataFor: 5,
        }),

        // Create a new event
        createEvent: builder.mutation({
            query: (data) => ({
                url: EVENTS_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Events"], // Invalidate to refetch events after creating
        }),

        // Update an event by ID
        updateEvent: builder.mutation({
            query: (data) => ({
                url: `${EVENTS_URL}/${data.id}`, // Assumes data contains 'id'
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Events"], // Invalidate to refetch after update
        }),

        // Delete an event by ID
        deleteEvent: builder.mutation({
            query: (eventId) => ({
                url: `${EVENTS_URL}/${eventId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Events"], // Invalidate to refetch after deletion
        }),

        // Get event details by ID
        getEventById: builder.query({
            query: (id) => ({
                url: `${EVENTS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const {
    useGetEventsQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
    useGetEventByIdQuery,
} = eventsSlice;
