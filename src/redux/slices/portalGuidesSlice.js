import { PORTAL_GUIDES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const portalGuidesSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPortalGuides: builder.query({
			query: () => ({
				url: PORTAL_GUIDES_URL,
			}),
			providesTags: ["PortalGuides"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetPortalGuidesQuery } = portalGuidesSlice; 