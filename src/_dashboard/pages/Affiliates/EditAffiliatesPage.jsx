import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  useGetAffiliatesQuery,
  useUpdateAffiliateMutation,
} from "../../../redux/slices/affiliates";

const EditAffiliatesPage = () => {
  const { id } = useParams(); // Get the affiliate ID from the URL
  const navigate = useNavigate();

  // Fetch affiliate data using the ID from URL
  const { data: affiliateData, isLoading } = useGetAffiliatesQuery(id);
  const [updateAffiliate, { isLoading: isUpdating }] =
    useUpdateAffiliateMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      status: "active",
    },
  });

  // Set form values when affiliateData is fetched
  useEffect(() => {
    if (affiliateData && affiliateData.doc.length > 0) {
      const affiliate = affiliateData.doc[0];
      reset({
        name: affiliate.name || "",
        status: affiliate.status || "active",
      });
    }
  }, [affiliateData, reset]);

  const onSubmit = async (data) => {
    try {
      await updateAffiliate({ id, ...data }).unwrap(); // Execute update mutation with affiliate data

      // Show success message using toast
      toast.success("Affiliate updated successfully!");

      // Redirect after a short delay to show the success message
      setTimeout(() => {
        navigate("/affiliates/list"); // Redirect to the affiliates list page
      }, 1500); // 1.5 second delay before redirecting
    } catch (error) {
      console.error("Error updating affiliate:", error);
      toast.error("Error updating affiliate. Please try again.");
    }
  };

  const handleReset = () => {
    reset(); // Reset form fields to initial values
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Edit Affiliate</h2>

      {isLoading || isUpdating ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Affiliate name is required.",
                })}
                placeholder="Enter Affiliate Name"
                className={`block w-full border border-gray-300 p-2 rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Status Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                id="status"
                {...register("status")}
                className="block w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-2">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500"
              >
                {isUpdating ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditAffiliatesPage;
