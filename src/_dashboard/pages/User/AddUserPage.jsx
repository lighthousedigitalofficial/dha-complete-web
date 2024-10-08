import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import toast from "react-hot-toast";
import { useCreateUserMutation } from "../../../redux/slices/usersApiSlice";

const AddUserPage = () => {
	const methods = useForm();
	const [createUser, { isLoading, isError }] = useCreateUserMutation(); // CreateUser mutation hook

	const handleFormSubmit = async (data) => {
		try {
			// Call the mutation to create a user
			const response = await createUser(data).unwrap();
			console.log("User created successfully:", response); // Log successful response
			toast.success("User created successfully!");
			methods.reset(); // Reset the form after successful submission
		} catch (error) {
			console.error("Failed to create user:", error);
			toast.error("Failed to create the user. Please try again.");
		}
	};
	return (
		<FormProvider {...methods}>
			<div className="w-[90%] mx-auto bg-white p-8 mt-6 rounded-md shadow-md">
				<h2 className="text-2xl font-bold mb-6">Add User</h2>
				<form onSubmit={methods.handleSubmit(handleFormSubmit)}>
					<div className="flex w-full gap-4">
						<div className="w-1/2">
							<InputField
								label="First Name"
								name="firstName"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="First Name is required"
							/>
						</div>
						<div className="w-1/2">
							<InputField
								label="Last Name"
								name="lastName"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Last Name is required"
							/>
						</div>

					</div>

					<InputField
						label="Email"
						name="email"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Email is required"
					/>
					<div className="w-full flex gap-4">
						<div className="w-1/2 ">
							<label className="block text-sm font-medium text-gray-700">
								Identity Type
							</label>
							<select
								{...methods.register("identityType", {
									required: "Identity Type is required",
								})}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
							>
								<option value="">Select Identity Type</option>
								<option value="CNIC">CNIC</option>
								<option value="NICOP">NICOP</option>
								<option value="POC">POC</option>
							</select>
							{methods.formState.errors.identityType && (
								<p className="text-red-500 text-sm">
									{methods.formState.errors.identityType.message}
								</p>
							)}
						</div>
						<div className="w-1/2">
							<InputField
								label="Identity Number"
								name="identityNum"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Identity Number is required"
							/>
						</div>
					</div>
					<div className="flex w-full gap-4">
						<div className="w-1/2">
							<InputField
								label="Membership Number"
								name="membershipNum"
								register={methods.register}
								required
								errors={methods.formState.errors}
								errorMessage="Membership Number is required"
							/>
						</div>
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

					</div>
					<InputField
						label="Password"
						name="password"
						type="password"
						register={methods.register}
						required
						errors={methods.formState.errors}
						errorMessage="Password is required"
					/>
					<button
						type="submit"
						className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
						disabled={isLoading}
					>
						{isLoading ? "Adding..." : "Add User"}
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

export default AddUserPage;
