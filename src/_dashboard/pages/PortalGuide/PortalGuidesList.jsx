import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetTeamsQuery } from "../../../redux/slices/teamsSlice";

const PortGuidesList = ({ onEdit, onDelete }) => {
  const { data: PortalGuides, isLoading } = useGetTeamsQuery({});

  console.log(PortalGuides);

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
      title: "Title",
      dataIndex: "title", // Assuming `title` contains the title of the video
      key: "title",
    },
    // {
    //   title: "Video",
    //   dataIndex: "video", // Assuming `video` contains the video URL or video file
    //   key: "video",
    //   render: (video) => (
    //     <video width="100" controls>
    //       <source src={video} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   ),
    // },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (active/inactive)
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
      <h2 className="text-2xl font-bold mb-6">List of PortalGuides</h2>
      {isLoading ? (
        <Loader />
      ) : PortalGuides && PortalGuides?.doc && PortalGuides?.doc?.length ? (
        <DataTable columns={columns} data={PortalGuides?.doc} />
      ) : (
        <p>PortalGuides not found!</p>
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

export default PortGuidesList;
