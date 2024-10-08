import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { toast } from "react-hot-toast"; // Import toast for notifications
import {
  useDeleteEngineerMutation,
  useGetEngineersQuery,
} from "../../../redux/slices/engineers";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";

const EngineersList = () => {
  const { data: Engineers, isLoading, refetch } = useGetEngineersQuery({}); // Refetch after deletion
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEngineerId, setSelectedEngineerId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // State to track deletion status
  const [deleteEngineer] = useDeleteEngineerMutation(); // Delete mutation

  // Handle delete click to show modal
  const handleDeleteClick = (id) => {
    setSelectedEngineerId(id);
    setIsModalOpen(true);
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEngineerId(null);
  };

  // Handle the confirm delete action
  const handleConfirmDelete = async () => {
    if (selectedEngineerId) {
      setIsDeleting(true); // Set deleting state to true
      toast.dismiss(); // Clear any previous toasts

      try {
        await deleteEngineer(selectedEngineerId).unwrap(); // Execute the delete mutation
        refetch(); // Refetch engineers list to update the data
        toast.success("Engineer deleted successfully!"); // Show success message
        handleModalClose(); // Close the modal
      } catch (error) {
        console.error("Error deleting engineer:", error);
        toast.error("Failed to delete the engineer!"); // Show error message
      } finally {
        setIsDeleting(false); // Reset deleting state
      }
    }
  };

  const handleEdit = () => {
    // Functionality for handling edit can be implemented here
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1, // Generate serial number
    },
    {
      title: "Form Name",
      dataIndex: "firmName",
      key: "firmName",
    },
    {
      title: "Engineer Name",
      dataIndex: "engineerName",
      key: "engineerName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
            status === "active" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a onClick={() => handleEdit(record)}>
            <FaEye />

          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the ID to delete
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
      <h2 className="text-2xl font-bold mb-6">List of Engineers</h2>
      {isLoading ? (
        <Loader />
      ) : Engineers && Engineers?.doc ? (
        <DataTable columns={columns} data={Engineers?.doc} />
      ) : (
        <p>Engineers not found!</p>
      )}

      {/* Confirmation Modal for delete */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this engineer?"
      />
    </div>
  );
};

export default EngineersList;
