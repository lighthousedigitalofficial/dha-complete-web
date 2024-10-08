import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useGetEventsQuery } from "../../../redux/slices/eventApiSlice";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";

const EventsList = ({ onEdit, onDelete }) => {
  const { data: Events, isLoading } = useGetEventsQuery({});

  console.log(Events);

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
      title: "Images",
      dataIndex: "images", // Assuming `images` contains an array of image URLs
      key: "images",
      render: (images) => (
        <div className="flex space-x-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md"
            />
          ))}
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description", // Assuming `description` contains a brief description
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
      <h2 className="text-2xl font-bold mb-6">List of Events</h2>
      {isLoading ? (
        <Loader />
      ) : Events && Events?.doc ? (
        <DataTable columns={columns} data={Events?.doc} />
      ) : (
        <p>Events not found!</p>
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

export default EventsList;
