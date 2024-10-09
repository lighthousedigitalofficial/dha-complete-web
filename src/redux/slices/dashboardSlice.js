import { apiSlice } from "./apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDashboardStats: builder.query({
			query: () => ({
				url: `/totals`,
			}),
			providesTags: ["Dashboard"],
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetDashboardStatsQuery } = dashboardApiSlice;
