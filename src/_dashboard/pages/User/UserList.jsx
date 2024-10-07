import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
// import { useGetActivityQuery } from "../../../redux/slices/activity";
import { useGetUsersQuery } from "../../../redux/slices/usersApiSlice";

const UserList = ({ onEdit, onDelete }) => {
	const { data: users, isLoading } = useGetUsersQuery({});

	console.log(users);

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
			title: "S.No",
			dataIndex: "sno",
			key: "sno",
			render: (text, record, index) => index + 1,
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
			title: "Extension",
			dataIndex: "extension", // Assuming `extension` contains the phone extension number
			key: "extension",
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
			<h2 className="text-2xl font-bold mb-6">List of users</h2>
			{isLoading ? (
				<Loader />
			) : users && users?.doc && users?.doc?.length ? (
				<DataTable columns={columns} data={users?.doc} />
			) : (
				<p>users not found!</p>
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

export default UserList;
