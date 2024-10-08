import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useState } from "react";
import uploadimage from "../../../helpers/imageUpload";
import toast from "react-hot-toast";
import { useCreateEventMutation } from "../../../redux/slices/event";

const AddEventPage = () => {
  const methods = useForm();
  const [createEvent, { isLoading }] = useCreateEventMutation(); // Use createEvent mutation from RTK Query

  const [uploading, setUploading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]); // State for multiple image previews
  const [uploadedImages, setUploadedImages] = useState([]); // State to keep track of uploaded images

  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setUploading(true);

      // Upload all images to Cloudinary
      const imageUrls = await Promise.all(
        uploadedImages.map((image) => uploadimage(image, "image_uploads"))
      );

      setUploading(false);

      // Prepare event data with the uploaded image URLs
      const eventData = {
        title: data.title,
        images: imageUrls, // store uploaded images in images array
        description: data.description,
      };

      // Call the mutation to create an event
      await createEvent(eventData).unwrap();
      toast.success("Event created successfully!");
      methods.reset(); // Reset form after submission
      setImagePreviews([]); // Clear image previews
      setUploadedImages([]); // Clear uploaded images
    } catch (error) {
      setUploading(false);
      console.error("Error creating event:", error);
      toast.error("Failed to create the event. Please try again.");
    }
  };

  // Handle image preview and upload state
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setImagePreviews((prev) => [...prev, ...newPreviews]); // Update previews
    setUploadedImages((prev) => [...prev, ...files]); // Update uploaded images
  };

  // Handle removal of an image
  const handleImageRemove = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Event</h2>
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
              multiple // Allow multiple files
              onChange={handleImageChange} // Handle image change to show preview
              className="mt-1 block w-full px-3 py-2 border border-primary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          {/* Image Preview Section */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {imagePreviews.map((preview, index) => (
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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
            disabled={uploading || isLoading}
          >
            {uploading || isLoading ? "Uploading..." : "Create Event"}
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddEventPage;
