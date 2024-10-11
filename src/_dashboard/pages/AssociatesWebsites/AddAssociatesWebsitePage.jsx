import { useState } from "react";
import { useForm } from "react-hook-form";
import uploadImage from "../../../helpers/imageUpload";
import { useCreateAssociateWebsiteMutation } from "../../../redux/slices/associateWebsitesSlice";
import toast from "react-hot-toast";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddAssociatesWebsitePage = () => {
	const [imageFile, setImageFile] = useState(null); // Store the actual image file
	const [imagePreview, setImagePreview] = useState(null); // Store preview for display

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [createAssociateWebsite, { isLoading }] =
		useCreateAssociateWebsiteMutation();

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
			let url = null;

			// Check if an image file is selected and upload it to Cloudinary
			if (imageFile) {
				url = await uploadImage(imageFile); // Upload image to Cloudinary (implement this function)
				if (!url) {
					toast.error("Image upload failed");
					return;
				}
			}

			// Prepare the final data to send
			const websiteData = {
				title: data.title,
				link: data.link,
				status: data.status,
				image: url || null, // Include uploaded image URL if available
			};

			await createAssociateWebsite(websiteData).unwrap(); // Send data to the backend
			toast.success("Website added successfully");
			reset();
			setImagePreview(null); // Clear image preview
		} catch (error) {
			toast.error("Error adding website");
		}
	};

	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">Add Associates Websites</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Title Field */}
				<div className="mb-4">
					<label
						className="block text-[1rem] font-semibold mb-2"
						htmlFor="title"
					>
						Title
					</label>
					<FormInput
						type="text"
						id="title"
						placeholder="Enter Title"
						{...register("title", { required: "Title is required." })}
					/>
					{errors.title && (
						<span className="text-red-500 text-sm">{errors.title.message}</span>
					)}
				</div>

				{/* Link Field */}
				<div className="mb-4">
					<label
						className="block text-[1rem] font-semibold mb-2"
						htmlFor="link"
					>
						Link
					</label>
					<FormInput
						type="url"
						id="link"
						placeholder="Enter Link"
						{...register("link", {
							required: "A valid link is required.",
							pattern: {
								value:
									/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
								message: "A valid URL is required.",
							},
						})}
					/>
					{errors.link && (
						<span className="text-red-500 text-sm">{errors.link.message}</span>
					)}
				</div>

				{/* Status Field */}
				<div className="mb-4">
					<label
						className="block text-[1rem] font-semibold mb-2"
						htmlFor="status"
					>
						Status
					</label>
					<select
						id="status"
						{...register("status")}
						className="block w-full p-2 border border-gray-300 rounded-md"
					>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>

				{/* Image Upload */}
				<div className="mb-4">
					<label
						className="block text-[1rem] font-semibold mb-2"
						htmlFor="file-upload"
					>
						Choose Logo
					</label>
					<FormInput
						type="file"
						id="file-upload"
						accept="image/*"
						onChange={handleImageChange}
						className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer p-2"
					/>
				</div>

				{/* Image Preview */}
				{imagePreview && (
					<div className="mb-4">
						<img
							src={imagePreview}
							alt="Preview"
							className="w-64 h-64 object-cover rounded-md"
						/>
					</div>
				)}

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
						className={`bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 ${
							isLoading ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={isLoading}
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddAssociatesWebsitePage;
