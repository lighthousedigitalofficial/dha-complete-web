import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../_components/Form/FormInput/FormInput";

const EditAssociatesWebsites = ({ initialData = {} }) => {
  const [imagePreview, setImagePreview] = useState(initialData.image || null);
  const [title, setTitle] = useState(initialData.title || "");
  const [link, setLink] = useState(initialData.link || "");
  const [status, setStatus] = useState(initialData.status || "inactive");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    const urlPattern =
      /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    if (!link.trim() || !urlPattern.test(link))
      newErrors.link = "A valid link is required.";
    if (!imagePreview) newErrors.logo = "Logo image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { title, image: imagePreview, link, status };
      console.log("Form Data:", formData);
      alert("Form submitted!");
    }
  };

  const handleReset = () => {
    setTitle("");
    setLink("");
    setStatus("inactive");
    setImage(null);
    setImagePreview(null);
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">
        Update Associates Websites
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                required
              />
              {errors.title && (
                <span className="text-red-500 text-sm">{errors.title}</span>
              )}
            </div>

            {/* Link */}
            <div className="mt-4 w-full">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="link"
              >
                Link
              </label>
              <FormInput
                type="url"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter Link"
                required
              />
              {errors.link && (
                <span className="text-red-500 text-sm">{errors.link}</span>
              )}
            </div>

            {/* Status */}
            <div className="mt-4 w-full">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Image Upload */}
            <div className="mt-4 w-full">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="file-upload"
              >
                Choose Logo
              </label>
              <FormInput
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer p-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              {errors.logo && (
                <span className="text-red-500 text-sm">{errors.logo}</span>
              )}
            </div>
          </form>
        </div>

        {/* Image Preview */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-300 rounded-md w-64 h-64 flex items-center justify-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="object-cover h-full w-full rounded-md"
              />
            ) : (
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                className="h-64 w-full"
              />
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6 gap-2">
        <button
          type="reset"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500"
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditAssociatesWebsites;
