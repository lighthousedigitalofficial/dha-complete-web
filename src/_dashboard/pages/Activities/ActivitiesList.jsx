import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetActivityQuery } from "../../../redux/slices/activity";

const ActivitiesList = ({ onEdit, onDelete }) => {
  const { data: Activities, isLoading } = useGetActivityQuery({});

  console.log(Activities);

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
    //   dataIndex: "id", // Assuming `id` contains the unique identifier
    //   key: "id",
    // },
    {
      title: "Title",
      dataIndex: "title", // Assuming `title` contains the title of the record
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description", // Assuming `description` contains the description text
      key: "description",
      render: (text) => (
        <span className="line-clamp-2">{text}</span> // Clamps description to two lines if long
      ),
    },

    // {
    //   title: "Banner ID",
    //   dataIndex: "bannerId", // Assuming `bannerId` contains the banner's unique identifier
    //   key: "bannerId",
    // },
    // {
    //   title: "Slug",
    //   dataIndex: "slug", // Assuming `slug` contains the URL-friendly string
    //   key: "slug",
    // },
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
      <h2 className="text-2xl font-bold mb-6">List of Activities</h2>
      {isLoading ? (
        <Loader />
      ) : Activities && Activities?.doc ? (
        <DataTable columns={columns} data={Activities?.doc} />
      ) : (
        <p>Activities not found!</p>
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

export default ActivitiesList;
