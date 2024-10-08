import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import {
	useDeleteEventMutation,
	useGetEventsQuery,
} from "../../../redux/slices/event";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast";

const EventsList = () => {
	const { data: Events, isLoading, refetch } = useGetEventsQuery({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedEventId, setSelectedEventId] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false); // Active deletion state

	const [deleteEvent] = useDeleteEventMutation();

	// Open delete confirmation modal
	const handleDeleteClick = (id) => {
		setSelectedEventId(id);
		setIsModalOpen(true);
	};

	// Close delete modal
	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedEventId(null);
	};

	// Confirm and handle the deletion of the event
	const handleConfirmDelete = async () => {
		if (selectedEventId) {
			setIsDeleting(true);
			toast.dismiss(); // Clear any prior toasts
			try {
				await deleteEvent(selectedEventId); // Delete the event
				refetch(); // Refetch the data after deletion
				handleModalClose(); // Close the modal
				toast.success("Event deleted successfully!"); // Show success toast
			} catch (error) {
				console.error("Error deleting event:", error);
				toast.error("Error deleting event!"); // Show error toast
			} finally {
				setIsDeleting(false); // Reset deletion state
			}
		}
	};

	// Handle the event editing process
	const handleEdit = (record) => {
		console.log("Edit event:", record);
		// Add your edit logic here
	};

	// Define columns for DataTable
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
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<div className="flex gap-2 items-center px-2">
					<a
						onClick={() => handleEdit(record)}
						className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
					>
						<FaEye />
					</a>
					<a
						onClick={() => handleDeleteClick(record._id)} // Pass the event ID to delete
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
		<div className="max-w-[90%] mx-auto bg-white p-8 rounded-md shadow-md relative">
			<h2 className="text-2xl font-bold mb-6">List of Events</h2>
			{isLoading ? (
				<Loader />
			) : Events && Events?.doc ? (
				<DataTable columns={columns} data={Events?.doc} />
			) : (
				<p>No events found!</p>
			)}

			{/* Confirmation Modal for delete action */}
			<ConfirmationModal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				onConfirm={handleConfirmDelete}
				title="Confirm Deletion"
				message="Are you sure you want to delete this event?"
			/>
		</div>
	);
};

export default EventsList;
