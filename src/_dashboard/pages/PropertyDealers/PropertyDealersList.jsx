import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";
import {
<<<<<<< HEAD
	useDeletePropertyDealerMutation,
	useGetPropertyDealerQuery,
} from "../../../redux/slices/propertyDealerSlice";

const PropertyDealersList = () => {
	const {
		data: PropertyDealersList,
		isLoading,
		refetch,
	} = useGetPropertyDealerQuery({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDealerId, setSelectedDealerId] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false); // Track the deletion state

	const [deletePropertyDealer] = useDeletePropertyDealerMutation();

	// Open the delete confirmation modal
	const handleDeleteClick = (id) => {
		setSelectedDealerId(id);
		setIsModalOpen(true);
	};

	// Close the modal
	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedDealerId(null);
	};

	// Confirm deletion and handle feedback with toast notifications
	const handleConfirmDelete = async () => {
		if (selectedDealerId) {
			setIsDeleting(true);
			toast.dismiss(); // Clear any previous toasts

			try {
				await deletePropertyDealer(selectedDealerId).unwrap(); // Execute the delete mutation
				refetch(); // Refetch the list after deletion
				toast.success("Property dealer deleted successfully!"); // Success toast
				handleModalClose(); // Close the modal
			} catch (error) {
				console.error("Error deleting property dealer:", error);
				toast.error("Error deleting property dealer!"); // Error toast
			} finally {
				setIsDeleting(false); // Reset the deleting state
			}
		}
	};

	const columns = [
		{
			title: "S.No",
			dataIndex: "sno",
			key: "sno",
			render: (text, record, index) => index + 1, // Automatically generate serial numbers
		},
		{
			title: "Agency",
			dataIndex: "agency",
			key: "agency",
		},
		{
			title: "Full Name",
			dataIndex: "fullName",
			key: "fullName",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<div className="flex gap-2 items-center px-2">
					<a
						onClick={() => handleEdit(record)}
						className="border p-2 rounded-md hover:text-white hover:bg-primary-300 border-primary-500"
					>
						<FaEdit />
					</a>
					<a
						onClick={() => handleDeleteClick(record._id)} // Ensure correct ID is passed
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
			<h2 className="text-2xl font-bold mb-6">List of Property Dealers</h2>
			{isLoading ? (
				<Loader />
			) : PropertyDealersList && PropertyDealersList?.doc ? (
				<DataTable columns={columns} data={PropertyDealersList?.doc} />
			) : (
				<p>Property dealers not found!</p>
			)}

			{/* Confirmation Modal for delete action */}
			<ConfirmationModal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				onConfirm={handleConfirmDelete}
				title="Confirm Deletion"
				message="Are you sure you want to delete this property dealer?"
			/>
		</div>
	);
=======
  useDeletePropertyDealerMutation,
  useGetPropertyDealerQuery,
} from "../../../redux/slices/propertyDealerSlice";

const PropertyDealersList = () => {
  const {
    data: PropertyDealersList,
    isLoading,
    refetch,
  } = useGetPropertyDealerQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDealerId, setSelectedDealerId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track the deletion state

  const [deletePropertyDealer] = useDeletePropertyDealerMutation();

  // Open the delete confirmation modal
  const handleDeleteClick = (id) => {
    setSelectedDealerId(id);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDealerId(null);
  };

  // Confirm deletion and handle feedback with toast notifications
  const handleConfirmDelete = async () => {
    if (selectedDealerId) {
      setIsDeleting(true);
      toast.dismiss(); // Clear any previous toasts

      try {
        await deletePropertyDealer(selectedDealerId).unwrap(); // Execute the delete mutation
        refetch(); // Refetch the list after deletion
        toast.success("Property dealer deleted successfully!"); // Success toast
        handleModalClose(); // Close the modal
      } catch (error) {
        console.error("Error deleting property dealer:", error);
        toast.error("Error deleting property dealer!"); // Error toast
      } finally {
        setIsDeleting(false); // Reset the deleting state
      }
    }
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1, // Automatically generate serial numbers
    },
    {
      title: "Agency",
      dataIndex: "agency",
      key: "agency",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center px-2">
          <a
            onClick={() => handleEdit(record)}
            className="border p-2 rounded-md hover:text-white hover:bg-primary-300 border-primary-500"
          >
            <FaEdit />
          </a>
          <a
            onClick={() => handleDeleteClick(record._id)} // Ensure correct ID is passed
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
      <h2 className="text-2xl font-bold mb-6">List of Property Dealers</h2>
      {isLoading ? (
        <Loader />
      ) : PropertyDealersList && PropertyDealersList?.doc ? (
        <DataTable columns={columns} data={PropertyDealersList?.doc} />
      ) : (
        <p>Property dealers not found!</p>
      )}

      {/* Confirmation Modal for delete action */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this property dealer?"
      />
    </div>
  );
>>>>>>> dev
};

export default PropertyDealersList;
