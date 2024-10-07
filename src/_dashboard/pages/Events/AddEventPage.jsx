// import React, { useState } from "react";
// import { FaTrash } from "react-icons/fa";

// const EventsForm = ({ initialData = {} }) => {
//   const [id, setId] = useState(initialData.id || ""); // UUID
//   const [title, setTitle] = useState(initialData.title || ""); // String
//   const [description, setDescription] = useState(initialData.description || ""); // Text
//   const [images, setImages] = useState(initialData.images || []); // String[] (Array of URLs)
//   const [imagePreview, setImagePreview] = useState([]); // For image previews

//   // Handle file upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const updatedImages = [...images];
//     const previews = [...imagePreview];

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         updatedImages.push(reader.result);
//         previews.push(URL.createObjectURL(file));
//         setImages(updatedImages);
//         setImagePreview(previews);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   // Handle removal of an image
//   const removeImage = (index) => {
//     const updatedImages = [...images];
//     const updatedPreviews = [...imagePreview];
//     updatedImages.splice(index, 1);
//     updatedPreviews.splice(index, 1);
//     setImages(updatedImages);
//     setImagePreview(updatedPreviews);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const eventData = {
//       id,
//       title,
//       description,
//       images,
//     };
//     console.log(eventData);
//     // Here you can handle the form submission, like sending to an API.
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 space-y-4">
//       <div>
//         <label htmlFor="title" className="block text-sm font-semibold">
//           Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full border border-gray-300 p-2 rounded"
//         />
//       </div>

//       <div>
//         <label htmlFor="description" className="block text-sm font-semibold">
//           Description
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border border-gray-300 p-2 rounded"
//           rows="4"
//         ></textarea>
//       </div>

//       <div>
//         <label htmlFor="images" className="block text-sm font-semibold">
//           Upload Images
//         </label>
//         <input
//           id="images"
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageUpload}
//           className="w-full border border-gray-300 p-2 rounded"
//         />
//       </div>

//       <div className="flex flex-wrap gap-4 mt-4">
//         {imagePreview.map((img, index) => (
//           <div key={index} className="relative">
//             <img
//               src={img}
//               alt={`Uploaded ${index}`}
//               className="w-24 h-24 object-cover rounded"
//             />
//             <button
//               type="button"
//               onClick={() => removeImage(index)}
//               className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//             >
//               <FaTrash />
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="float-end">
//         <button
//           type="submit"
//           className="bg-primary-dark text-white py-2 px-4 rounded hover:bg-primary-dark"
//         >
//           Add
//         </button>
//       </div>
//     </form>
//   );
// };

// export default EventsForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddEventPage = ({ initialData = {} }) => {
  const [imagePreviews, setImagePreviews] = useState(
    initialData.imagePreviews || []
  );
  const [title, setTitle] = useState(initialData.title || "");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState(initialData.description || "");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleAddImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    setImages((prevImages) => [...prevImages, ...files]);

    const previewURLs = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previewURLs]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, index) => index !== indexToRemove)
    );
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (images.length === 0)
      newErrors.images = "At least one image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      title,

      images,
      description,
    };

    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  const handleReset = () => {
    setTitle("");

    setImages([]);
    setImagePreviews([]);
    setDescription("");
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Input Fields */}
        <div>
          <form onSubmit={handleSubmit}>
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
                className={`w-full p-2 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            {/* Description Input */}
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
                rows="4"
                className={`w-full p-2 border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Image Previews */}
        <div className="mb-4">
          <label className="block text-[1rem] font-semibold mb-2">
            Main Image
          </label>
          <div
            className={`relative bg-gray-100 border-2 ${
              errors.images ? "border-red-500" : "border-dashed border-gray-500"
            } rounded-md h-40 flex items-center justify-center cursor-pointer`}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleAddImages}
            />
            <div className="text-center">
              <div className="text-gray-500 text-3xl">+</div>
              <p className="text-gray-500">Add Images</p>
            </div>
          </div>
          {errors.images && <p className="text-red-500">{errors.images}</p>}

          {/* Preview the selected images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {imagePreviews.length > 0 ? (
              imagePreviews.map((preview, index) => (
                <div
                  key={index}
                  className="relative border rounded-md h-40 overflow-hidden"
                >
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full text-sm hover:bg-red-700"
                  >
                    &times;
                  </button>
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))
            ) : (
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                className="w-full content-center"
              />
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          type="reset"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-primary-700  text-white px-4 py-2 rounded-md hover:bg-primary-500  mr-2"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEventPage;
