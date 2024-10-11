import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useGetUserDetailsQuery, useUpdateUserMutation } from "../../../redux/slices/usersApiSlice";
import Loader from "../../../components/shared/Loader";
import toast from "react-hot-toast";

const UserDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { data: response, isLoading, isError } = useGetUserDetailsQuery(id);
  const [updateUser, { isLoading: isUpdating, isError: isUpdateError }] = useUpdateUserMutation();
  const [user, setUser] = useState(null); 

  useEffect(() => {
    console.log("Loading user details:", isLoading);
    console.log("Error loading user details:", isError);
  }, [isLoading, isError]);

  useEffect(() => {
    if (response) {
      console.log("Fetched user response:", response);
      setUser(response.doc); 
    }
  }, [response]);

  // Handle the update user
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await updateUser({ id, ...user }).unwrap(); 
      toast.success("User updated successfully!"); 
      setTimeout(() => {
        navigate('/users/list'); 
      }, 2000);
    } catch (error) {
      toast.error("Failed to update user details."); t
    }
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to load user details. Please try again.</p>;

  return (
    <div className="w-[90%] mx-auto bg-white p-8 mt-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Details</h2>

      <form onSubmit={handleUpdate}> 
        <div className="flex w-full gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.firstName || ""}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.lastName || ""}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex w-full gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Identity Type</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.identityType || ""}
              onChange={(e) => setUser({ ...user, identityType: e.target.value })}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Identity Number</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.identityNum || ""}
              onChange={(e) => setUser({ ...user, identityNum: e.target.value })}
            />
          </div>
        </div>

        <div className="flex w-full gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Membership Number</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.membershipNum || ""}
              onChange={(e) => setUser({ ...user, membershipNum: e.target.value })}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              value={user?.phone || ""}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={user?.role || ""}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-greenx-700"
            disabled={isUpdating} 
          >
            {isUpdating ? "Updating..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
