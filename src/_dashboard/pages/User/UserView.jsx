import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../../redux/slices/usersApiSlice";
import Loader from "../../../components/shared/Loader";

const UserView = () => {
  const { id } = useParams(); // Get user ID from URL params
  const { data: response, isLoading, isError } = useGetUserDetailsQuery(id);

  // Log the loading and error states
  useEffect(() => {
    console.log("Loading user details:", isLoading);
    console.log("Error loading user details:", isError);
  }, [isLoading, isError]);

  // Log the response when it's fetched
  useEffect(() => {
    if (response) {
      console.log("Fetched user response:", response);
    }
  }, [response]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load user details. Please try again.</p>;

  const user = response?.doc; // Access the user details from the doc property

  return (
    <div className="w-[90%] mx-auto bg-white p-8 mt-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Details</h2>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.firstName} {/* Display fetched firstName */}
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.lastName} {/* Display fetched lastName */}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
          {user?.email} {/* Display fetched email */}
        </div>
      </div>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Identity Type
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.identityType} {/* Display fetched identityType */}
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Identity Number
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.identityNum} {/* Display fetched identityNum */}
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Membership Number
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.membershipNum} {/* Display fetched membershipNum */}
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
            {user?.phone} {/* Display fetched phone number */}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Role
        </label>
        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
          {user?.role} {/* Display fetched user role */}
        </div>
      </div>
    </div>
  );
};

export default UserView;
