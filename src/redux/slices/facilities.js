import { FACILITIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const facilitiesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => ({
        url: FACILITIES_URL,
      }),
      providesTags: ["Facilities"],
      keepUnusedDataFor: 5,
    }),

    createFacilities: builder.mutation({
      query: (facilities) => ({
        url: FACILITIES_URL,
        method: "POST",
        body: facilities,
      }),
    }),

    getFacility: builder.query({
      query: (id) => ({
        url: `${FACILITIES_URL}/${id}`,
      }),
    }),

    updateFacilities: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${FACILITIES_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),

    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `${FACILITIES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateFacilitiesMutation,
  useGetFacilitiesQuery,
  useGetFacilityQuery,
  useUpdateFacilitiesMutation,
  useDeleteFacilitiesMutation,
} = facilitiesSlice;
