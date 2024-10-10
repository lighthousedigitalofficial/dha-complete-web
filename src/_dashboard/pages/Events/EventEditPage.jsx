import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import uploadimage from "../../../helpers/imageUpload";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import {
  useGetEventQuery,
  useUpdateEventMutation,
} from "../../../redux/slices/event";
import Loader from "../../../components/shared/Loader";

const EventEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch event data by ID
  const {
    data: eventData,
    isLoading: isLoadingEvent,
    refetch,
  } = useGetEventQuery(id);

  const [updateEvent, { isLoading: isUpdating, isError }] =
    useUpdateEventMutation();

  const [uploading, setUploading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Initialize the form with react-hook-form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: useMemo(() => {
      return eventData?.doc || {}; // Use event data as default values
    }, [eventData?.doc]),
  });

  // Reset form when event data is fetched
  useEffect(() => {
    if (eventData?.doc) {
      methods.reset(eventData?.doc);

      // Set initial previews and uploaded images
      const initialPreviews = eventData?.doc?.images.map((file) => file) || [];
      setImagePreviews(initialPreviews);
      setUploadedImages(eventData?.doc?.images || []);
    }
  }, [eventData, methods]);

  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setUploading(true);

      // Upload images to Cloudinary
      const imageUrls = await Promise.all(
        uploadedImages.map((image) => uploadimage(image, "image_uploads"))
      );

      setUploading(false);

      // Prepare event data for update
      const updatedEventData = {
        id,
        title: data.title,
        images: imageUrls, // Update only if new images are uploaded
        description: data.description,
      };

      console.log("Updated Event Data:", updatedEventData); // Log the updated event data

      // Call the mutation to update the event
      const result = await updateEvent(updatedEventData).unwrap();
      console.log("Update Result:", result); // Log the result from the mutation

      toast.success("Event updated successfully!");
      refetch(); // Refetch event data
      methods.reset(); // Reset form
      setImagePreviews([]);
      setUploadedImages([]);

      // Navigate to the events list or another page after success
      navigate("/events/list"); // Adjust the path as needed
    } catch (error) {
      setUploading(false);
      console.error("Update error:", error); // Log the error
      toast.error("Failed to update the event. Please try again.");
    }
  };

  // Handle image preview and upload state
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    console.log(newPreviews);

    // Reset previews and uploaded images before adding new ones

    // Update previews and uploaded images correctly
    setImagePreviews((prev) => [...prev, ...newPreviews]); // Concatenate new previews
    setUploadedImages((prev) => [...prev, ...files]); // Concatenate new uploaded images
  };

  // Handle removal of an image
  const handleImageRemove = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return isLoadingEvent ? (
    <Loader />
  ) : eventData && eventData?.doc ? (
    <FormProvider {...methods}>
      <div className="max-w mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Edit Event</h2>

        {/* Form */}
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputField
            label="Title"
            name="title"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Title is required"
          />

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...methods.register("description", {
                required: "Description is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              rows="4"
            />
            {methods.formState.errors.description && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.description.message}
              </p>
            )}
          </div>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-2 border border-primary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          {/* Image Preview Section */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {imagePreviews?.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    className="object-cover w-full h-32 rounded-md"
                    src={preview}
                    alt={`Preview ${index}`}
                  />
                  <button
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    &#10005;
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
            disabled={isUpdating || uploading}
          >
            {isUpdating || uploading ? "Updating..." : "Update Event"}
          </button>

          {/* Error Handling */}
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong, please try again.
            </p>
          )}
        </form>
      </div>
    </FormProvider>
  ) : (
    <p>No Event data found!</p>
  );
};

export default EventEditPage;
