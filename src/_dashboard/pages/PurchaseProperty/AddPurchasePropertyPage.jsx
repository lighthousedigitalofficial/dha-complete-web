import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../_components/shared/InputField";
import { useCreatePurchasePropertyMutation } from "../../../redux/slices/purchaseProperties";

const PurchasePropertyForm = ({ onSuccess }) => {
  const methods = useForm();
  const [createPurchaseProperties, { isLoading, isError, error }] =
    useCreatePurchasePropertyMutation();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (data) => {
    try {
      // Clear previous messages
      setSuccessMessage("");
      setErrorMessage("");

      // Log form data
      console.log("Submitting form data:", data);

      // Call the createPurchaseProperties mutation with form data
      const result = await createPurchaseProperties(data).unwrap();
      console.log("Property registered successfully:", result);

      // Trigger the onSuccess callback if provided
      if (onSuccess) {
        console.log("Triggering onSuccess callback with result:", result);
        onSuccess(result);
      }

      // Show success message
      setSuccessMessage("Property registered successfully!");
      console.log("Success message set:", "Property registered successfully!");

      // Optionally reset the form
      methods.reset();
      console.log("Form reset successfully.");
    } catch (err) {
      console.error("Failed to register property:", err);

      // Show error message
      const message =
        err?.data?.message || "Failed to register property. Please try again.";
      setErrorMessage(message);
      console.error("Error message set:", message);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Purchase Property</h2>

        {/* Display success or error alerts */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {errorMessage}
          </div>
        )}

        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
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
            label="Price"
            name="price"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Price is required"
          />
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

          {/* Error handling */}
          {isError && (
            <p className="text-red-500 text-sm">
              Error: {error?.data?.message || "Something went wrong"}
            </p>
          )}
        </form>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register Property"}
          </button>
        </div>
      </div>
    </FormProvider>
  );
};

PurchasePropertyForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default PurchasePropertyForm;
