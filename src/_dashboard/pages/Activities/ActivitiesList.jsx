import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
// import {
//   useGetActivityQuery,
//   useDeleteActivityMutation,
// } from "../../../redux/slices/activity";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Import react-hot-toast
import {
  useDeleteActivityMutation,
  useGetActivityByIdQuery,
} from "../../../redux/slices/activitySlice";

const ActivitiesList = () => {
  const { data: Activities, isLoading, refetch } = useGetActivityByIdQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [deleteActivity] = useDeleteActivityMutation();

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
      setIsDeleting(true);
      try {
        await deleteActivity(selectedActivityId).unwrap(); // Trigger delete mutation
        refetch(); // Refetch activities to update the list after deletion
        toast.success("Activity deleted successfully!"); // Success toast
        setIsModalOpen(false);
        setSelectedActivityId(null);
      } catch (error) {
        toast.error("Failed to delete activity."); // Error toast
        console.error("Error deleting activity:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = (record) => {
    console.log("Edit record", record);
  };

  const columns = [
    // {
    //   title: "S.No",
    //   dataIndex: "sno",
    //   key: "sno",
    //   render: (text, record, index) => index + 1, // Generate serial number
    // },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <span className="line-clamp-2">{text}</span>,
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
            onClick={() => handleDeleteClick(record._id)}
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
      <h2 className="text-2xl font-bold mb-6">List of Activities</h2>
      {isLoading ? (
        <Loader />
      ) : Activities && Activities?.doc ? (
        <DataTable columns={columns} data={Activities?.doc} />
      ) : (
        <p>Activities not found!</p>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this activity?"
      />
    </div>
  );
};

export default ActivitiesList;
