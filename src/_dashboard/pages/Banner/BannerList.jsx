import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast

import {
  useGetBannersQuery,
  useDeleteBannerMutation,
} from "../../../redux/slices/bannerSlice";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";

const BannerList = () => {
  const { data: Banners, isLoading, refetch } = useGetBannersQuery({});
  const [deleteBanner] = useDeleteBannerMutation(); // Hook to delete banner
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState(null);

  // Handle delete button click - opens the confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedBannerId(id);
    setIsModalOpen(true);
  };

  // Close modal and reset selected banner ID
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBannerId(null);
  };

  // Handle the delete action on confirmation
  const handleConfirmDelete = async () => {
    if (selectedBannerId) {
      try {
        await deleteBanner(selectedBannerId); // Trigger delete mutation
        refetch(); // Refetch banners to update the list after deletion
        toast.success("Banner deleted successfully!"); // Show success toast
        setIsModalOpen(false); // Close modal
        setSelectedBannerId(null); // Clear selected banner ID
      } catch (error) {
        toast.error("Failed to delete banner."); // Show error toast
        console.error("Error deleting banner:", error);
      }
    }
  };

  const handleEdit = (record) => {
    // Handle edit logic here
    console.log("Edit banner", record);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
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
      title: "Status",
      dataIndex: "status",
      key: "status",
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
            onClick={() => handleDeleteClick(record._id)} // Set the selected banner ID for deletion
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
      <h2 className="text-2xl font-bold mb-6">List of Banners</h2>
      {isLoading ? (
        <Loader />
      ) : Banners && Banners?.doc ? (
        <DataTable columns={columns} data={Banners?.doc} />
      ) : (
        <p>Banners not found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm delete action
        title="Confirm Deletion"
        message="Are you sure you want to delete this banner?" // Updated message
      />
    </div>
  );
};

export default BannerList;
