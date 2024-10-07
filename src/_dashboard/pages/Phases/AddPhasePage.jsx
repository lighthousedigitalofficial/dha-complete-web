import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { createPhase } from "../../redux/slices/phaseSlice";
import uploadVideo from "../../../helpers/videoUpload";
import uploadImage from "../../../helpers/imageUpload";
import InputField from "../../_components/shared/InputField";
import { useCreatePhasesMutation } from "../../../redux/slices/phasesSlice";

const AddPhasePage = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const methods = useForm(); // Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  // Helper function to handle images upload
  const handleImagesUpload = async (files) => {
    const uploaded = await uploadImage(files);
    setUploadedImages(uploaded);
  };

  // Helper function to handle videos upload
  const handleVideosUpload = async (files) => {
    const uploaded = await uploadVideo(files);
    setUploadedVideos(uploaded);
  };

  // Form submission logic
  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        mainImage: uploadedImages.length ? uploadedImages[0] : null, // Main image
        images: uploadedImages, // Additional images
        videos: uploadedVideos, // Videos
      };

      dispatch(useCreatePhasesMutation(formData));
      alert("Phase successfully created!");
      reset(); // Reset form after submission

      setUploadedImages([]);
      setUploadedVideos([]);
      setImagePreview(null);
    } catch (error) {
      console.error("Error creating phase:", error);
    }
  };

  // Handle image preview for the main image
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      handleImagesUpload([file]);
    }
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Create New Phase</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="mb-4">
          <InputField
            label="Title"
            type="text"
            name="title"
            register={register}
            required
            errors={errors}
            placeholder="Enter Phase Title"
          />
        </div>

        {/* Status Field */}
        <div className="mb-4">
          <label>Status</label>
          <select
            {...register("status", { required: true })}
            className="block w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && <p className="text-red-600">Status is required</p>}
        </div>

        {/* Link Field */}
        <div className="mb-4">
          <InputField
            label="Link"
            type="text"
            name="link"
            register={register}
            required
            errors={errors}
            placeholder="Enter Link"
          />
        </div>

        {/* Location Field */}
        <div className="mb-4">
          <InputField
            label="Location"
            type="text"
            name="location"
            register={register}
            required
            errors={errors}
            placeholder="Enter Location"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label>Description</label>
          <textarea
            {...register("description", { required: true })}
            className="block w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter Phase Description"
          />
          {errors.description && (
            <p className="text-red-600">Description is required</p>
          )}
        </div>

        {/* Main Image Upload */}
        <div className="mb-4">
          <label>Main Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="block w-full border border-gray-300 p-2 rounded-md"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-40 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Additional Images Upload */}
        <div className="mb-4">
          <label>Additional Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImagesUpload(e.target.files)}
            className="block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Videos Upload */}
        <div className="mb-4">
          <label>Videos</label>
          <input
            type="file"
            multiple
            accept="video/*"
            onChange={(e) => handleVideosUpload(e.target.files)}
            className="block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-center gap-4 mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-700 hover:bg-primary-500 text-white rounded-md"
          >
            Add Phase
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPhasePage;
