import React, { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import FormInput from "../../_components/Form/FormInput/FormInput";
import { useCreateFacilitiesMutation } from "../../../redux/slices/facilitiesApiSlice";
import toast from "react-hot-toast";

const AddFacilitiesPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [link, setLink] = useState("");

  // Validation state
  const [errors, setErrors] = useState({});

  // Use the createFacilities mutation
  const [createFacilities, { isLoading }] = useCreateFacilitiesMutation();

  const validateForm = () => {
    const newErrors = {};
    // Validate title

    // Validate description
    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }
    // Validate link

    // Validate main image
    if (!mainImage) {
      newErrors.mainImage = "Please provide a main image.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const formData = {
      title,
      description,
      mainImage,
      images,
      services,
      link,
    };

    // Log the form data
    console.log("Submitting form data:", formData);

    try {
      // Call the mutation to create the facility
      await createFacilities(formData).unwrap();
      toast.success("Facilities form submitted successfully!"); // Replace alert with toast
      console.log("Facilities submitted successfully");
      handleReset(); // Reset form on success
    } catch (error) {
      console.error("Failed to submit the form:", error);
      toast.error("There was an error submitting the form."); // Replace alert with toast
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMainImage(imageUrl);
      setImagePreview(imageUrl);
      console.log("Main image URL:", imageUrl);
      // Clear main image error if set
      if (errors.mainImage) {
        setErrors((prev) => ({ ...prev, mainImage: null }));
      }
    }
  };

  const handleAddImages = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    console.log("Additional images added:", newImages);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setMainImage("");
    setImages([]);
    setServices([]);
    setInputValue("");
    setLink("");
    setImagePreview(null);
    setErrors({}); // Reset errors
    console.log("Form reset");
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    console.log("Image removed at index:", index);
  };

  const handleAddService = () => {
    if (inputValue.trim() !== "" && !services.includes(inputValue.trim())) {
      setServices((prevServices) => [...prevServices, inputValue.trim()]);
      setInputValue("");
      console.log("Service added:", inputValue.trim());
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleRemoveService = (service) => {
    setServices((prevServices) => prevServices.filter((s) => s !== service));
    console.log("Service removed:", service);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddService();
    }
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Facilities</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors((prev) => ({ ...prev, title: null })); // Clear error
              }}
              placeholder="Enter Title"
              required
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}{" "}
            {/* Show error message */}
          </div>

          {/* Link Field */}
          <div className="mb-4">
            <label
              className="block text-[1rem] font-semibold mb-2"
              htmlFor="link"
            >
              Link
            </label>
            <FormInput
              type="text"
              id="link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setErrors((prev) => ({ ...prev, link: null })); // Clear error
              }}
              placeholder="Enter Link URL"
              required
            />
            {errors.link && <p className="text-red-500">{errors.link}</p>}{" "}
            {/* Show error message */}
          </div>

          {/* Services */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2">
              Services
            </label>
            <div className="flex flex-wrap mb-2">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 flex items-center"
                >
                  {service}
                  <button
                    type="button"
                    onClick={() => handleRemoveService(service)}
                    className="ml-1 text-red-600"
                  >
                    <CiCircleRemove className="text-sm" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                placeholder="Add service..."
                className="border outline-primary-400 border-gray-400 rounded-md px-2 py-1"
              />
            </div>
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              className="block text-[1rem] font-semibold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors((prev) => ({ ...prev, description: null })); // Clear error
              }}
              placeholder="Enter Description"
              className="block w-full border border-gray-300 p-2 rounded-md"
              required
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p> // Show error message
            )}
          </div>

          {/* Main Image Upload */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2">
              Main Image
            </label>
            <div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleMainImageChange}
                required // Ensure this field is required
              />
              <div className="text-center">
                <div className="text-gray-500 text-3xl">+</div>
                <p className="text-gray-500">Add Main Image</p>
              </div>
            </div>
            {mainImage && (
              <div className="mt-2">
                <img
                  src={mainImage}
                  alt="Main Preview"
                  className="h-32 object-cover rounded-md"
                />
              </div>
            )}
            {errors.mainImage && (
              <p className="text-red-500">{errors.mainImage}</p> // Show error message
            )}
          </div>

          {/* Additional Images Upload */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2">
              Additional Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAddImages}
              className="border rounded-md px-2 py-1"
            />
            <div className="mt-2">
              {images.map((image, index) => (
                <div key={index} className="relative inline-block mr-2">
                  <img
                    src={image}
                    alt={`Preview ${index}`}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary-400 text-white rounded-md px-4 py-2"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Add Facility"}
        </button>
      </form>
    </div>
  );
};

export default AddFacilitiesPage;
