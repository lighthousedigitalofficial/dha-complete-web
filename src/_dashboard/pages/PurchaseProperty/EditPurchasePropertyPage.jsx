import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import InputField from "../../_components/shared/InputField";
import {
  useGetPurchasePropertyByIdQuery,
  useUpdatePurchasePropertyMutation,
} from "../../../redux/slices/purchaseProperties";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPurchasePropertyForm = ({ onSuccess }) => {
  const { id } = useParams(); // Get the ID from the URL
  const methods = useForm();
  const { data: propertyData, error: fetchError } =
    useGetPurchasePropertyByIdQuery(id);
  const [updateProperty, { isLoading: isUpdating, error: updateError }] =
    useUpdatePurchasePropertyMutation();

  // Pre-fill the form with fetched data
  useEffect(() => {
    if (propertyData && propertyData.status === "success") {
      console.log("Fetched property data:", propertyData.doc);
      methods.reset(propertyData.doc); // Reset the form with the doc data
    } else if (fetchError) {
      console.error("Failed to fetch property data:", fetchError);
      toast.error("Failed to fetch property data");
    }
  }, [propertyData, fetchError, methods]);

  const onSubmit = async (data) => {
    try {
      // Log the data being submitted
      console.log("Submitting update with data:", data);

      // Directly use the id from the URL, no need to include it in the data object
      const response = await updateProperty({
        id, // Use the id from the URL directly
        ...data, // Spread the rest of the form data
      }).unwrap();

      console.log("Update response:", response);
      toast.success("Property updated successfully");
      if (onSuccess) onSuccess(); // Optionally call the onSuccess callback
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update property");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Edit Purchase Property</h2>

        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputField
            label="Name"
            name="name"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <InputField
            label="CNIC"
            name="cnic"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <InputField
            label="Phone"
            name="phone"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <InputField
            label="Email"
            name="email"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              {...methods.register("type")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              readOnly // Set field as read-only
            />
          </div>
          <InputField
            label="Phase"
            name="phase"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <InputField
            label="Size"
            name="size"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <InputField
            label="Price"
            name="price"
            register={methods.register}
            errors={methods.formState.errors}
            readOnly // Set field as read-only
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              {...methods.register("status")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              readOnly // Set field as read-only
            />
          </div>
          {/* Add a submit button */}
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md"
            disabled={isUpdating} // Disable button during loading
          >
            {isUpdating ? "Updating..." : "Update Property"}
          </button>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer to display toasts */}
    </FormProvider>
  );
};

EditPurchasePropertyForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default EditPurchasePropertyForm;
