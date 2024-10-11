import { ACTIVITY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const activitySlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Get all activities
		getActivities: builder.query({
			query: () => ({
				url: ACTIVITY_URL,
			}),
			providesTags: ["Activity"],
			keepUnusedDataFor: 5,
		}),

		// Create a new activity
		createActivity: builder.mutation({
			query: (data) => ({
				url: ACTIVITY_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Activity"], // Invalidate cache to reflect changes
		}),

		// Update an existing activity
		updateActivity: builder.mutation({
			query: (data) => ({
				url: `${ACTIVITY_URL}/${data.id}`, // Assumes data contains an 'id'
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Activity"], // Invalidate cache to reflect updates
		}),

		// Delete an activity by ID
		deleteActivity: builder.mutation({
			query: (activityId) => ({
				url: `${ACTIVITY_URL}/${activityId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Activity"], // Invalidate cache after deletion
		}),

		// Get a specific activity by ID
		getActivityById: builder.query({
			query: (id) => ({
				url: `${ACTIVITY_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetActivitiesQuery,
	useCreateActivityMutation,
	useUpdateActivityMutation,
	useDeleteActivityMutation,
	useGetActivityByIdQuery,
} = activitySlice;
