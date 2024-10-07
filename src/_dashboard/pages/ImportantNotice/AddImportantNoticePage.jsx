import { useState } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddImportantNoticePage = ({ initialData = {} }) => {
	const [imagePreview, setImagePreview] = useState(initialData.image || null);
	const [title, setTitle] = useState(initialData.title || "");
	const [imageURL, setImageURL] = useState(initialData.imageURL || "");
	const [image, setImage] = useState(null);
	const [errors, setErrors] = useState({});
	const [description, setDescription] = useState(initialData.description || "");

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!title.trim()) {
			newErrors.title = "Title is required.";
		}

		if (!image && !imagePreview) {
			newErrors.image = "Image is required.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		const formData = {
			title,
			description,
			imageURL: imageURL || imagePreview,
		};

		console.log("Form Data:", formData);

		alert("Form submitted successfully!");
	};

	const handleReset = () => {
		setTitle("");
		setDescription("");
		setImageURL("");
		setImage(null);
		setImagePreview(null);
		setErrors({});
	};

	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">Important Notice</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<form onSubmit={handleSubmit}>
						{/* Title Input */}
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
								name="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Enter Title"
								required
								className={`w-full border ${
									errors.title ? "border-red-500" : "border-gray-300"
								} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
							/>
							{errors.title && (
								<p className="text-red-500 text-sm mt-1">{errors.title}</p>
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
								name="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Enter Description"
								className="w-full border border-gray-300 rounded-md p-2"
							/>
						</div>
						{/* Image Upload */}
						<div className="mt-4 w-full">
							<label
								className="block text-[1rem] font-semibold mb-2"
								htmlFor="file-upload"
							>
								Choose Image
							</label>
							<FormInput
								type="file"
								id="file-upload"
								name="file-upload"
								accept="image/*"
								onChange={handleImageChange}
								className={`block w-full text-sm text-gray-500 border ${
									errors.image ? "border-red-500" : "border-gray-300"
								} rounded-md cursor-pointer p-2 focus:outline-none focus:ring focus:ring-blue-200`}
							/>
							{errors.image && (
								<p className="text-red-500 text-sm mt-1">{errors.image}</p>
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
					onClick={handleReset}
				>
					Reset
				</button>
				<button
					type="submit"
					className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
					onClick={handleSubmit}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddImportantNoticePage;
