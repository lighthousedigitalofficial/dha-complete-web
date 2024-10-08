import { ENGINEERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const engineersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEngineers: builder.query({
      query: () => ({
        url: ENGINEERS_URL,
      }),
      providesTags: ["Engineers"],
      keepUnusedDataFor: 5,
    }),
    getEngineer: builder.query({
      query: (id) => ({
        url: `${ENGINEERS_URL}/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Engineers", id }],
    }),
    createEngineers: builder.mutation({
      query: (data) => ({
        url: ENGINEERS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Engineers"],
    }),
    updateEngineers: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${ENGINEERS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Engineers", id }],
    }),
    deleteEngineers: builder.mutation({
      query: (id) => ({
        url: `${ENGINEERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Engineers", id }],
    }),
  }),
});

export const {
  useGetEngineersQuery,
  useGetEngineerQuery,
  useCreateEngineersMutation,
  useUpdateEngineersMutation,
  useDeleteEngineersMutation,
} = engineersSlice;
