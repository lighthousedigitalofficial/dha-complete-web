import { apiSlice } from "./apiSlice";
import { PHASES_URL } from "../constants";

export const phasesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPhase: builder.mutation({
      query: (phasesData) => ({
        url: PHASES_URL,
        method: "POST",  
        body: phasesData,
      }),
      invalidatesTags: ["Phase"],
    }),

    getPhases: builder.query({
      query: () => ({
        url: PHASES_URL,
      }),
      providesTags: ["Phase"],
      keepUnusedDataFor: 5,
    }),

    getPhase: builder.query({
      query: (id) => ({
        url: `${PHASES_URL}/${id}`,
      }),
      providesTags: ["Phase"],
      keepUnusedDataFor: 5, 
    }),

    getPhaseBySlug: builder.query({
      query: (slug) => ({
        url: `${PHASES_URL}/slug/${slug}`, 
      }),
      providesTags: ["Phase"],
      keepUnusedDataFor: 5,
    }),

    updatePhase: builder.mutation({
      query: (data) => ({
        url: `${PHASES_URL}/${data.id}`,
        method: "PUT",  
        body: data,
      }),
      invalidatesTags: ["Phase"],
    }),

    deletePhase: builder.mutation({
      query: (phaseId) => ({
        url: `${PHASES_URL}/${phaseId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["Phase"],
    }),
  }),
});

export const {
  useCreatePhaseMutation,
  useGetPhasesQuery,
  useGetPhaseQuery,
  useGetPhaseBySlugQuery, 
  useUpdatePhaseMutation,
  useDeletePhaseMutation,
} = phasesApiSlice;
