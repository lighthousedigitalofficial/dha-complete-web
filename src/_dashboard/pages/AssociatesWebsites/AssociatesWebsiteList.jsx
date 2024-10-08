import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useGetAssociateWebsitesQuery,
  useDeleteAssociateWebsiteMutation,
} from "../../../redux/slices/associateWebsitesSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal"; // Assuming you have a modal component for confirmation

const AssociatesWebsiteList = () => {
  const { data: Notice, isLoading, refetch } = useGetAssociateWebsitesQuery({});
  const [deleteAssociateWebsite] = useDeleteAssociateWebsiteMutation(); // Hook to delete a website
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWebsiteId, setSelectedWebsiteId] = useState(null); // For handling delete

  // Open the confirmation modal for delete
  const handleDeleteClick = (id) => {
    setSelectedWebsiteId(id);
    setIsModalOpen(true);
  };

  // Close the modal and reset state
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedWebsiteId(null);
  };

  // Handle delete action after confirmation
  const handleConfirmDelete = async () => {
    if (selectedWebsiteId) {
      try {
        await deleteAssociateWebsite(selectedWebsiteId); // Trigger deletion
        refetch(); // Refetch data to update the list
        toast.success("Associate website deleted successfully!"); // Show success toast
        handleModalClose(); // Close modal
      } catch (error) {
        toast.error("Failed to delete associate website."); // Show error toast
        console.error("Error deleting website:", error);
      }
    }
  };

  // Handle edit action
  const handleEdit = (record) => {
    if (onEdit) {
      onEdit(record); // Trigger edit function passed via props
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
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logoUrl) => (
        <img
          src={logoUrl}
          alt="Logo"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (linkUrl) => (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {linkUrl}
        </a>
      ),
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
          <a
            onClick={() => handleEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Open delete modal
            className="border p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 border-primary-500"
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of Associate Websites</h2>
      {isLoading ? (
        <Loader />
      ) : Notice && Notice?.doc ? (
        <DataTable columns={columns} data={Notice?.doc} />
      ) : (
        <p>Associate Websites not found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this associate website?"
      />
    </div>
  );
};

export default AssociatesWebsiteList;
