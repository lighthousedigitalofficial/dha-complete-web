import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useCreateGuideMutation } from "../../../redux/slices/guidesSlice";
import toast from "react-hot-toast";

const AddPortalPage = () => {
	const methods = useForm();
	const [createPortal, { isLoading, isError }] = useCreateGuideMutation();

	const handleFormSubmit = async (data) => {
		try {
			// Call the mutation to create a portal
			await createPortal(data).unwrap();
			toast.success("Portal added successfully!");
			methods.reset(); // Reset the form after successful submission
		} catch (error) {
			toast.error("Failed to add the portal. Please try again.");
		}
	};

	return (
		<FormProvider {...methods}>
			<div className="w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
				<h2 className="text-2xl font-bold mb-6">Add Portal</h2>
				<form onSubmit={methods.handleSubmit(handleFormSubmit)}>
					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<InputField
								label="Title"
								name="title"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Title is required"
							/>
						</div>
						<div className="w-1/2">
							<InputField
								label="Author"
								name="author"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Author is required"
							/>
						</div>
					</div>

					<InputField
						label="Content"
						name="content"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Content is required"
					/>
					<div className="w-full flex gap-4">
						<div className="w-1/2">
							<InputField
								label="Video URL"
								name="video"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Video URL is required"
							/>
						</div>
						<div className="w-1/2">
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
									<option value="Inactive">Inactive</option>
									<option value="active">Active</option>
								</select>
								{methods.formState.errors.status && (
									<p className="text-red-500 text-sm">
										{methods.formState.errors.status.message}
									</p>
								)}
							</div>
						</div>
					</div>
					<button
						type="submit"
						className=" px-4 py-2 bg-primary-500 text-white rounded-md"
						disabled={isLoading}
					>
						{isLoading ? "Adding..." : "Add Portal"}
					</button>
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

export default AddPortalPage;
