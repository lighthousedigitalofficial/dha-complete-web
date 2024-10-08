import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import {
  useDeleteEventMutation,
  useGetEventsQuery,
} from "../../../redux/slices/event";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";

const EventsList = () => {
  const { data: Events, isLoading, refetch } = useGetEventsQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  // const [isDeleting, setIsDeleting] = useState(false);

  const [deleteEvent] = useDeleteEventMutation();

  const handleDeleteClick = (id) => {
    setSelectedEventId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEventId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedEventId) {
      setIsDeleting(true);
      try {
        await deleteEvent(selectedEventId);
        refetch();
        handleModalClose();

        toast.dismiss();
        toast.success("Event deleted successfully!");
      } catch (error) {
        console.error("Error deleting event:", error);

        toast.dismiss();
        toast.error("Error deleting event!");
      } finally {
        setIsDeleting(false);
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
          <a
            onClick={() => handleEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEye />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the event ID to delete
            className="border p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 border-primary-500"
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md relative">
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

      {/* Hot-toast notifications */}
    </div>
  );
};

export default EventsList;
