import { useState } from "react";
import { useForm } from "react-hook-form";
import uploadImage from "../../../helpers/imageUpload";
import uploadVideo from "../../../helpers/videoUpload";
import InputField from "../../_components/shared/InputField";
import toast from "react-hot-toast";
import { useCreatePhasesMutation } from "../../../redux/slices/phasesSlice";

const AddPhasePage = () => {
	const [imagePreview, setImagePreview] = useState(null);
	const [uploadedImages, setUploadedImages] = useState([]);
	const [uploadedVideos, setUploadedVideos] = useState([]);

	const [createPhase, { isLoading }] = useCreatePhasesMutation();

	const methods = useForm(); // Initialize useForm

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = methods;

	// Helper function to handle image preview
	const handleImagePreview = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImagePreview(URL.createObjectURL(file));
			handleImagesUpload([file]);
		}
	};

	// Helper function to handle single image upload and store the URL
	const handleImagesUpload = async (files) => {
		try {
			const uploadedUrls = [];
			for (let file of files) {
				const uploadedUrl = await uploadImage(file); // Upload each image individually
				uploadedUrls.push(uploadedUrl);
			}
			return uploadedUrls; // Return list of uploaded images' URLs
		} catch (error) {
			console.error("Error uploading images:", error);
			toast.error("Failed to upload images!"); // Show error toast
			return [];
		}
	};

	// Helper function to handle single video upload and store the URL
	const handleVideosUpload = async (files) => {
		try {
			const uploadedUrls = [];
			for (let file of files) {
				const uploadedUrl = await uploadVideo(file); // Upload each video individually
				uploadedUrls.push(uploadedUrl);
			}
			return uploadedUrls; // Return list of uploaded videos' URLs
		} catch (error) {
			console.error("Error uploading videos:", error);
			toast.error("Failed to upload videos!"); // Show error toast
			return [];
		}
	};

	// Form submission logic
	const onSubmit = async (data) => {
		try {
			// Step 1: Upload images and videos to the cloud
			const images = await handleImagesUpload(uploadedImages);
			const videos = await handleVideosUpload(uploadedVideos);

			if (!images || !videos) {
				return toast.error("Images or Videos not uploaded on cloud.");
			}

			// Step 2: Prepare the data to be sent to the server after uploads
			const formData = {
				...data,
				mainImage: images.length ? images[0] : null, // Use the first uploaded image as the main image
				images, // Array of uploaded image URLs
				videos, // Array of uploaded video URLs
			};

			console.log(formData);

			// Step 3:createPhase action with form data
			await createPhase(formData).unwrap();

			// Notify the user and reset form
			toast.success("Phase successfully created!");
			reset(); // Reset form after submission

			// Clear states after form submission
			setUploadedImages([]);
			setUploadedVideos([]);
			setImagePreview(null);
		} catch (error) {
			console.error("Error creating phase:", error);
			toast.error(error.data.message || "Error creating phase");
		}
	};

	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">Create New Phase</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Title Field */}
				<div className="mb-4">
					<InputField
						label="Title"
						type="text"
						name="title"
						register={register}
						required
						errors={errors}
						placeholder="Enter Phase Title"
					/>
				</div>

				{/* Link Field */}
				<div className="mb-4">
					<InputField
						label="Link"
						type="text"
						name="link"
						register={register}
						required
						errors={errors}
						placeholder="Enter Link"
					/>
				</div>

				{/* Location Field */}
				<div className="mb-4">
					<InputField
						label="Location"
						type="text"
						name="location"
						register={register}
						required
						errors={errors}
						placeholder="Enter Location"
					/>
				</div>

				{/* Description Field */}
				<div className="mb-4">
					<label>Description</label>
					<textarea
						{...register("description", { required: true })}
						className="block w-full border border-gray-300 p-2 rounded-md"
						placeholder="Enter Phase Description"
					/>
					{errors.description && (
						<p className="text-red-600">Description is required</p>
					)}
				</div>

				{/* Main Image Upload */}
				<div className="mb-4">
					<label>Main Image</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleImagePreview}
						className="block w-full border border-gray-300 p-2 rounded-md"
					/>
					{imagePreview && (
						<div className="mt-4">
							<img
								src={imagePreview}
								alt="Preview"
								className="object-cover w-full h-40 rounded-md"
							/>
						</div>
					)}
				</div>

				{/* Additional Images Upload */}
				<div className="mb-4">
					<label>Additional Images</label>
					<input
						type="file"
						multiple
						accept="image/*"
						onChange={(e) =>
							setUploadedImages([
								...uploadedImages,
								...Array.from(e.target.files),
							])
						}
						className="block w-full border border-gray-300 p-2 rounded-md"
					/>

					{/* Preview and Delete for Images */}
					{uploadedImages.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
							{Array.from(uploadedImages).map((file, index) => (
								<div key={index} className="relative">
									<img
										src={URL.createObjectURL(file)}
										alt={`Preview ${index}`}
										className="object-cover w-full h-32 rounded-md"
									/>
									<button
										onClick={() =>
											setUploadedImages(
												uploadedImages.filter((_, i) => i !== index)
											)
										}
										className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
									>
										&#10005;
									</button>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Videos Upload */}
				<div className="mb-4">
					<label>Videos</label>
					<input
						type="file"
						multiple
						accept="video/*"
						onChange={(e) =>
							setUploadedVideos([
								...uploadedVideos,
								...Array.from(e.target.files),
							])
						}
						className="block w-full border border-gray-300 p-2 rounded-md"
					/>

					{/* Preview and Delete for Videos */}
					{uploadedVideos.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
							{Array.from(uploadedVideos).map((file, index) => (
								<div key={index} className="relative">
									<video
										src={URL.createObjectURL(file)}
										controls
										className="object-cover w-full h-32 rounded-md"
									/>
									<button
										onClick={() =>
											setUploadedVideos(
												uploadedVideos.filter((_, i) => i !== index)
											)
										}
										className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
									>
										&#10005;
									</button>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Submit Button */}
				<div className="flex justify-end items-center gap-4 mt-6">
					<button
						type="button"
						className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
						onClick={() => reset()}
					>
						Reset
					</button>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
						disabled={isLoading}
					>
						{isLoading ? "Adding.." : "Add Phase"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPhasePage;
