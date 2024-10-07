import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useState } from "react";
import uploadVideo from "../../../helpers/videoUpload";
import { useCreateVideoMutation } from "../../../redux/slices/videosApiSlice";
import toast from "react-hot-toast";
import { useGetMediaQuery } from "../../../redux/slices/mediaApiSlice";

const AddVideoPage = () => {
  const methods = useForm();

  const [createVideo, { isLoading }] = useCreateVideoMutation(); // Video creation mutation hook
  const { data: medias, isLoading: isMediasLoading } = useGetMediaQuery(); // Fetch medias from mediaSlice

  const [uploading, setUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null); // State for video preview

  const handleFormSubmit = async (data) => {
    try {
      setUploading(true);
      // Upload video to Cloudinary
      const videoUrl = await uploadVideo(data.video[0], "video_uploads");
      setUploading(false);

      // Add video URL and mediaId to the data object before creating the video
      const videoData = {
        title: data.title,
        url: videoUrl,
        mediaId: data.media, // Add selected mediaId
      };

      // Call the mutation to create a video record
      await createVideo(videoData).unwrap();
      toast.success("Video created successfully!");
      methods.reset(); // Reset form after submission
      setVideoPreview(null); // Clear video preview
    } catch (error) {
      setUploading(false);
      console.error("Error creating video:", error);
      toast.error("Failed to create the video. Please try again.");
    }
  };

  // Handle video preview
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL); // Set preview URL
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Video</h2>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputField
            label="Title"
            name="title"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Title is required"
          />

          {/* Select Media */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Media
            </label>
            <select
              {...methods.register("media", {
                required: "Media is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Media</option>
              {!isMediasLoading &&
                medias?.doc?.map((media) => (
                  <option key={media._id} value={media._id}>
                    {media.title} {/* Assuming each media has a name */}
                  </option>
                ))}
            </select>
            {methods.formState.errors.media && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.media.message}
              </p>
            )}
          </div>

          {/* Video Upload Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              {...methods.register("video", {
                required: "Video file is required",
              })}
              onChange={handleVideoChange} // Handle video change to show preview
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {methods.formState.errors.video && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.video.message}
              </p>
            )}
          </div>

          {/* Video preview section */}
          {videoPreview && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Video Preview
              </label>
              <video className="w-full" controls src={videoPreview} />
            </div>
          )}

          {/* <div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Status
						</label>
						<select
							{...methods.register("status", {
								required: "Status is required",
							})}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
						>
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						{methods.formState.errors.status && (
							<p className="text-red-500 text-sm">
								{methods.formState.errors.status.message}
							</p>
						)}
					</div> */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
            disabled={uploading || isLoading}
          >
            {uploading || isLoading ? "Uploading..." : "Add Video"}
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddVideoPage;
