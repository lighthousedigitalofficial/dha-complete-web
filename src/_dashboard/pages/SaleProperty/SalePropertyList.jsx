import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetSalePropertySliceQuery } from "../../../redux/slices/salePropertySlice";

const SalePropertyList = ({ onEdit, onDelete }) => {
  const { data: SaleProperty, isLoading } = useGetSalePropertySliceQuery({});

  console.log(SaleProperty);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedPhaseId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhaseId(null);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedPhaseId);
    setIsModalOpen(false);
    setSelectedPhaseId(null);
  };

  const handleEdit = () => {};
  const handleDelete = () => {};

  const columns = [
    {
      title: "ID",
      dataIndex: "id", // Assuming `id` contains the UUID
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name", // Assuming `name` contains the name of the individual or entity
      key: "name",
    },

    {
      title: "Plot Number",
      dataIndex: "plotNum", // Assuming `plotNum` contains the plot number
      key: "plotNum",
    },

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
      title: "Phase",
      dataIndex: "phase", // Assuming `phase` contains a reference to a phase (Foreign Key)
      key: "phase",
      render: (phase) => phase.name, // Assuming `phase` object contains a `name` property
    },

    {
      title: "Type",
      dataIndex: "type", // Assuming `type` contains the property type (Enum)
      key: "type",
      render: (type) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
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
    {
      title: "Document",
      dataIndex: "document", // Assuming `document` contains the document URL
      key: "document",
      render: (document) => (
        <a
          href={document}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Document
        </a>
      ),
    },
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
          <a onClick={() => handleEdit(record)}>
            <FaEdit />
          </a>
          <a onClick={() => handleDelete(record)} style={{ color: "red" }}>
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of SaleProperty</h2>
      {isLoading ? (
        <Loader />
      ) : SaleProperty && SaleProperty?.doc && SaleProperty?.doc?.length ? (
        <DataTable columns={columns} data={SaleProperty?.doc} />
      ) : (
        <p>SaleProperty not found!</p>
      )}

      {/* <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this phase?"
      /> */}
    </div>
  );
};

export default SalePropertyList;
