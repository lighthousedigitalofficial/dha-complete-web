import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// import { useGetBannersQuery } from "../../../redux/slices/BannersSlice";
import { useGetBannersQuery } from "../../../redux/slices/bannerSlice";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";

const BannerList = ({ onEdit, onDelete }) => {
  const { data: Banners, isLoading } = useGetBannersQuery({});

  console.log(Banners);

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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Media URL",
      dataIndex: "mediaUrl",
      key: "mediaUrl",
      render: (mediaUrl) => (
        <img
          src={mediaUrl}
          alt="Media"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
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
      title: "Status",
      dataIndex: "status",
      key: "status",
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
      <h2 className="text-2xl font-bold mb-6">List of Banners</h2>
      {isLoading ? (
        <Loader />
      ) : Banners && Banners?.doc ? (
        <DataTable columns={columns} data={Banners?.doc} />
      ) : (
        <p>Banners not found!</p>
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

export default BannerList;
