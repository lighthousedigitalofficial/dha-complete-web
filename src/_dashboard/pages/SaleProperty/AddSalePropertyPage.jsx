import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../_components/shared/InputField";
import uploadImage from "../../../helpers/imageUpload";
import { useCreateSalePropertiesMutation } from "../../../redux/slices/salePropertiesSlice";

const SalePropertyForm = () => {
	const methods = useForm();
	const [uploadedImage, setUploadedImage] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [createSaleProperty, { isLoading, isError, isSuccess, error }] =
		useCreateSalePropertiesMutation();

	const handleFormSubmit = async (data) => {
		console.log("Form submitted with data:", data);
		try {
			setUploading(true);

			// Check if an image file is provided
			if (!data.image || data.image.length === 0) {
				console.error("Image is required");
				return;
			}

			console.log("Uploading image...");
			const imageUrl = await uploadImage(data.image[0], "image_uploads");
			console.log("Image uploaded successfully:", imageUrl);
			setUploading(false);

			const salePropertyData = {
				...data,
				document: imageUrl,
			};

			await createSaleProperty(salePropertyData).unwrap();
			console.log("Sale property created successfully!");
			methods.reset();
			setUploadedImage(null);
		} catch (err) {
			setUploading(false);
			console.error("Failed to create sale property: ", err);
			// Log the error with more context if needed
		}
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageURL = URL.createObjectURL(file);
			setUploadedImage(imageURL);
			methods.setValue("image", event.target.files); // Set value to the file list
			console.log("Image selected:", file.name); // Log the selected image file
		} else {
			console.error("No image file selected");
		}
	};

	return (
		<FormProvider {...methods}>
			<div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
				<h2 className="text-2xl font-bold mb-6">Add Sale Property</h2>
				<form onSubmit={methods.handleSubmit(handleFormSubmit)}>
					<InputField
						label="Name"
						name="name"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Name is required"
					/>
					<InputField
						label="CNIC"
						name="cnic"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="CNIC is required"
					/>
					<InputField
						label="Phone"
						name="phone"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Phone is required"
					/>
					<InputField
						label="Email"
						name="email"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Email is required"
					/>
					<InputField
						label="Plot Number"
						name="plotNum"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Plot Number is required"
					/>
					<InputField
						label="Street Number"
						name="streetNum"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Street Number is required"
					/>
					<InputField
						label="Sector"
						name="sector"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Sector is required"
					/>
					<InputField
						label="Size"
						name="size"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Size is required"
					/>
					<InputField
						label="Phase"
						name="phase"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Phase is required"
					/>
					<InputField
						label="Demand"
						name="demand"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Demand is required"
					/>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Type
						</label>
						<select
							{...methods.register("type", { required: "Type is required" })}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						>
							<option value="">Select Type</option>
							<option value="residential">Residential</option>
							<option value="commercial">Commercial</option>
							<option value="shop">Shop</option>
							<option value="apartment">Apartment</option>
						</select>
						{methods.formState.errors.type && (
							<p className="text-red-500 text-sm">
								{methods.formState.errors.type.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Upload Image
						</label>
						<input
							type="file"
							accept="image/*"
							{...methods.register("image", {
								required: "Image file is required",
							})}
							onChange={handleImageChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						/>
						{methods.formState.errors.image && (
							<p className="text-red-500 text-sm">
								{methods.formState.errors.image.message}
							</p>
						)}
					</div>

					{/* Image preview section */}
					{uploadedImage && (
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Image Preview
							</label>
							<img src={uploadedImage} alt="Uploaded" className="w-full" />
						</div>
					)}

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Status
						</label>
						<select
							{...methods.register("status", {
								required: "Status is required",
							})}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						>
							<option value="">Select Status</option>
							<option value="available">Available</option>
							<option value="sold">Sold</option>
							<option value="pending">Pending</option>
						</select>
						{methods.formState.errors.status && (
							<p className="text-red-500 text-sm">
								{methods.formState.errors.status.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
						disabled={uploading || isLoading}
					>
						{uploading || isLoading ? "Uploading..." : "Add Sale Property"}
					</button>

					{isError && (
						<p className="text-red-500 text-sm mt-2">
							Failed to add sale property: {error.message}
						</p>
					)}
					{isSuccess && (
						<p className="text-green-500 text-sm mt-2">
							Sale property added successfully!
						</p>
					)}
				</form>
			</div>
		</FormProvider>
	);
};

SalePropertyForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default SalePropertyForm;
