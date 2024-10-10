import React, { useEffect, useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import {
  useGetMediaByIdQuery,
  useUpdateMediaMutation,
} from "../../../redux/slices/mediaApiSlice";
import { useGetBannersQuery } from "../../../redux/slices/bannerSlice";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../../components/shared/Loader";

const EditMediaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigation
  const {
    data: mediaData,

    refetch,
  } = useGetMediaByIdQuery(id);
  const [updateMedia, { isLoading, isError }] = useUpdateMediaMutation();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: useMemo(() => {
      return mediaData?.doc || {};
    }, [mediaData?.doc]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const { data: banners, isLoading: bannersLoading } = useGetBannersQuery();
  const [mediaBanner, setMediaBanner] = useState("");

  useEffect(() => {
    if (mediaData?.doc) {
      methods.reset(mediaData.doc);
      setMediaBanner(mediaData.doc.bannerId || "");
    }
  }, [mediaData, methods]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        id,
        bannerId: mediaBanner,
        title: data.title,
        description: data.description,
      };

      await updateMedia(payload).unwrap();
      toast.success("Media updated successfully!");
      refetch();
      reset();
      setMediaBanner(""); // Reset media banner state
      navigate("/media/list"); // Navigate to the list page
    } catch (error) {
      console.error("Failed to update media:", error);
      const errorMessage =
        error.data?.message || "Failed to update media. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleMediaChange = (event) => {
    setMediaBanner(event.target.value);
  };

  return isLoading ? (
    <Loader />
  ) : mediaData && mediaData?.doc ? (
    <FormProvider {...methods}>
      <div className="p-4 bg-white rounded-md shadow-md m-5">
        <h2 className="text-2xl font-semibold mb-6">Edit Media</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          <div>
            {/* Title Input */}
            <InputField
              label="Title"
              name="title"
              register={register}
              required={true}
              errors={errors}
              errorMessage="Title is required."
            />

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
                {...register("description", {
                  required: "Description is required.",
                })}
                rows="5"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
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
                {...register("mediaBanner", {
                  required: "Media Banner is required.",
                })}
                value={mediaBanner}
                onChange={handleMediaChange}
                className={`block w-full text-sm text-gray-500 border rounded-md cursor-pointer p-2 focus:outline-none focus:ring-2 ${
                  errors.mediaBanner
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              >
                <option value="">Select a Media Banner</option>
                {bannersLoading ? (
                  <option>Loading...</option>
                ) : (
                  Array.isArray(banners?.doc) &&
                  banners.doc.map((banner) => (
                    <option key={banner._id} value={banner._id}>
                      {banner.title}
                    </option>
                  ))
                )}
              </select>
              {errors.mediaBanner && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mediaBanner.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-2 col-span-2">
            <button
              type="button"
              onClick={() => reset()}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>

          {isError && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong, please try again.
            </p>
          )}
        </form>
      </div>
    </FormProvider>
  ) : (
    <p>Importance mediaData data not found.</p>
  );
};

export default EditMediaPage;
