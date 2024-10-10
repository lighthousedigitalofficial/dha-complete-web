import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast

import {
  useGetNoticesQuery,
  useDeleteNoticeMutation,
} from "../../../redux/slices/noticesApiSlice";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal"; // Assuming you have a modal component
import { Link } from "react-router-dom";

const ImportantNoticeList = () => {
  const { data: Notice, isLoading, refetch } = useGetNoticesQuery({});
  const [deleteNotice] = useDeleteNoticeMutation(); // Hook to delete notice
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedNoticeId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedNoticeId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedNoticeId) {
      try {
        await deleteNotice(selectedNoticeId); // Trigger delete mutation
        refetch(); // Refetch the data after deletion
        toast.success("Notice deleted successfully!"); // Show success toast
        setIsModalOpen(false); // Close modal
        setSelectedNoticeId(null); // Clear selected ID
      } catch (error) {
        toast.error("Failed to delete notice."); // Show error toast
        console.error("Error deleting notice:", error);
      }
    }
  };

  const handleEdit = (record) => {
    onEdit(record);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image", // Assuming 'img' contains the image URL
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Notice Image"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <Link
            to={`/important-notices/edit/${record._id}`}
            // onClick={() => handleEdit(record)}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </Link>
          <a
            onClick={() => handleDeleteClick(record._id)} // Trigger delete confirmation modal
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
      <h2 className="text-2xl font-bold mb-6">List of Notice</h2>
      {isLoading ? (
        <Loader />
      ) : Notice && Notice?.doc ? (
        <DataTable columns={columns} data={Notice?.doc} />
      ) : (
        <p>Notice not found!</p>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm delete action
        title="Confirm Deletion"
        message="Are you sure you want to delete this notice?"
      />
    </div>
  );
};

export default ImportantNoticeList;
