import React, { useState, useRef } from "react";

import { FaTrash } from "react-icons/fa"; // React Icon for remove button
import { CiCircleRemove } from "react-icons/ci";
import FormInput from "../../_components/Form/FormInput/FormInput.jsx";
import { useDispatch } from "react-redux";
import { phaseSlice } from "../../../redux/slices/phasesSlice.js";

const AddPhasesPage = ({ initialData = {} }) => {
	const [imagePreview, setImagePreview] = useState(
		initialData.mainImage || null
	);
	const [title, setTitle] = useState(initialData.title || "");
	const [description, setDescription] = useState(initialData.description || "");
	const [mainImage, setMainImage] = useState(initialData.mainImage || "");
	const [images, setImages] = useState(initialData.images || []);
	const [videos, setVideos] = useState(initialData.videos || []);
	const [image, setImage] = useState(null);
	const [selectedServices, setSelectedServices] = useState(
		initialData.services || []
	);
	const [link, setLink] = useState(initialData.link || "");
	const [location, setLocation] = useState(initialData.location || "");
	const [status, setStatus] = useState(initialData.status || "active");
	const [type, setType] = useState(initialData.type || "Phase I");
	const [services, setServices] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			title,
			description,
			mainImage,
			images,
			videos,
			services: selectedServices,
			link,
			location,
			status,
			type,
		};

		console.log("Phases Data:", formData);
		alert("Facilities form submitted!");
	};

	const handleAddImages = (e) => {
		const files = Array.from(e.target.files);
		const newImages = files.map((file) => URL.createObjectURL(file));
		setImages((prevImages) => [...prevImages, ...newImages]);
	};

	const handleAddVideos = (e) => {
		const files = Array.from(e.target.files);
		const newVideos = files.map((file) => URL.createObjectURL(file));
		setVideos((prevVideos) => [...prevVideos, ...newVideos]);
	};

	const handleReset = () => {
		setTitle("");
		setLocation("");

		setImage(null);
		setImagePreview(null);
		setImages([]);
		setVideos([]);
		setSelectedServices([]);
		setDescription("");
		setLink("");
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const removeImage = (index) => {
		setImages(images.filter((_, i) => i !== index));
	};

	const removeVideo = (index) => {
		setVideos(videos.filter((_, i) => i !== index));
	};

	const handleAddService = () => {
		if (inputValue.trim() !== "" && !services.includes(inputValue.trim())) {
			setServices((prevServices) => [...prevServices, inputValue.trim()]);
			setInputValue("");
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}
	};

	const handleRemoveService = (service) => {
		setServices((prevServices) => prevServices.filter((s) => s !== service));
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleAddService();

			goToNextStep();
		}
	};

	const goToNextStep = () => {
		console.log("Navigating to the next step...");
	};
	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">DHA </h2>

			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter Title"
							required
						/>
					</div>
					{/* Status Field */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">
							Status
						</label>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							className="block w-full border border-gray-300 p-2 rounded-md"
						>
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
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
							type="text"
							id="link"
							name="link"
							value={link}
							onChange={(e) => setLink(e.target.value)}
							placeholder="Enter Link"
							required
						/>
					</div>
					{/* Location Field */}
					<div className="mb-4">
						<label
							className="block text-[1rem] font-semibold mb-2"
							htmlFor="location"
						>
							Location
						</label>
						<FormInput
							type="text"
							id="location"
							name="location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							placeholder="Enter Location"
							required
						/>
					</div>

					{/* Description Field */}
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
							className="block w-full border border-gray-300 p-2 rounded-md"
							required
						/>
					</div>
					{/* Type Field */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">Type</label>
						<select
							value={type}
							onChange={(e) => setType(e.target.value)}
							className="block w-full border border-gray-300 p-2 rounded-md"
						>
							<option value="Phase I">Phase I</option>
							<option value="Phase II">Phase II</option>
							<option value="Phase II">Phase III</option>
							<option value="Phase II">Phase IV</option>
							<option value="Phase II">Phase V</option>
							<option value="Phase II">Phase VI</option>
						</select>
					</div>
					{/* Services Checkbox */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">
							Services
						</label>
						<div className="flex flex-wrap mb-2">
							{services.map((service, index) => (
								<span
									key={index}
									className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 flex items-center"
								>
									{service}
									<button
										type="button"
										onClick={() => handleRemoveService(service)}
										className="ml-1 text-red-600"
									>
										<CiCircleRemove className="text-sm" />
									</button>
								</span>
							))}
							<input
								type="text"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyDown={handleKeyDown}
								ref={inputRef}
								placeholder="Add service..."
								className="border border-gray-300 rounded-md px-2 py-1"
							/>
						</div>
					</div>
					{/* Main Image Upload */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">
							Main Image
						</label>
						<div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
							<input
								type="file"
								accept="image/*"
								className="absolute inset-0 opacity-0 cursor-pointer"
								onChange={handleImageChange}
							/>
							<div className="text-center">
								<div className="text-gray-500 text-3xl">+</div>
								<p className="text-gray-500">Add Main Image</p>
							</div>
						</div>
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

					{/* Image Upload Field */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">
							Upload Images
						</label>
						<div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
							<input
								type="file"
								multiple
								accept="image/*"
								className="absolute inset-0 opacity-0 cursor-pointer"
								onChange={handleAddImages}
							/>
							<div className="text-center">
								<div className="text-gray-500 text-3xl">+</div>
								<p className="text-gray-500">Add Images</p>
							</div>
						</div>

						{/* Preview the selected images */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
							{images.map((image, index) => (
								<div
									key={index}
									className="relative border rounded-md h-40 overflow-hidden"
								>
									<img
										src={image}
										alt={`Preview ${index}`}
										className="object-cover w-full h-full"
									/>
									{/* Remove Icon */}
									<button
										onClick={() => removeImage(index)}
										className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
									>
										<FaTrash />
									</button>
								</div>
							))}
						</div>
					</div>

					{/* Video Upload Field */}
					<div className="mb-4">
						<label className="block text-[1rem] font-semibold mb-2">
							Upload Videos
						</label>
						<div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
							<input
								type="file"
								multiple
								accept="video/*"
								className="absolute inset-0 opacity-0 cursor-pointer"
								onChange={handleAddVideos}
							/>
							<div className="text-center">
								<div className="text-gray-500 text-3xl">+</div>
								<p className="text-gray-500">Add Videos</p>
							</div>
						</div>

						{/* Preview the selected videos */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
							{videos.map((video, index) => (
								<div
									key={index}
									className="relative border rounded-md h-40 overflow-hidden"
								>
									<video
										src={video}
										controls
										className="object-cover w-full h-full"
									/>
									{/* Remove Icon */}
									<button
										onClick={() => removeVideo(index)}
										className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
									>
										<FaTrash />
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-end items-center gap-4 mt-6">
					<button
						type="button"
						className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
						onClick={handleReset}
					>
						Reset
					</button>
					<button
						type="submit"
						className="px-4 py-2 bg-primary-700 hover:bg-primary-500 text-white rounded-md"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPhasesPage;
