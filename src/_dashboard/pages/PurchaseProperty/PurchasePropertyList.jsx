import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetpurchasePropertiesQuery } from "../../../redux/slices/purchaseProperties";

const PurchasePropertyList = ({ onEdit, onDelete }) => {
  const { data: PurchaseProperty, isLoading } = useGetpurchasePropertiesQuery(
    {}
  );

  console.log(PurchaseProperty);

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
      dataIndex: "name", // Assuming `name` contains the person's or entity's name
      key: "name",
    },

    {
      title: "Type",
      dataIndex: "type", // Assuming `type` contains the type (Enum: residential, commercial, etc.)
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
    // {
    //   title: "Phase",
    //   dataIndex: "phase", // Assuming `phase` contains the phase (ForeignKey: Phases.id)
    //   key: "phase",
    //   render: (phase) => phase.name, // Assuming `phase` contains an object with `name`
    // },
    // {
    //   title: "Size",
    //   dataIndex: "size", // Assuming `size` contains the property size
    //   key: "size",
    // },
    {
      title: "Price",
      dataIndex: "price", // Assuming `price` contains the price/demand (Decimal)
      key: "price",
      render: (price) => `Rs. ${price.toLocaleString()}`, // Format the price as currency
    },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (Enum: active, inactive)
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
      <h2 className="text-2xl font-bold mb-6">List of PurchaseProperty</h2>
      {isLoading ? (
        <Loader />
      ) : PurchaseProperty &&
        PurchaseProperty?.doc &&
        PurchaseProperty?.doc?.length ? (
        <DataTable columns={columns} data={PurchaseProperty?.doc} />
      ) : (
        <p>PurchaseProperty not found!</p>
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

export default PurchasePropertyList;
