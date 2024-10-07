import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteVideoMutation,
  useGetVideosQuery,
} from "../../../redux/slices/videosApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
const VideosList = () => {
  const { data: Video, isLoading, refetch } = useGetVideosQuery({});
  const [deleteVideo] = useDeleteVideoMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedVideoId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedVideoId) {
      try {
        await deleteVideo(selectedVideoId);
        refetch();
        handleModalClose();
      } catch (error) {
        console.error("Error deleting video:", error);
      }
    }
  };

  const handleEdit = (record) => {
    console.log("Edit Video:", record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Video",
      dataIndex: "url",
      key: "url",
      render: (url) => (
        <video
          controls
          className="w-40 h-24 border-2 border-gray-600 p-1 rounded-md"
        >
          <source src={url} type="video/mp4" className="rounded-md" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      title: "Title",
      dataIndex: "title", // Assuming `title` contains the title of the video
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a onClick={() => handleEdit(record)} className="text-blue-500">
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the video ID to delete
            className="text-red-500"
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of Videos</h2>
      {isLoading ? (
        <Loader />
      ) : Video && Video?.doc?.length ? (
        <DataTable columns={columns} data={Video?.doc} />
      ) : (
        <p>No videos found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this video?"
      />
    </div>
  );
};

export default VideosList;
