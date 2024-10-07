import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import DataTable from "../../_components/shared/DataTable";
import Loader from "../../../components/shared/Loader";
import { useGetNoticesQuery } from "../../../redux/slices/noticesApiSlice";

const ImportantNoticeList = ({ onEdit, onDelete }) => {
	const { data: Notice, isLoading } = useGetNoticesQuery({});

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

	// const columns = [
	//   {
	//     title: "S.No",
	//     dataIndex: "sno",
	//     key: "sno",
	//     render: (text, record, index) => index + 1, // Automatically generate serial number
	//   },
	//   {
	//     title: "Title",
	//     dataIndex: "title",
	//     key: "title",
	//   },
	//   {
	//     image: "Image",
	//     dataIndex: "img",
	//     key: "img",
	//   },
	//   {
	//     title: "Action",
	//     key: "action",
	//     render: (_, record) => (
	//       <div className="flex gap-2 items-center px-2">
	//         {/* Example action buttons (Edit/Delete) */}
	//         <a onClick={() => handleEdit(record)}>
	//           <FaEdit />
	//         </a>

	//         <a onClick={() => handleDelete(record)} style={{ color: "red" }}>
	//           <FaTrash />
	//         </a>
	//       </div>
	//     ),
	//   },
	// ];
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
			title: "Image",
			dataIndex: "img", // Assuming 'img' contains the image URL
			key: "img",
			render: (imgUrl) => (
				<img
					src={imgUrl}
					alt="Notice Image"
					className="w-16 h-16 object-cover rounded-md"
				/>
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

export default ImportantNoticeList;
