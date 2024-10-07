import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetregistrationPropertySliceQuery } from "../../../redux/slices/registrationPropertySlice";

const RegistrationPropertyList = ({ onEdit, onDelete }) => {
  const { data: RegistrationProperty, isLoading } =
    useGetregistrationPropertySliceQuery({});

  console.log(RegistrationProperty);

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
    // {
    //   title: "ID",
    //   dataIndex: "id", // Assuming `id` contains the UUID or unique identifier
    //   key: "id",
    // },
    {
      title: "Name",
      dataIndex: "name", // Assuming `name` contains the person's or entity's name
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone", // Assuming `phone` contains the phone number
      key: "phone",
    },
    // {
    //   title: "Email",
    //   dataIndex: "email", // Assuming `email` contains the email address
    //   key: "email",
    // },
    // {
    //   title: "Country",
    //   dataIndex: "country", // Assuming `country` contains the country name
    //   key: "country",
    // },
    // {
    //   title: "Requirement",
    //   dataIndex: "requirement", // Assuming `requirement` contains the user's requirements (e.g., property type)
    //   key: "requirement",
    // },
    // {
    //   title: "Phase",
    //   dataIndex: "phase", // Assuming `phase` contains the phase of the project/property (ForeignKey: Phases.id)
    //   key: "phase",
    //   render: (phase) => phase.name, // Assuming `phase` is an object and `name` is a property
    // },
    // {
    //   title: "Size",
    //   dataIndex: "size", // Assuming `size` contains the property size
    //   key: "size",
    // },
    // {
    //   title: "Budget Price",
    //   dataIndex: "budgetPrice", // Assuming `budgetPrice` contains the budget/demand price (Decimal)
    //   key: "budgetPrice",
    //   render: (price) => `Rs. ${price.toLocaleString()}`, // Format price as currency
    // },
    // {
    //   title: "Remarks",
    //   dataIndex: "remarks", // Assuming `remarks` contains any additional comments or notes
    //   key: "remarks",
    // },
    {
      title: "Status",
      dataIndex: "status", // Assuming `status` contains the status (Enum: active, inactive)
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
      <h2 className="text-2xl font-bold mb-6">List of RegistrationProperty</h2>
      {isLoading ? (
        <Loader />
      ) : RegistrationProperty &&
        RegistrationProperty?.doc &&
        RegistrationProperty?.doc?.length ? (
        <DataTable columns={columns} data={RegistrationProperty?.doc} />
      ) : (
        <p>RegistrationProperty not found!</p>
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

export default RegistrationPropertyList;
