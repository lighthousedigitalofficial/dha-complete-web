import { BANNERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const bannerSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getBanners: builder.query({
			query: () => ({
				url: BANNERS_URL,
			}),
			providesTags: ["Banners"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetBannersQuery } = bannerSlice; 