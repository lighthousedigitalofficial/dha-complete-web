import { NOTICES_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const importantNoticeSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getNotice: builder.query({
			query: () => ({
				url: NOTICES_URL,
			}),
			providesTags: ["Notice"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetNoticeQuery } = importantNoticeSlice; 