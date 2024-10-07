import { ASSOCIATE_WEBSITES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const associateWebsitesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssociateWebsites: builder.query({
            query: (query) => ({
                url: ASSOCIATE_WEBSITES_URL,
                params: query,
            }),
        }),
        getAssociateWebsite: builder.query({
            query: (id) => ({
                url: `${ASSOCIATE_WEBSITES_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createAssociateWebsite: builder.mutation({
            query: (data) => ({
                url: ASSOCIATE_WEBSITES_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["AssociateWebsites"],
        }),
        updateAssociateWebsite: builder.mutation({
            query: (data) => ({
                url: `${ASSOCIATE_WEBSITES_URL}/${data._id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["AssociateWebsites"],
        }),
        deleteAssociateWebsite: builder.mutation({
            query: (websiteId) => ({
                url: `${ASSOCIATE_WEBSITES_URL}/${websiteId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["AssociateWebsites"],
        }),
    }),
});

export const {
    useGetAssociateWebsitesQuery,
    useGetAssociateWebsiteQuery,
    useCreateAssociateWebsiteMutation,
    useUpdateAssociateWebsiteMutation,
    useDeleteAssociateWebsiteMutation,
} = associateWebsitesApiSlice;
