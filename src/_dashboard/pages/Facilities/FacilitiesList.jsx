import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetFacilitiesQuery } from "../../../redux/slices/facilities";

const FacilitiesList = ({ onEdit, onDelete }) => {
  const { data: Facilities, isLoading } = useGetFacilitiesQuery({});

  console.log(Facilities);

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
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1, // Automatically generate serial number or use actual ID
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
      <h2 className="text-2xl font-bold mb-6">List of Facilities</h2>
      {isLoading ? (
        <Loader />
      ) : Facilities && Facilities?.doc ? (
        <DataTable columns={columns} data={Facilities?.doc} />
      ) : (
        <p>Facilities not found!</p>
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

export default FacilitiesList;
