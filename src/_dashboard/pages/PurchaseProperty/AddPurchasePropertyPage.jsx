import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useCreatePurchasePropertyMutation } from "../../../redux/slices/purchaseProperties";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PurchasePropertyForm = () => {
	const methods = useForm();
	const [createPurchaseProperty, { isLoading, error }] =
		useCreatePurchasePropertyMutation();

	const navigate = useNavigate();

	const handleFormSubmit = async (data) => {
		try {
			// Call the createPurchaseProperties mutation with form data
			await createPurchaseProperty(data).unwrap();
			toast.success("Property registered successfully");

			navigate("/purchase-property/list");

			// Optionally reset the form
			methods.reset();
		} catch (err) {
			console.error("Failed to register property:", err);
			toast.error(error.data.message || "Failed to register property:");
		}
	};

	return (
		<FormProvider {...methods}>
			<div className="w-xl mx-auto bg-white p-8 rounded-md shadow-md">
				<h2 className="text-2xl font-bold mb-6">Purchase Property</h2>

				<form onSubmit={methods.handleSubmit(handleFormSubmit)}>
					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<InputField
								label="Name"
								name="name"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Name is required"
							/>
						</div>
						<div className="w-1/2">
							<InputField
								label="CNIC"
								name="cnic"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="CNIC is required"
							/>
						</div>
					</div>

					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<InputField
								label="Phone"
								name="phone"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Phone is required"
							/>
						</div>
						<div className="w-1/2">
							<InputField
								label="Email"
								name="email"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Email is required"
							/>
						</div>
					</div>
					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700">
									Type
								</label>
								<select
									{...methods.register("type", {
										required: "Type is required",
									})}
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
						</div>
						<div className="w-1/2">
							<InputField
								label="Phase"
								name="phase"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Phase is required"
							/>
						</div>
					</div>
					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<InputField
								label="Size"
								name="size"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Size is required"
							/>
						</div>
						<div className="w-1/2">
							<InputField
								label="Price"
								name="price"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Price is required"
							/>
						</div>
					</div>
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
							<option value="sold">Pending</option>
						</select>
						{methods.formState.errors.status && (
							<p className="text-red-500 text-sm">
								{methods.formState.errors.status.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="px-4 py-2 bg-green-500 text-white rounded-md"
						disabled={isLoading}
					>
						{isLoading ? "Registering..." : "Purchase Property"}
					</button>
				</form>
			</div>
		</FormProvider>
	);
};
export default PurchasePropertyForm;
