import { apiSlice } from "./apiSlice";
import { VIDEOS_URL } from "../constants";

export const videosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new video
    createVideo: builder.mutation({
      query: (video) => ({
        url: VIDEOS_URL,
        method: "POST",
        body: video,
      }),
    }),

    // Get all videos with optional query parameters
    getVideos: builder.query({
      query: (query) => ({
        url: VIDEOS_URL,
        params: query,
      }),
    }),

    // Get a single video by ID
    getVideo: builder.query({
      query: (id) => ({
        url: `${VIDEOS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    // Update a video by ID
    updateVideo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${VIDEOS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),

    // Delete a video by ID
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `${VIDEOS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for using the queries and mutations
export const {
  useCreateVideoMutation,
  useGetVideosQuery,
  useGetVideoQuery,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = videosApiSlice;
