import { useEffect, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import toast from "react-hot-toast";
import {
	useGetRegistrationPropertyByIdQuery,
	useUpdateRegistrationPropertyMutation,
} from "../../../redux/slices/registrationPropertySlice";
import { useParams } from "react-router-dom";

const EditRegistrationProperty = () => {
	const { id } = useParams();
	const {
		data: propertyData,
		isLoading: isLoadingProperty,
		refetch,
	} = useGetRegistrationPropertyByIdQuery(id);

	const [updateRegistrationProperty, { isLoading, isError }] =
		useUpdateRegistrationPropertyMutation();

	const methods = useForm({
		mode: "onBlur",
		defaultValues: useMemo(() => {
			return propertyData?.doc || {};
		}, [propertyData?.doc]),
	});

	useEffect(() => {
		if (propertyData?.doc) {
			methods.reset(propertyData.doc); // Reset form with existing data
		}
	}, [propertyData, methods]);

	// Handle form submit
	const handleFormSubmit = async (data) => {
		try {
			const formData = {
				id,
				name: data.name,
				phone: data.phone,
				email: data.email,
				country: data.country,
				requirement: data.requirement,
				phase: data.phase,
				size: data.size,
				budget: data.budget,
				remarks: data.remarks,
			};

			await updateRegistrationProperty(formData).unwrap();
			toast.success("Property updated successfully!");
			refetch();
			methods.reset(); // Reset form after successful submission
		} catch (error) {
			toast.error("Failed to update the property. Please try again.");
		}
	};

	return (
		<FormProvider {...methods}>
			<div className=" bg-white p-8 rounded-md shadow-md">
				<h2 className="text-2xl font-bold mb-6">Update Property</h2>
				<form onSubmit={methods.handleSubmit(handleFormSubmit)}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<InputField
							label="Name"
							name="name"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Name is required"
						/>
						<InputField
							label="Phone"
							name="phone"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Phone is required"
							pattern={{
								value: /^[0-9]{10}$/, // Example regex for phone number validation
								message: "Phone number must be 10 digits",
							}}
						/>
						<InputField
							label="Email"
							name="email"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Email is required"
							pattern={{
								value: /^\S+@\S+$/i,
								message: "Email format is invalid",
							}}
						/>
						<InputField
							label="Country"
							name="country"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Country is required"
						/>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Requirement
							</label>
							<select
								{...methods.register("requirement", {
									required: "Requirement is required",
								})}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
							>
								<option value="">Select Requirement</option>
								<option value="residential">Residential</option>
								<option value="commercial">Commercial</option>
								<option value="shop">Shop</option>
								<option value="apartment">Apartment</option>
								<option value="house">House</option>
							</select>
							{methods.formState.errors.requirement && (
								<p className="text-red-500 text-sm">
									{methods.formState.errors.requirement.message}
								</p>
							)}
						</div>
						<InputField
							label="Phase"
							name="phase"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Phase is required"
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
							label="Budget Price"
							name="budget"
							register={methods.register}
							required
							errors={methods.formState.errors}
							errorMessage="Budget Price is required"
							type="number" // Adding type number for better UX
						/>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Remarks
							</label>
							<textarea
								{...methods.register("remarks")}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
							/>
						</div>
					</div>
					<div className="flex justify-end items-center">
						<button
							type="submit"
							className=" px-4 py-2 bg-primary-500 text-white rounded-md"
							disabled={isLoading}
						>
							{isLoading ? "Updating..." : "Update Property"}
						</button>
					</div>

					{isError && (
						<p className="text-red-500 text-sm mt-2">
							Something went wrong, please try again.
						</p>
					)}
				</form>
			</div>
		</FormProvider>
	);
};

export default EditRegistrationProperty;
