import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetPropertyDealerQuery } from "../../../redux/slices/propertyDealerApiSlice";

const PropertyDealersList = ({ onEdit, onDelete }) => {
  const { data: PropertyDealersList, isLoading } = useGetPropertyDealerQuery(
    {}
  );

  console.log(PropertyDealersList);

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
      title: "Agency",
      dataIndex: "agency", // Assuming `agency` contains the name of the agency
      key: "agency",
    },
    {
      title: "Full Name",
      dataIndex: "fullName", // Assuming `fullName` contains the full name of the individual
      key: "fullName",
    },
    {
      title: "Address",
      dataIndex: "address", // Assuming `address` contains the full address
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone", // Assuming `phone` contains the phone number
      key: "phone",
    },
    // {
    //   title: "Affiliate ID",
    //   dataIndex: "affiliateId", // Assuming `affiliateId` contains the affiliate ID
    //   key: "affiliateId",
    // },
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
      <h2 className="text-2xl font-bold mb-6">List of PropertyDealersList</h2>
      {isLoading ? (
        <Loader />
      ) : PropertyDealersList && PropertyDealersList?.doc ? (
        <DataTable columns={columns} data={PropertyDealersList?.doc} />
      ) : (
        <p>PropertyDealersList not found!</p>
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

export default PropertyDealersList;
