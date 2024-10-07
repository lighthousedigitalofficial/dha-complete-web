import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useGetActivityQuery,
  useDeleteActivityMutation,
} from "../../../redux/slices/activity";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";

const ActivitiesList = () => {
  const { data: Activities, isLoading, refetch } = useGetActivityQuery({});
  const [deleteActivity] = useDeleteActivityMutation(); // Hook to delete activity
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState(null);

  // Handle delete button click - opens the confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedActivityId(id);
    setIsModalOpen(true);
  };

  // Close modal and reset selected activity ID
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedActivityId(null);
  };

  // Handle the delete action on confirmation
  const handleConfirmDelete = async () => {
    if (selectedActivityId) {
      try {
        await deleteActivity(selectedActivityId); // Trigger delete mutation
        refetch(); // Refetch activities to update the list after deletion
        setIsModalOpen(false); // Close modal
        setSelectedActivityId(null); // Clear selected activity ID
      } catch (error) {
        console.error("Error deleting activity:", error);
      }
    }
  };

  const handleEdit = (record) => {
    // Handle edit logic here
    console.log("Edit record", record);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title", // Assuming `title` contains the title of the record
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description", // Assuming `description` contains the description text
      key: "description",
      render: (text) => (
        <span className="line-clamp-2">{text}</span> // Clamps description to two lines if long
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a onClick={() => handleEdit(record)} className="text-blue-500">
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Set the selected activity ID for deletion
            className="text-red-500"
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of Activities</h2>
      {isLoading ? (
        <Loader />
      ) : Activities && Activities?.doc ? (
        <DataTable columns={columns} data={Activities?.doc} />
      ) : (
        <p>Activities not found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm delete action
        title="Confirm Deletion"
        message="Are you sure you want to delete this activity?"
      />
    </div>
  );
};

export default ActivitiesList;
