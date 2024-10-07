import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from "../../../redux/slices/event";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";

const EventsList = () => {
  const { data: Events, isLoading, refetch } = useGetEventsQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const [deleteEvent] = useDeleteEventMutation(); // Hook to delete event

  // Handle click to delete and open confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedEventId(id); // Set the selected event ID
    setIsModalOpen(true); // Open confirmation modal
  };

  // Close the confirmation modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEventId(null); // Reset selected event ID
  };

  // Confirm delete action
  const handleConfirmDelete = async () => {
    if (selectedEventId) {
      try {
        await deleteEvent(selectedEventId); // Trigger the delete mutation
        refetch(); // Refetch the list after deletion
        handleModalClose(); // Close the modal
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  const handleEdit = (record) => {
    console.log("Edit event:", record);
    // Add edit logic here
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1, // Generate serial number or use actual ID
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
            onClick={() => handleDeleteClick(record._id)} // Pass the event ID to delete
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
      <h2 className="text-2xl font-bold mb-6">List of Events</h2>
      {isLoading ? (
        <Loader />
      ) : Events && Events?.doc ? (
        <DataTable columns={columns} data={Events?.doc} />
      ) : (
        <p>No events found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this event?"
      />
    </div>
  );
};

export default EventsList;
