import { TEAMS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const teamSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTeams: builder.mutation({
      query: (teamData) => ({
        url: TEAMS_URL,
        method: "POST",
        body: teamData,
      }),
      invalidatesTags: ["Teams"],
    }),

    getTeams: builder.query({
      query: () => ({
        url: TEAMS_URL,
      }),
    }),

    getTeam: builder.query({
      query: (id) => ({
        url: `${TEAMS_URL}/${id}`,
      }),
    }),

    updateTeam: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${TEAMS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),

    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `${TEAMS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateTeamsMutation,
  useGetTeamsQuery,
  useGetTeamQuery,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamSlice;
