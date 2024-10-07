import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetVideosQuery } from "../../../redux/slices/videosApiSlice";

const VideosList = ({ onEdit, onDelete }) => {
	const { data: Video, isLoading } = useGetVideosQuery({});

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
			render: (text, record, index) => index + 1, // Optionally, generate a serial number or display the actual UUID
		},
		{
			title: "Video",
			dataIndex: "url", // Assuming `url` contains the video URL
			key: "url",
			render: (url) => (
				<video
					controls
					className="w-40 h-24 border-2 border-gray-600 p-1 rounded-md"
				>
					<source src={url} type="video/mp4" className="rounded-md" />
					Your browser does not support the video tag.
				</video>
			),
		},
		{
			title: "Title",
			dataIndex: "title", // Assuming `title` contains the title of the video
			key: "title",
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
			<h2 className="text-2xl font-bold mb-6">List of Video</h2>
			{isLoading ? (
				<Loader />
			) : Video && Video?.doc ? (
				<DataTable columns={columns} data={Video?.doc} />
			) : (
				<p>Video not found!</p>
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

export default VideosList;
