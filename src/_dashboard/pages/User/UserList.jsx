import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../../redux/slices/usersApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Optional for notifications

const UserList = () => {
  const { data: users, isLoading, refetch } = useGetUsersQuery({});

  console.log(users);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // State for delete action

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteClick = (id) => {
    setSelectedUserId(id); // Set user ID for deletion
    setIsModalOpen(true); // Open confirmation modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal without deleting
    setSelectedUserId(null); // Clear the selected user ID
  };

  const handleConfirmDelete = async () => {
    if (selectedUserId) {
      setIsDeleting(true); // Show delete loading state
      try {
        await deleteUser(selectedUserId).unwrap(); // Trigger delete mutation
        toast.success("User deleted successfully!"); // Show success notification
        refetch(); // Refetch the users list after deletion
      } catch (error) {
        toast.error("Failed to delete the user."); // Show error notification
        console.error("Delete error:", error);
      } finally {
        setIsDeleting(false); // Reset delete loading state
        setIsModalOpen(false); // Close modal
        setSelectedUserId(null); // Clear selected user ID
      }
    }
  };

  const handleEdit = (record) => {
    // Handle the edit functionality (implement this based on your requirements)
    console.log("Editing user:", record);
  };


  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "firstName", // Assuming firstName contains the person's name
      key: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email", // Assuming email contains the user's email
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone", // Assuming phone contains the user's phone number
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role", // Assuming role contains the user's role
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a
            onClick={() => handleEdit(record)} // Trigger edit action
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
           	<FaEye />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Trigger delete confirmation
            className={`border p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 border-primary-500 ${
              isDeleting ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of Users</h2>
      {isLoading ? (
        <Loader />
      ) : users && users?.doc && users?.doc?.length ? (
        <DataTable columns={columns} data={users?.doc} />
      ) : (
        <p>No users found!</p>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm deletion
        title="Confirm Deletion"
        message="Are you sure you want to delete this user?" // Modal message correction
      />
    </div>
  );
};

export default UserList;
