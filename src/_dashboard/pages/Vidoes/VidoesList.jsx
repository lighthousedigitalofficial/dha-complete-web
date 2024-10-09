import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast,  } from "react-hot-toast"; // Import toast functions
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteVideoMutation,
  useGetVideosQuery,
} from "../../../redux/slices/videosApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { Link } from "react-router-dom";

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
        await deleteVideo(selectedVideoId); // Delete the video
        refetch(); // Refetch to update the list
        toast.success("Video deleted successfully!"); // Show success toast
        handleModalClose();
      } catch (error) {
        toast.error("Failed to delete video."); // Show error toast
        console.error("Error deleting video:", error);
      }
    }
  };

  const handleEdit = (record) => {
    console.log("Edit Video:", record);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
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
          <Link to={`/video/edit/${record._id}`}
            onClick={() => handleEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </Link>
          <a
            onClick={() => handleDeleteClick(record._id)} // Pass the video ID to delete
            className="border p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 border-primary-500"
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
