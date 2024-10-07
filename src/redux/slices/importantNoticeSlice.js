// import { NOTICES_URL} from "../constants";
// import { apiSlice } from "./apiSlice";

// export const importantNoticeSlice = apiSlice.injectEndpoints({
//     endpoints: (builder)=> ({
//         getNotice: builder.query({
// 			query: () => ({
// 				url: NOTICES_URL,
// 			}),
// 			providesTags: ["Notice"],
// 			keepUnusedDataFor: 5,
// 		}),
//     })
// })

// export const { useGetNoticeQuery } = importantNoticeSlice; 

import { NOTICES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const importantNoticeSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Get all notices
        getNotice: builder.query({
            query: () => ({
                url: NOTICES_URL,
            }),
            providesTags: ["Notice"],
            keepUnusedDataFor: 5,
        }),

        // Create a new notice
        createNotice: builder.mutation({
            query: (data) => ({
                url: NOTICES_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Notice"], // Invalidate the notice cache after creation
        }),

        // Update an existing notice
        updateNotice: builder.mutation({
            query: (data) => ({
                url: `${NOTICES_URL}/${data.id}`, // Assumes data contains an 'id' field
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Notice"], // Invalidate the notice cache after update
        }),

        // Delete a notice by ID
        deleteNotice: builder.mutation({
            query: (noticeId) => ({
                url: `${NOTICES_URL}/${noticeId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Notice"], // Invalidate the notice cache after deletion
        }),

        // Get a specific notice by ID
        getNoticeById: builder.query({
            query: (id) => ({
                url: `${NOTICES_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useGetNoticeQuery,
    useCreateNoticeMutation,
    useUpdateNoticeMutation,
    useDeleteNoticeMutation,
    useGetNoticeByIdQuery,
} = importantNoticeSlice;
