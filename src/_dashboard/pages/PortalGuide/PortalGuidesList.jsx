import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteGuideMutation,
  useGetGuidesQuery,
} from "../../../redux/slices/guidesSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Optional for notifications
import { Link } from "react-router-dom";

const PortGuidesList = () => {
  const { data: PortalGuides, isLoading, refetch } = useGetGuidesQuery({});

  console.log(PortalGuides);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuideId, setSelectedGuideId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // State for delete action

  const [deleteGuide] = useDeleteGuideMutation();

  const handleDeleteClick = (id) => {
    setSelectedGuideId(id); // Set guide ID for deletion
    setIsModalOpen(true); // Open confirmation modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal without deleting
    setSelectedGuideId(null); // Clear the selected guide ID
  };

  const handleConfirmDelete = async () => {
    if (selectedGuideId) {
      setIsDeleting(true); // Show delete loading state
      try {
        await deleteGuide(selectedGuideId).unwrap(); // Trigger delete mutation
        toast.success("Guide deleted successfully!"); // Show success notification
        refetch(); // Refetch the guides list after deletion
      } catch (error) {
        toast.error("Failed to delete the guide."); // Show error notification
        console.error("Delete error:", error);
      } finally {
        setIsDeleting(false); // Reset delete loading state
        setIsModalOpen(false); // Close modal
        setSelectedGuideId(null); // Clear selected guide ID
      }
    }
  };

  const handleEdit = (record) => {};

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1, // Generate serial number
    },
    {
      title: "Title",
      dataIndex: "title", // Assuming `name` contains the guide name
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author", // Assuming `designation` contains the designation/title
      key: "author",
    },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains active/inactive status
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
          <Link
            // onClick={() => handleEdit(record)}

            to={`/portal-guide/edit/${record._id}`} // Trigger edit action
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </Link>
          <a
            onClick={() => handleDeleteClick(record._id)} // Trigger delete confirmation
            className={`border p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 border-primary-500 ${
              isDeleting ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <FaTrash />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">List of Portal Guides</h2>
      {isLoading ? (
        <Loader />
      ) : PortalGuides && PortalGuides?.doc && PortalGuides?.doc?.length ? (
        <DataTable columns={columns} data={PortalGuides?.doc} />
      ) : (
        <p>No portal guides found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete} // Confirm deletion
        title="Confirm Deletion"
        message="Are you sure you want to delete this guide?"
      />
    </div>
  );
};

export default PortGuidesList;
