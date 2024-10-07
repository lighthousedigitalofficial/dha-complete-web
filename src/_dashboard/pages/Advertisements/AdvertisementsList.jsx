import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useGetAdertisementsQuery } from "../../../redux/slices/advertisementsSlice";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";

const AdvertisementsList = ({ onEdit, onDelete }) => {
  const { data: Advertisements, isLoading } = useGetAdertisementsQuery({});

  console.log(Advertisements);

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
      render: (text, record, index) => index + 1, // Automatically generate serial number
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
      <h2 className="text-2xl font-bold mb-6">List of Advertisements</h2>
      {isLoading ? (
        <Loader />
      ) : Advertisements && Advertisements?.doc ? (
        <DataTable columns={columns} data={Advertisements?.doc} />
      ) : (
        <p>Advertisements not found!</p>
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

export default AdvertisementsList;
