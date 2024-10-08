import { BANNERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const bannerSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Get all banners
        getBanners: builder.query({
            query: () => ({
                url: BANNERS_URL,
            }),
            providesTags: ["Banners"],
            keepUnusedDataFor: 5,
        }),

        // Create a new banner
        createBanner: builder.mutation({
            query: (data) => ({
                url: BANNERS_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Banners"], // Invalidate cache to reflect new data
        }),

        // Update an existing banner
        updateBanner: builder.mutation({
            query: (data) => ({
                url: `${BANNERS_URL}/${data.id}`, // Assumes data contains an 'id' field
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Banners"], // Invalidate cache to reflect updated data
        }),

        // Delete a banner by ID
        deleteBanner: builder.mutation({
            query: (bannerId) => ({
                url: `${BANNERS_URL}/${bannerId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Banners"], // Invalidate cache after deletion
        }),

        // Get a specific banner by ID
        getBannerById: builder.query({
            query: (id) => ({
                url: `${BANNERS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const {
    useGetBannersQuery,
    useCreateBannerMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
    useGetBannerByIdQuery,
} = bannerSlice;
