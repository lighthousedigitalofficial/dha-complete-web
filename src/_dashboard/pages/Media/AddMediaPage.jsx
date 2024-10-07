import React, { useState } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddMediaPage = ({ initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [errors, setErrors] = useState({});

  const handleMediaChange = (e) => {
    const selectedMedia = e.target.value;
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Collecting form data
    const formData = {
      title,
      description,
    };

    // Log form data to console
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Upload Media</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-[1rem] font-semibold mb-2"
            >
              Title
            </label>
            <FormInput
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
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
              onChange={handleMediaChange}
              className="block w-full text-sm text-gray-500 border rounded-md cursor-pointer p-2 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
            >
              <option value="">Select a Media Banner</option>
              <option value="Banner 1">Banner 1</option>
              <option value="Banner 2">Banner 2</option>
              <option value="Banner 3">Banner 3</option>
            </select>
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
