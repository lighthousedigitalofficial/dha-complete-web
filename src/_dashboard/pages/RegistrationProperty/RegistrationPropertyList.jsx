import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
  useDeleteRegistrationPropertyMutation,
  useGetRegistrationPropertiesQuery,
} from "../../../redux/slices/registrationPropertySlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const RegistrationPropertyList = () => {
  const {
    data: RegistrationProperty,
    isLoading,
    refetch,
  } = useGetRegistrationPropertiesQuery({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [deleteRegistrationProperty] = useDeleteRegistrationPropertyMutation();

  const handleDeleteClick = (id) => {
    setSelectedPropertyId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPropertyId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedPropertyId) {
      setIsDeleting(true);
      try {
        await deleteRegistrationProperty(selectedPropertyId).unwrap();
        toast.success("Registration property deleted successfully!");
        refetch();
        setIsModalOpen(false);
        setSelectedPropertyId(null);
      } catch (error) {
        toast.error("Failed to delete registration property.");
        console.error("Delete error:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = (record) => {
    console.log("Edit record", record);
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
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
          <Link
            to={`/registration-property/edit/${record._id}`}
            className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
          >
            <FaEdit />
          </Link>
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
      <h2 className="text-2xl font-bold mb-6">
        List of Registration Properties
      </h2>
      {isLoading ? (
        <Loader />
      ) : RegistrationProperty && RegistrationProperty?.doc?.length ? (
        <DataTable columns={columns} data={RegistrationProperty?.doc} />
      ) : (
        <p>No registration properties found!</p>
      )}

      {/* Confirmation modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this registration property?"
      />
    </div>
  );
};

export default RegistrationPropertyList;
