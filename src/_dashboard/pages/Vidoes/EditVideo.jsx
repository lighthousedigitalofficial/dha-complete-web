import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useState, useEffect } from "react";
import uploadVideo from "../../../helpers/videoUpload";
import { useUpdateVideoMutation, useGetVideoQuery } from "../../../redux/slices/videosApiSlice";
import toast from "react-hot-toast";
import { useGetMediaQuery } from "../../../redux/slices/mediaApiSlice";
import { useParams } from "react-router-dom";

const EditVideoPage = () => {
  const { id } = useParams(); // Get video ID from URL params
  const methods = useForm();

  const { data: video, isLoading: isVideoLoading, isError: isVideoError } = useGetVideoQuery(id); // Fetch video data
  const [updateVideo, { isLoading: isUpdating }] = useUpdateVideoMutation(); // Video update mutation hook
  const { data: medias, isLoading: isMediasLoading } = useGetMediaQuery(); // Fetch medias from mediaSlice

  const [uploading, setUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null); // State for video preview

  useEffect(() => {
    if (video && video.doc) {
      methods.reset({
        title: video.doc.title,
        media: video.doc.mediaId,
        video: video.doc.url,
      });
      setVideoPreview(video.doc.url); // Set initial video preview
    }
  }, [video, methods]);

  const handleFormSubmit = async (data) => {
    try {
      setUploading(true);
      let videoUrl = video.url;

      // Upload new video if a new file is selected
      if (data.video && data.video[0]) {
        videoUrl = await uploadVideo(data.video[0], "video_uploads");
      }
      setUploading(false);

      // Add video URL and mediaId to the data object before updating the video
      const videoData = {
        title: data.title,
        url: videoUrl,
        mediaId: data.media, // Add selected mediaId
      };

      // Call the mutation to update the video record
      await updateVideo({ id, ...videoData }).unwrap();
      toast.success("Video updated successfully!");
    } catch (error) {
      setUploading(false);
      console.error("Error updating video:", error);
      toast.error("Failed to update the video. Please try again.");
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

  if (isVideoLoading) {
    return <div>Loading...</div>;
  }

  if (isVideoError) {
    return <div>Error loading video data.</div>;
  }

  return (
    <FormProvider {...methods}>
      <div className="max-w mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Edit Video</h2>
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
              {...methods.register("video")}
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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-500 text-white rounded-md"
            disabled={uploading || isUpdating}
          >
            {uploading || isUpdating ? "Updating..." : "Update Video"}
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default EditVideoPage;