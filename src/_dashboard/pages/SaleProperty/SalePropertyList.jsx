import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteSalePropertyMutation,
  useGetSalePropertiesQuery,
  // useGetSalePropertySliceQuery,
} from "../../../redux/slices/salePropertyApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Add toast for notifications

const SalePropertyList = () => {
  const {
    data: SaleProperty,
    isLoading,
    refetch,
  } = useGetSalePropertiesQuery({});

  console.log(SaleProperty);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion state

  const [deleteSaleProperty] = useDeleteSalePropertyMutation();

  const handleDeleteClick = (id) => {
    setSelectedPhaseId(id); // Set the selected property ID to delete
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedPhaseId(null); // Reset selected property ID
  };

  const handleConfirmDelete = async () => {
    if (selectedPhaseId) {
      setIsDeleting(true); // Set deleting state to true
      try {
        await deleteSaleProperty(selectedPhaseId).unwrap(); // Trigger delete mutation
        toast.success("Sale property deleted successfully!"); // Show success toast
        refetch(); // Refetch the list to update it
        setIsModalOpen(false); // Close the modal
        setSelectedPhaseId(null); // Clear selected property ID
      } catch (error) {
        toast.error("Failed to delete sale property."); // Show error toast
        console.error("Error deleting sale property:", error);
      } finally {
        setIsDeleting(false); // Reset deleting state
      }
    }
  };

  const handleEdit = (record) => {
    // Handle edit logic here
    console.log("Edit record", record);
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
      dataIndex: "name", // Assuming `name` contains the name of the individual or entity
      key: "name",
    },

    // {
    //   title: "Plot Number",
    //   dataIndex: "plotNum", // Assuming `plotNum` contains the plot number
    //   key: "plotNum",
    // },

    {
      title: "Sector",
      dataIndex: "sector", // Assuming `sector` contains the sector information
      key: "sector",
    },
    {
      title: "Size",
      dataIndex: "size", // Assuming `size` contains the size of the property
      key: "size",
    },

    {
      title: "Type",
      dataIndex: "type", // Assuming `type` contains the property type (Enum)
      key: "type",
      render: (type) => (
        <span
          className={`px-2 py-1 rounded-full text-black ${
            type === "residential"
              ? "bg-blue-500"
              : type === "commercial"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      ),
    },
    // {
    //   title: "Document",
    //   dataIndex: "document", // Assuming `document` contains the document URL
    //   key: "document",
    //   render: (document) => (
    //     <a
    //       href={document}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-blue-500 underline"
    //     >
    //       View Document
    //     </a>
    //   ),
    // },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (Enum)
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
            status === "active" ? "bg-green-500" : "bg-red-500"
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
            onClick={() => handleEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the selected property ID for deletion
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
      <h2 className="text-2xl font-bold mb-6">List of Sale Properties</h2>
      {isLoading ? (
        <Loader />
      ) : SaleProperty && SaleProperty?.doc?.length ? (
        <DataTable columns={columns} data={SaleProperty?.doc} />
      ) : (
        <p>Sale properties not found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm delete action
        title="Confirm Deletion"
        message="Are you sure you want to delete this sale property?"
      />
    </div>
  );
};

export default SalePropertyList;
