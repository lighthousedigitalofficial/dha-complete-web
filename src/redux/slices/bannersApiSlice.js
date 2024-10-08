import { apiSlice } from "./apiSlice";
import { BANNERS_URL } from "../constants";

export const bannersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBanners: builder.mutation({
			query: (brand) => ({
				url: BANNERS_URL,
				method: "POST",
				body: brand,
			}),
		}),
		getBanners: builder.query({
			query: () => ({
				url: BANNERS_URL,
			}),
		}),

		updateBanner: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${BANNERS_URL}/${id}`,
				method: "PUT",
				body: data,
			}),
			keepUnusedDataFor: 5,
		}),
		deleteBanner: builder.mutation({
			query: (id) => ({
				url: `${BANNERS_URL}/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useCreateBannersMutation,
	useGetBannersQuery,
	useGetBannerQuery,
	useUpdateBannerMutation,
	useDeleteBannerMutation,
} = bannersApiSlice;
