import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";

import toast from "react-hot-toast";
import { useCreateRegistrationPropertyMutation } from "../../../redux/slices/registrationPropertySlice";

const RegistrationPropertyPage = () => {
  const methods = useForm();
  const [createRegistrationProperty, { isLoading, isError }] =
    useCreateRegistrationPropertyMutation();

  // Handle form submit
  const handleFormSubmit = async (data) => {
    try {
      // Call the mutation to create a registration property
      await createRegistrationProperty(data).unwrap();
      toast.success("Property registered successfully!");
      methods.reset(); // Reset the form after successful submission
    } catch (error) {
      toast.error("Failed to register the property. Please try again.");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register Property</h2>
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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register Property"}
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

export default RegistrationPropertyPage;
