import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteMediaMutation,
  useGetMediaQuery,
} from "../../../redux/slices/mediaApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Optional: for notifications

const MediaList = () => {
  const { data: Media, isLoading, refetch } = useGetMediaQuery({});

  console.log(Media);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaId, setSelectedMediaId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // For loading state during deletion

  const [deleteMedia] = useDeleteMediaMutation();

  const handleDeleteClick = (id) => {
    setSelectedMediaId(id); // Store the media ID to be deleted
    setIsModalOpen(true); // Open confirmation modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal without deletion
    setSelectedMediaId(null); // Clear selected media ID
  };

  const handleConfirmDelete = async () => {
    if (selectedMediaId) {
      setIsDeleting(true); // Set deleting state
      try {
        await deleteMedia(selectedMediaId).unwrap(); // Trigger delete mutation
        toast.success("Media deleted successfully!"); // Optional: show success notification
        refetch(); // Refetch media data after deletion
      } catch (error) {
        toast.error("Failed to delete media."); // Optional: show error notification
        console.error("Delete error:", error);
      } finally {
        setIsDeleting(false); // Reset deleting state
        setIsModalOpen(false); // Close modal
        setSelectedMediaId(null); // Clear selected media ID
      }
    }
  };

  const handleEdit = (record) => {
    // Handle media edit action (implement based on your needs)
    console.log("Editing media:", record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1, // Automatically generate index
    },
    {
      title: "Description",
      dataIndex: "description", // Assuming `description` contains the media description
      key: "description",
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
            onClick={() => handleDeleteClick(record._id)} // Pass the media ID for deletion
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
      <h2 className="text-2xl font-bold mb-6">List of Media</h2>
      {isLoading ? (
        <Loader />
      ) : Media && Media?.doc && Media?.doc.length > 0 ? (
        <DataTable columns={columns} data={Media?.doc} />
      ) : (
        <p>Media not found!</p>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Trigger delete action on confirm
        title="Confirm Deletion"
        message="Are you sure you want to delete this media item?" // Adjusted modal message
      />
    </div>
  );
};

export default MediaList;
