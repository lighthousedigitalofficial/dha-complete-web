import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import {
	useGetTeamsQuery,
	useDeleteTeamMutation,
} from "../../../redux/slices/teamsApiSlice";
import ConfirmationModal from "../../_components/shared/ConfirmationModal";
import { toast } from "react-hot-toast"; // Optional for notifications

const TeamList = () => {
	const { data: Teams, isLoading, refetch } = useGetTeamsQuery({});

	console.log(Teams);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedTeamId, setSelectedTeamId] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false); // Loading state for delete

	const [deleteTeam] = useDeleteTeamMutation();

	const handleDeleteClick = (id) => {
		setSelectedTeamId(id);
		setIsModalOpen(true); // Open modal for delete confirmation
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedTeamId(null); // Clear the selected team ID
	};

	const handleConfirmDelete = async () => {
		if (selectedTeamId) {
			setIsDeleting(true); // Start delete loading
			try {
				await deleteTeam(selectedTeamId).unwrap(); // Call the delete mutation
				toast.success("Team deleted successfully!"); // Show success notification
				refetch(); // Refetch the teams after deletion
			} catch (error) {
				toast.error("Failed to delete the team."); // Show error notification
				console.error("Delete error:", error);
			} finally {
				setIsDeleting(false); // Reset delete loading
				setIsModalOpen(false); // Close the modal
				setSelectedTeamId(null); // Clear the selected team ID
			}
		}
	};

	const handleEdit = (record) => {
		console.log("Edit team:", record); // Placeholder for edit logic
	};

	const columns = [
		{
			title: "S.No",
			dataIndex: "sno",
			key: "sno",
			render: (text, record, index) => index + 1, // Generate serial number
		},
		{
			title: "Name",
			dataIndex: "name", // Assuming `name` contains the person's name
			key: "name",
		},
		{
			title: "Designation",
			dataIndex: "designation", // Assuming `designation` contains the job title or position
			key: "designation",
		},
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
					<a
						onClick={() => handleEdit(record)}
						className="border p-2 hover:text-white hover:bg-primary-300 rounded-md border-primary-500"
					>
						<FaEdit />
					</a>
					<a
						onClick={() => handleDeleteClick(record._id)} // Pass team ID for delete action
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
			<h2 className="text-2xl font-bold mb-6">List of Teams</h2>
			{isLoading ? (
				<Loader />
			) : Teams && Teams?.doc?.length ? (
				<DataTable columns={columns} data={Teams?.doc} />
			) : (
				<p>No teams found!</p>
			)}

			{/* Confirmation modal for delete action */}
			<ConfirmationModal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				onConfirm={handleConfirmDelete} // Confirm deletion
				title="Confirm Deletion"
				message="Are you sure you want to delete this team?"
			/>
		</div>
	);
};

export default TeamList;
