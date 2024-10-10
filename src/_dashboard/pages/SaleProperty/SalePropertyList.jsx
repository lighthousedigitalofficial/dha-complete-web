import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteSalePropertyMutation,
  useGetSalePropertiesQuery,
  useUpdateSalePropertyMutation,
} from "../../../redux/slices/salePropertySlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SalePropertyList = () => {
  const navigate = useNavigate(); // Create a navigate function
  const {
    data: SaleProperty,
    isLoading,
    refetch,
  } = useGetSalePropertiesQuery({});

  const [deleteSaleProperty] = useDeleteSalePropertyMutation(); // Added delete mutation
  const [updateSaleProperty] = useUpdateSalePropertyMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedProperties, setEditedProperties] = useState({});

  const handleDeleteClick = (id) => {
    setSelectedPhaseId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPhaseId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedPhaseId) {
      setIsDeleting(true);
      try {
        await deleteSaleProperty(selectedPhaseId).unwrap(); // Call the delete mutation
        toast.success("Sale property deleted successfully!");
        refetch();
        setIsModalOpen(false);
        setSelectedPhaseId(null);
      } catch (error) {
        toast.error("Failed to delete sale property.");
        console.error("Error deleting sale property:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEditToggle = (record) => {
    // Redirect to the edit page with the property ID
    navigate(`/sale-property/edit/${record._id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProperties((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (id) => {
    try {
      await updateSaleProperty({ id, data: editedProperties }).unwrap();
      toast.success("Sale property updated successfully!");
      setEditMode(false);
      refetch();
    } catch (error) {
      toast.error("Failed to update sale property.");
      console.error("Error updating sale property:", error);
    }
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) =>
        editMode ? (
          <input
            type="text"
            name="name"
            value={editedProperties.name}
            onChange={handleInputChange}
            onBlur={() => handleSaveChanges(record._id)}
            className="border rounded px-2 py-1"
          />
        ) : (
          <span>{text}</span>
        ),
    },
    {
      title: "Sector",
      dataIndex: "sector",
      key: "sector",
      render: (text, record) =>
        editMode ? (
          <input
            type="text"
            name="sector"
            value={editedProperties.sector}
            onChange={handleInputChange}
            onBlur={() => handleSaveChanges(record._id)}
            className="border rounded px-2 py-1"
          />
        ) : (
          <span>{text}</span>
        ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (text, record) =>
        editMode ? (
          <input
            type="text"
            name="size"
            value={editedProperties.size}
            onChange={handleInputChange}
            onBlur={() => handleSaveChanges(record._id)}
            className="border rounded px-2 py-1"
          />
        ) : (
          <span>{text}</span>
        ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => (
        <span
          className={`px-2 py-1 rounded-full text-black ${
            type === "residential"
              ? "bg-blue-500"
              : type === "commercial"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
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
          {/* Edit Button */}
          <a
            onClick={() => handleEditToggle(record)} // Redirect to the edit page
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </a>

          {/* Delete Button */}
          <a
            onClick={() => handleDeleteClick(record._id)}
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
      <h2 className="text-2xl font-bold mb-6">List of Sale Properties</h2>
      {isLoading ? (
        <Loader />
      ) : SaleProperty && SaleProperty?.doc?.length ? (
        <DataTable columns={columns} data={SaleProperty?.doc} />
      ) : (
        <p>Sale properties not found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this sale property?"
      />
    </div>
  );
};

export default SalePropertyList;
