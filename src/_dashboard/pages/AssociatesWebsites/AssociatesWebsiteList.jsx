import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetAssociateWebsitesQuery } from "../../../redux/slices/associateWebsitesSlice";

const AssociatesWebsiteList = ({ onEdit, onDelete }) => {
	const { data: Notice, isLoading } = useGetAssociateWebsitesQuery({});

	console.log(Notice);

	const [isModalOpen, setIsModalOpen] = useState(false);
	// const [selectedPhaseId, setSelectedPhaseId] = useState(null);

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
			render: (text, record, index) => index + 1, // Automatically generate serial number
		},
		{
			title: "Logo",
			dataIndex: "logo", // Assuming `logo` contains the logo URL
			key: "logo",
			render: (logoUrl) => (
				<img
					src={logoUrl}
					alt="Logo"
					className="w-16 h-16 object-cover rounded-md"
				/>
			),
		},
		{
			title: "Link",
			dataIndex: "link", // Assuming `link` contains the URL link
			key: "link",
			render: (linkUrl) => (
				<a
					href={linkUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					{linkUrl}
				</a>
			),
		},
		{
			title: "Status",
			dataIndex: "status", // Assuming `status` contains status information (e.g., Active/Inactive)
			key: "status",
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
			<h2 className="text-2xl font-bold mb-6">List of Notice</h2>
			{isLoading ? (
				<Loader />
			) : Notice && Notice?.doc ? (
				<DataTable columns={columns} data={Notice?.doc} />
			) : (
				<p>Notice not found!</p>
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

export default AssociatesWebsiteList;
