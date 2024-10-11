import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useCreateMediaMutation } from "../../../redux/slices/mediaApiSlice";
import { useGetBannersQuery } from "../../../redux/slices/bannerSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddMediaPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [createMedia] = useCreateMediaMutation();
  const { data: banners, isLoading: bannersLoading } = useGetBannersQuery();
  const [mediaBanner, setMediaBanner] = useState("");

  const onSubmit = async (data) => {
    try {
      // Ensure mediaBanner is included in the data
      const payload = { 
        bannerId: mediaBanner, 
        title: data.title, 
        description: data.description 
      };

      // Log the request payload
      console.log("Request Payload:", payload);

      await createMedia(payload).unwrap();
      toast.success("Media created successfully");
      reset();
      setMediaBanner("");

      // Navigate to media/list after successful submission
      navigate("/media/list"); // Update this route if needed
    } catch (error) {
      console.error("Failed to create media:", error);
    }
  };

  const handleMediaChange = (event) => {
    setMediaBanner(event.target.value);
  };

  const handleReset = () => {
    reset();
    setMediaBanner("");
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Upload Media</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
        <div>
          {/* Title Input */}
          <InputField
            label="Title"
            name="title"
            register={register}
            required={true}
            errors={errors}
            errorMessage="Title is required."
          />

          {/* Description Input */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-[1rem] font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: "Description is required." })}
              rows="5"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Media Banner Dropdown */}
          <div className="mt-4 w-full">
            <label
              htmlFor="media-select"
              className="block text-[1rem] font-semibold mb-2"
            >
              Media Banner
            </label>
            <select
              id="media-select"
              {...register("mediaBanner", { required: "Media Banner is required." })}
              value={mediaBanner}
              onChange={handleMediaChange}
              className={`block w-full text-sm text-gray-500 border rounded-md cursor-pointer p-2 focus:outline-none focus:ring-2 ${
                errors.mediaBanner ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Select a Media Banner</option>
              {bannersLoading ? (
                <option>Loading...</option>
              ) : (
                Array.isArray(banners?.doc) && banners.doc.map((banner) => (
                  <option key={banner._id} value={banner._id}>
                    {banner.title}
                  </option>
                ))
              )}
            </select>
            {errors.mediaBanner && (
              <p className="text-red-500 text-sm mt-1">{errors.mediaBanner.message}</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 gap-2 col-span-2">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 transition duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMediaPage;
