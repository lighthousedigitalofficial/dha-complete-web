import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddBannerPage = ({ initialData = {} }) => {
  const [imagePreview, setImagePreview] = useState(
    initialData.mediaUrl || null
  );
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [mediaUrl, setMediaUrl] = useState(initialData.mediaUrl || "");
  const [type, setType] = useState(initialData.type || "image");
  const [status, setStatus] = useState(initialData.status || "active");
  const [media, setMedia] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType !== type) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          media: `Please upload a valid ${type} file.`,
        }));
        setMedia(null);
        return;
      }
      setMedia(file);
      setImagePreview(URL.createObjectURL(file)); // Show media preview
      setErrors((prevErrors) => ({ ...prevErrors, media: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!media && !imagePreview) {
      newErrors.media = "Please upload an image or video.";
    } else if (media && media.type.split("/")[0] !== type) {
      newErrors.media = `Please upload a valid ${type} file.`;
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = {
      title,
      description,
      mediaUrl: mediaUrl || imagePreview,
      type,
      status,
    };

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");

    handleReset();
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setMediaUrl("");
    setImagePreview(null);
    setType("image");
    setStatus("active");
    setMedia(null);
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Add Banners</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <FormInput
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                required
              />
              {errors.title && <p className="text-red-600">{errors.title}</p>}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Status: Active or Inactive */}
            <div className="mb-4 mt-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Type: Image or Video */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="type"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setImagePreview(null); // Reset preview when type changes
                }}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>

            {/* Media File Upload */}
            <div className="mt-4 w-full">
              <label
                className="block text-[1rem] font-medium mb-2"
                htmlFor="media-upload"
              >
                Choose {type === "image" ? "Image" : "Video"}
              </label>
              <FormInput
                type="file"
                id="media-upload"
                name="media-upload"
                accept={type === "image" ? "image/*" : "video/*"}
                onChange={handleMediaChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer p-2"
              />
              {errors.media && <p className="text-red-600">{errors.media}</p>}
            </div>
          </form>
        </div>

        {/* Media Preview Section */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-300 rounded-md w-64 h-64 flex items-center justify-center">
            {imagePreview ? (
              type === "image" ? (
                <img
                  src={imagePreview}
                  alt="Media Preview"
                  className="object-cover h-full w-full rounded-md"
                />
              ) : (
                <video
                  src={imagePreview}
                  controls
                  className="object-cover h-full w-full rounded-md"
                />
              )
            ) : (
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                className="h-64 w-full object-cover"
                alt="Placeholder"
              />
            )}
          </div>
        </div>
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
          onClick={handleSubmit}
          type="submit"
          className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBannerPage;
