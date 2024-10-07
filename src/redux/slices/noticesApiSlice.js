import { apiSlice } from "./apiSlice";
import { NOTICES_URL } from "../constants";

export const noticesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNotice: builder.mutation({
      query: (noticeData) => ({
        url: NOTICES_URL,
        method: "POST",
        body: noticeData,
      }),
    }),

    getNotices: builder.query({
      query: () => ({
        url: NOTICES_URL,
      }),
      providesTags: ["Notice"],
      keepUnusedDataFor: 5,
    }),

    getNotice: builder.query({
      query: (id) => ({
        url: `${NOTICES_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    updateNotice: builder.mutation({
      query: (data) => ({
        url: `${NOTICES_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Notice"],
    }),

    // Delete a notice by ID
    deleteNotice: builder.mutation({
      query: (noticeId) => ({
        url: `${NOTICES_URL}/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notice"],
    }),
  }),
});

export const {
  useCreateNoticeMutation,
  useGetNoticesQuery,
  useGetNoticeQuery,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApiSlice;
