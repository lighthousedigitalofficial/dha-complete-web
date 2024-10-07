import { apiSlice } from "./apiSlice"; 
import { MEDIA_URL } from "../constants";

export const mediaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new media entry
    createMedia: builder.mutation({
      query: (data) => ({
        url: `${MEDIA_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    getMedia: builder.query({
			query: () => ({
				url: MEDIA_URL,
			}),
			providesTags: ["Media"],
			keepUnusedDataFor: 5,
		}),


    getMediaById: builder.query({
      query: (id) => `${MEDIA_URL}/${id}`,
    }),

    // Update a media entry by ID
    updateMedia: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${MEDIA_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a media entry by ID
    deleteMedia: builder.mutation({
      query: (id) => ({
        url: `${MEDIA_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the queries and mutations
export const {
  useCreateMediaMutation,
  useGetMediaQuery,
  useGetMediaByIdQuery,
  useUpdateMediaMutation,
  useDeleteMediaMutation,
} = mediaApiSlice;
