import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeletePurchasePropertyMutation,
  useGetPurchasePropertiesQuery,
} from "../../../redux/slices/purchaseProperties";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Import toast for notifications

const PurchasePropertyList = () => {
  const navigate = useNavigate(); // Initialize navigate
  const {
    data: PurchaseProperty,
    isLoading,
    refetch,
  } = useGetPurchasePropertiesQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Loading state for delete

  const [deletePurchaseProperty] = useDeletePurchasePropertyMutation();

  const handleDeleteClick = (id) => {
    setSelectedPropertyId(id); // Set the ID for the selected property
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPropertyId(null); // Clear the selected property
  };

  const handleConfirmDelete = async () => {
    if (selectedPropertyId) {
      setIsDeleting(true); // Set loading state for delete
      try {
        await deletePurchaseProperty(selectedPropertyId).unwrap(); // Delete the property
        toast.success("Purchase property deleted successfully!"); // Show success message
        refetch(); // Refetch the property list
        setIsModalOpen(false); // Close the modal
        setSelectedPropertyId(null); // Clear the selection
      } catch (error) {
        toast.error("Failed to delete purchase property."); // Show error message
        console.error("Delete error:", error);
      } finally {
        setIsDeleting(false); // Reset loading state
      }
    }
  };

  const handleEdit = (record) => {
    // Navigate to the edit page with the selected property ID
    navigate(`/purchase-property/edit/${record._id}`); // Adjust the URL as needed
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1, // Generate serial number
    },
    {
      title: "Name",
      dataIndex: "name", // Assuming `name` contains the person's or entity's name
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type", // Assuming `type` contains the property type
      key: "type",
      render: (type) => (
        <span
          className={`px-2 py-1 rounded-full text-black ${
            type === "residential"
              ? "bg-blue-500"
              : type === "commercial"
              ? "bg-green-500"
              : "bg-yellow-800"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price", // Assuming `price` contains the price/demand
      key: "price",
      render: (price) => `Rs. ${price.toLocaleString()}`, // Format as currency
    },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (Enum)
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
            status === "active"
              ? "bg-green-500"
              : status === "available"
              ? "bg-primary-600"
              : status === "Pending"
              ? "bg-blue-500"
              : "bg-red-500"
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
            onClick={() => handleEdit(record)} // Navigate to edit property page
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the correct property ID for deletion
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
      <h2 className="text-2xl font-bold mb-6">List of Purchase Properties</h2>
      {isLoading ? (
        <Loader />
      ) : PurchaseProperty && PurchaseProperty?.doc?.length ? (
        <DataTable columns={columns} data={PurchaseProperty?.doc} />
      ) : (
        <p>Purchase properties not found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm deletion
        title="Confirm Deletion"
        message="Are you sure you want to delete this purchase property?"
      />
    </div>
  );
};

export default PurchasePropertyList;
