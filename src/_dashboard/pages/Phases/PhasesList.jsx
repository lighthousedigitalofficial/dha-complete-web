import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";
import {
  useDeletePhaseMutation,
  useGetPhaseQuery,
} from "../../../redux/slices/phasesApiSlice";

const PhasesList = () => {
  const { data: phases, isLoading, refetch } = useGetPhaseQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [deletePhase] = useDeletePhaseMutation();

  // Open the delete confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedPhaseId(id);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhaseId(null);
  };

  // Confirm the deletion process
  const handleConfirmDelete = async () => {
    if (selectedPhaseId) {
      setIsDeleting(true);
      toast.dismiss(); // Clear any prior toasts
      try {
        await deletePhase(selectedPhaseId).unwrap(); // Delete the phase
        refetch(); // Refetch the data after deletion
        toast.success("Phase deleted successfully!"); // Show success toast
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error deleting phase:", error);
        toast.error("Error deleting phase!"); // Show error toast
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1, // Automatically generate serial number
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          {/* Edit button */}
          <a
            onClick={() => onEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </a>

          {/* Delete button */}
          <a
            onClick={() => handleDeleteClick(record._id)} // Ensure the correct ID is passed
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
      <h2 className="text-2xl font-bold mb-6">List of Phases</h2>
      {isLoading ? (
        <Loader />
      ) : phases && phases?.doc ? (
        <DataTable columns={columns} data={phases?.doc} />
      ) : (
        <p>Phases not found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this phase?"
      />
    </div>
  );
};

export default PhasesList;
