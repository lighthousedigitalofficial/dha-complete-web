import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/login`,
				method: "POST",
				body: data,
			}),
		}),
		createUser: builder.mutation({
			query: (userData) => ({
				url: USERS_URL,
				method: "POST",
				body: userData,
			}),
		}),
		userRegister: builder.mutation({
			query: (userData) => ({
				url: `${USERS_URL}/register`,
				method: "POST",
				body: userData,
			}),
		}),

		logout: builder.mutation({
			query: (token) => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		getUsers: builder.query({
			query: () => ({
				url: USERS_URL,
			}),
			providesTags: ["User"],
			keepUnusedDataFor: 5,
		}),
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `${USERS_URL}/${userId}`,
				method: "DELETE",
			}),
		}),
		getUserDetails: builder.query({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useUserRegisterMutation,
	useCreateUserMutation,
	useProfileMutation,
	useGetUsersQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
	useGetUserDetailsQuery,
} = usersApiSlice;
