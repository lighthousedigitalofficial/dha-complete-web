// import { MEDIA_URL } from "../constants";
// import { apiSlice } from "./apiSlice";

// export const advertisementsSlice = apiSlice.injectEndpoints({
//     endpoints: (builder)=> ({
//         getAdvertisements: builder.query({
// 			query: () => ({
// 				url: MEDIA_URL,
// 			}),
// 			providesTags: ["Advertisements"],
// 			keepUnusedDataFor: 5,
// 		}),
//     })
// })

// export const { useGetAdvertisementsQuery } = advertisementsSlice; 

import { MEDIA_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const advertisementsSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getAdvertisements: builder.query({
			query: () => ({
				url: MEDIA_URL,
			}),
			providesTags: ["AdvergetAdvertisements"],
			keepUnusedDataFor: 5,
		}),
    })
})

export const { useGetAdvergetAdvertisementsQuery } = advertisementsSlice; 