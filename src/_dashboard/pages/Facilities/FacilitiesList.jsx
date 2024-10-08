import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { toast } from "react-hot-toast";
import {
  useDeleteFacilitiesMutation,
  useGetFacilitiesQuery,
} from "../../../redux/slices/facilities";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";

const FacilitiesList = () => {
  const { data: Facilities, isLoading, refetch } = useGetFacilitiesQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Add a deleting state

  const [deleteFacilities] = useDeleteFacilitiesMutation();

  // Open the delete confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedFacilityId(id);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFacilityId(null);
  };

  // Confirm the deletion process
  const handleConfirmDelete = async () => {
    if (selectedFacilityId) {
      setIsDeleting(true);
      toast.dismiss(); // Clear any prior toasts
      try {
        await deleteFacilities(selectedFacilityId).unwrap(); // Execute delete mutation
        refetch(); // Refetch the data after deletion
        toast.success("Facility deleted successfully!"); // Show success toast
        handleModalClose(); // Close the modal
      } catch (error) {
        console.error("Error deleting facility:", error);
        toast.error("Error deleting facility!"); // Show error toast
      } finally {
        setIsDeleting(false); // Reset deletion state
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
      dataIndex: "title", // Assuming `title` contains the title of the item
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description", // Assuming `description` contains a brief description
      key: "description",
    },
    {
      title: "Link",
      dataIndex: "link", // Assuming `link` contains the URL
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
      <h2 className="text-2xl font-bold mb-6">List of Facilities</h2>
      {isLoading ? (
        <Loader />
      ) : Facilities && Facilities?.doc ? (
        <DataTable columns={columns} data={Facilities?.doc} />
      ) : (
        <p>Facilities not found!</p>
      )}

      {/* Optional Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this facility?"
      />
    </div>
  );
};

export default FacilitiesList;
