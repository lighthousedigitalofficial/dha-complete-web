import { apiSlice } from "./apiSlice";
import { REGISTRATION_PROPERTIES_URL } from "../constants";

export const registrationPropertiesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createRegistrationProperty: builder.mutation({
			query: (propertyData) => ({
				url: REGISTRATION_PROPERTIES_URL,
				method: "POST",
				body: propertyData,
			}),
		}),

		getRegistrationProperties: builder.query({
			query: () => ({
				url: REGISTRATION_PROPERTIES_URL,
			}),
			providesTags: ["RegistrationProperty"],
			keepUnusedDataFor: 5,
		}),

		getRegistrationPropertyById: builder.query({
			query: (id) => ({
				url: `${REGISTRATION_PROPERTIES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),

		updateRegistrationProperty: builder.mutation({
			query: (data) => ({
				url: `${REGISTRATION_PROPERTIES_URL}/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["RegistrationProperty"],
		}),

		deleteRegistrationProperty: builder.mutation({
			query: (propertyId) => ({
				url: `${REGISTRATION_PROPERTIES_URL}/${propertyId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["RegistrationProperty"],
		}),
	}),
});

export const {
	useCreateRegistrationPropertyMutation,
	useGetRegistrationPropertiesQuery,
	useGetRegistrationPropertyByIdQuery,
	useUpdateRegistrationPropertyMutation,
	useDeleteRegistrationPropertyMutation,
} = registrationPropertiesApiSlice;
