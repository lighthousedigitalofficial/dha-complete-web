import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVideosPage = ({ initialData = {} }) => {
  const [videoPreview, setVideoPreview] = useState(initialData.video || null);
  const [title, setTitle] = useState(initialData.title || "");
  // const [uuid, setUUID] = useState(initialData.uuid || "");
  // const [url, setUrl] = useState(initialData.url || "");
  const [video, setVideo] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate video type and size
      const validTypes = ["video/mp4", "video/mov", "video/avi"];
      if (!validTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          video: "Invalid file type. Please upload a video file.",
        }));
        return;
      }
      // if (file.size > 10 * 1024 * 1024) {
      //   // 10MB limit
      //   setErrors((prevErrors) => ({
      //     ...prevErrors,
      //     video: "File size exceeds 10MB. Please upload a smaller video.",
      //   }));
      //   return;
      // }

      setErrors((prevErrors) => ({ ...prevErrors, video: null }));
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!video) newErrors.video = "A video file is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    const formData = {
      title,
      videoURL: videoPreview,
    };

    console.log("Form Data:", formData);
    alert("Form submitted!");
    // You can navigate or reset state here after successful submission
  };

  const handleReset = () => {
    setTitle("");
    setVideo(null);
    setVideoPreview(null);
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Videos</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <div className="mb-4">
            <label
              className="block text-[1rem] font-semibold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div className="mt-4 w-full">
            <label
              className="block text-lg font-medium mb-2"
              htmlFor="video-upload"
            >
              Choose Video
            </label>
            <input
              type="file"
              id="video-upload"
              name="video-upload"
              accept="video/*"
              onChange={handleVideoChange}
              className={`block w-full text-sm text-gray-500 border rounded-md cursor-pointer p-2 focus:outline-none focus:ring-2 ${
                errors.video
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.video && <p className="text-red-500">{errors.video}</p>}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-gray-300 rounded-md w-full h-64 flex items-center justify-center overflow-hidden">
            {videoPreview ? (
              <video
                src={videoPreview}
                controls
                className="h-full w-full rounded-md"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-gray-500 text-center">
                <p>No video selected</p>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                  alt="No video selected"
                />
              </div>
            )}
          </div>
        </div>

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
            className="bg-primary-dark text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideosPage;
