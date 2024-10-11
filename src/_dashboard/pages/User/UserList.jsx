import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

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
        setIsDeleting(false); 
        setIsModalOpen(false); 
        setSelectedUserId(null); 
      }
    }
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
      dataIndex: "firstName", 
      key: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email", 
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone", 
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role", 
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <Link
            to={`/user-view/${record._id}`} // Link to user details page
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEye />
          </Link>
          <Link
            to={`/user-details/${record._id}`} // Link to user edit page
            className="border p-2 hover:text-white hover:bg-blue-500 rounded-md border-primary-500 text-blue-500"
          >
            <FaEdit />
          </Link>
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
        onConfirm={handleConfirmDelete} 
        title="Confirm Deletion"
        message="Are you sure you want to delete this user?" 
      />
    </div>
  );
};

export default UserList;
