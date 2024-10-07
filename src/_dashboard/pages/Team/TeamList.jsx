import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetTeamsQuery } from "../../../redux/slices/teamsSlice";

const TeamList = ({ onEdit, onDelete }) => {
  const { data: TeamsSlice, isLoading } = useGetTeamsQuery({});

  console.log(TeamsSlice);

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
      dataIndex: "id", // Assuming `id` contains the unique identifier
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name", // Assuming `name` contains the person's name
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation", // Assuming `designation` contains the job title or position
      key: "designation",
    },
    {
      title: "Extension",
      dataIndex: "extension", // Assuming `extension` contains the phone extension number
      key: "extension",
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
      <h2 className="text-2xl font-bold mb-6">List of TeamsSlice</h2>
      {isLoading ? (
        <Loader />
      ) : TeamsSlice && TeamsSlice?.doc && TeamsSlice?.doc?.length ? (
        <DataTable columns={columns} data={TeamsSlice?.doc} />
      ) : (
        <p>TeamsSlice not found!</p>
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

export default TeamList;
