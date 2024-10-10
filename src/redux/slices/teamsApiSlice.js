import { TEAMS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const teamsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all teams
        getTeams: builder.query({
            query: () => ({
                url: TEAMS_URL,
            }),
            providesTags: ["Teams"],
            keepUnusedDataFor: 5, // Cache data for 5 seconds
        }),

        // Create a new team
        createTeam: builder.mutation({
            query: (data) => ({
                url: TEAMS_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Teams"], // Refetch teams after creating a new one
        }),

        // Update a team by ID
        updateTeam: builder.mutation({
            query: (data) => ({
                url: `${TEAMS_URL}/${data.id}`, // Assumes data contains 'id'
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Teams"], // Refetch teams after update
        }),

        // Delete a team by ID
        deleteTeam: builder.mutation({
            query: (teamId) => ({
                url: `${TEAMS_URL}/${teamId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Teams"], // Refetch teams after deletion
        }),

        // Get team details by ID
        getTeamById: builder.query({
            query: (id) => ({
                url: `${TEAMS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5, // Cache team details for 5 seconds
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetTeamsQuery,
    useCreateTeamMutation,
    useUpdateTeamMutation,
    useDeleteTeamMutation,
    useGetTeamByIdQuery,
} = teamsApiSlice;
