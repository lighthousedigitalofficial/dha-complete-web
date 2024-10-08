import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetFacilitiesQuery } from "../../../redux/slices/facilitiesApiSlice";

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
      title: "Main Image",
      dataIndex: "mainImage", // Assuming `mainImage` contains the URL of the main image
      key: "mainImage",
      render: (mainImageUrl) => (
        <img
          src={mainImageUrl}
          alt="Main"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
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
              className="w-12 h-12 object-cover rounded-md"
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
      title: "Services",
      dataIndex: "services", // Assuming `services` contains an array of service names
      key: "services",
      render: (services) => (
        <ul className="list-disc pl-5">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      ),
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
      <h2 className="text-2xl font-bold mb-6">List of Facilities</h2>
      {isLoading ? (
        <Loader />
      ) : Facilities && Facilities?.doc ? (
        <DataTable columns={columns} data={Facilities?.doc} />
      ) : (
        <p>Facilities not found!</p>
      )}
    </div>
  );
};

export default FacilitiesList;
