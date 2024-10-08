import { PHASES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const phaseSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhases: builder.query({
      query: () => ({
        url: PHASES_URL,
      }),
    }),
    getPhase: builder.query({
      query: (id) => ({
        url: `${PHASES_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createPhases: builder.mutation({
      query: (data) => ({
        url: PHASES_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Phases"],
    }),
    updatePhases: builder.mutation({
      query: (data) => ({
        url: `${PHASES_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Phases"],
    }),
    deletePhases: builder.mutation({
      query: (websiteId) => ({
        url: `${PHASES_URL}/${websiteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Phases"],
    }),
  }),
});

export const {
  useGetPhasesQuery,
  useGetPhaseQuery,
  useCreatePhasesMutation,
  useUpdatePhasesMutation,
  useDeletePhasesMutation,
} = phaseSlice;
