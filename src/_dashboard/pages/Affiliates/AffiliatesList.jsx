import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";
import {
  useDeleteAffiliateMutation,
  useGetAffiliatesQuery,
} from "../../../redux/slices/affiliates";

const AffiliatesList = () => {
  const { data: Affiliates, isLoading, refetch } = useGetAffiliatesQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAffiliateId, setSelectedAffiliateId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track delete state

  const [deleteAffiliate] = useDeleteAffiliateMutation();

  // Open the delete confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedAffiliateId(id);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAffiliateId(null);
  };

  // Confirm deletion and handle feedback with toast
  const handleConfirmDelete = async () => {
    if (selectedAffiliateId) {
      setIsDeleting(true);
      toast.dismiss(); // Clear previous toasts
      try {
        await deleteAffiliate(selectedAffiliateId).unwrap(); // Execute delete mutation
        refetch(); // Refetch the list of affiliates after deletion
        toast.success("Affiliate deleted successfully!"); // Show success toast
        handleModalClose(); // Close the modal
      } catch (error) {
        console.error("Error deleting affiliate:", error);
        toast.error("Error deleting affiliate!"); // Show error toast
      } finally {
        setIsDeleting(false); // Reset the deleting state
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
      title: "Name",
      dataIndex: "name",
      key: "name",
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
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          {/* Edit button */}
          <a
            onClick={() => handleEdit(record)}
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
      <h2 className="text-2xl font-bold mb-6">List of Affiliates</h2>
      {isLoading ? (
        <Loader />
      ) : Affiliates && Affiliates?.doc ? (
        <DataTable columns={columns} data={Affiliates?.doc} />
      ) : (
        <p>Affiliates not found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this affiliate?"
      />
    </div>
  );
};

export default AffiliatesList;
