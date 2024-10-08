import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useCreateNoticeMutation } from "../../../redux/slices/noticesApiSlice";
import uploadImage from "../../../helpers/imageUpload";

const AddImportantNoticePage = () => {
	const [createNotice] = useCreateNoticeMutation();

	const [imageFile, setImageFile] = useState(null); // Store the actual image file
	const [imagePreview, setImagePreview] = useState(null); // Store preview for display

	const methods = useForm();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = methods;

	// Handle image change and preview
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file); // Store the actual file for upload
			setImagePreview(URL.createObjectURL(file)); // Set the preview for display
		}
	};

	// Form submit logic
	const onSubmit = async (data) => {
		try {
			console.log(data);
			console.log(imageFile);

			let url = null;
			// Check if an image file is selected and upload it to Cloudinary
			if (imageFile) {
				url = await uploadImage(imageFile); // Upload image to Cloudinary
				if (!url) {
					toast.error("Image upload failed");
					return;
				}
			}
			// Prepare the final data to send
			const noticeData = {
				title: data.title,
				description: data.description,
				image: url || null, // Include uploaded image URL if available
			};

			await createNotice(noticeData).unwrap(); // Send data to the backend
			toast.success("Notice created successfully");
			reset();
			setImagePreview(null); // Clear image preview
		} catch (error) {
			toast.error("Error creating notice");
		}
	};

	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">Important Notice</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* Title Input */}
						<div className="mb-4">
							<label
								className="block text-[1rem] font-semibold mb-2"
								htmlFor="title"
							>
								Title
							</label>
							<input
								type="text"
								id="title"
								{...register("title", { required: true })}
								placeholder="Enter Title"
								className={`w-full border ${
									errors.title ? "border-red-500" : "border-gray-300"
								} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
							/>
							{errors.title && (
								<p className="text-red-500 text-sm mt-1">Title is required</p>
							)}
						</div>

						{/* Description */}
						<div className="mb-4">
							<label
								className="block text-[1rem] font-semibold mb-2"
								htmlFor="description"
							>
								Description
							</label>
							<textarea
								id="description"
								{...register("description", { required: true })}
								placeholder="Enter Description"
								className="w-full border border-gray-300 rounded-md p-2"
							/>
							{errors.description && (
								<p className="text-red-500 text-sm mt-1">
									Description is required
								</p>
							)}
						</div>

						{/* Image Upload */}
						<div className="mt-4 w-full">
							<label
								className="block text-[1rem] font-semibold mb-2"
								htmlFor="file-upload"
							>
								Choose Image
							</label>
							<input
								type="file"
								id="file-upload"
								accept="image/*"
								onChange={handleImageChange}
								className={`block w-full text-sm text-gray-500 border ${
									errors.image ? "border-red-500" : "border-gray-300"
								} rounded-md cursor-pointer p-2 focus:outline-none focus:ring focus:ring-blue-200`}
							/>
							{errors.image && (
								<p className="text-red-500 text-sm mt-1">Image is required</p>
							)}
						</div>
					</form>
				</div>

				{/* Image Preview Section */}
				<div className="flex flex-col items-center">
					<div className="border-2 border-gray-300 rounded-md w-64 h-64 flex items-center justify-center">
						{imagePreview ? (
							<img
								src={imagePreview}
								alt="Image Preview"
								className="object-cover h-full w-full rounded-md"
							/>
						) : (
							<img
								src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
								className="h-64 w-full"
								alt="Placeholder"
							/>
						)}
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-end mt-6 gap-2">
				<button
					type="reset"
					className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
					onClick={() => {
						reset();
						setImagePreview(null);
					}}
				>
					Reset
				</button>
				<button
					type="submit"
					className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
					onClick={handleSubmit(onSubmit)}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddImportantNoticePage;
