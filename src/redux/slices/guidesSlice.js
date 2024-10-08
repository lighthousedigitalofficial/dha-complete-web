import { PORTAL_GUIDES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const portalGuidesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createGuide: builder.mutation({
			query: (guide) => ({
				url: PORTAL_GUIDES_URL,
				method: "POST",
				body: guide,
			}),
		}),
		getGuides: builder.query({
			query: () => ({
				url: PORTAL_GUIDES_URL,
			}),
		}),
		getGuide: builder.query({
			query: (id) => ({
				url: `${PORTAL_GUIDES_URL}/${id}`,
			}),
		}),
		updateGuide: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${PORTAL_GUIDES_URL}/${id}`,
				method: "PUT",
				body: data,
			}),
			keepUnusedDataFor: 5,
		}),
		deleteGuide: builder.mutation({
			query: (id) => ({
				url: `${PORTAL_GUIDES_URL}/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useCreateGuideMutation,
	useGetGuidesQuery,
	useGetGuideQuery,
	useUpdateGuideMutation,
	useDeleteGuideMutation,
} = portalGuidesApiSlice;
