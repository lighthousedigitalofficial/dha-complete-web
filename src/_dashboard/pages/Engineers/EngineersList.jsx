import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetEngineersQuery } from "../../../redux/slices/engineers";

const EngineersList = ({ onEdit, onDelete }) => {
  const { data: Engineers, isLoading } = useGetEngineersQuery({});

  console.log(Engineers);

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
    // {
    //   title: "ID",
    //   dataIndex: "id", // Assuming `registeredNumber` contains the firm's registered number
    //   key: "id",
    // },
    {
      title: "Form Name",
      dataIndex: "firmName", // Assuming `firmName` contains the name of the firm
      key: "firmName",
    },
    {
      title: "Engineer Name",
      dataIndex: "engineerName", // Assuming `engineerName` contains the name of the engineer
      key: "engineerName",
    },
    {
      title: "Address",
      dataIndex: "address", // Assuming `address` contains the full address
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone", // Assuming `phone` contains the phone number
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (e.g., Active, Inactive)
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
            status === "Active" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    // {
    //   title: "Affiliate ID",
    //   dataIndex: "affiliateId", // Assuming `affiliateId` contains the affiliate ID
    //   key: "affiliateId",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a onClick={() => handleEdit(record)}>
            <FaEye />
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
      <h2 className="text-2xl font-bold mb-6">List of Engineers</h2>
      {isLoading ? (
        <Loader />
      ) : Engineers && Engineers?.doc ? (
        <DataTable columns={columns} data={Engineers?.doc} />
      ) : (
        <p>Engineers not found!</p>
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

export default EngineersList;
