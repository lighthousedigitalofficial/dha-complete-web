import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
// import InputField from "../shared/Inputfield";
// import ImageUpload from "../shared/ImageUpload";
// import VideoUpload from "../shared/VideoUpload";

import InputField from "../../_components/shared/InputField";

import ImageUpload from "../../_components/shared/ImageUpload";
import VideoUpload from "../../_components/shared/VideoUpload";
const ActivityForm = ({ onSubmit }) => {
  const methods = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Activity</h2>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputField
            label="Title"
            name="title"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Title is required"
          />
          <InputField
            label="Slug"
            name="slug"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Slug is required"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...methods.register("description", {
                required: "Description is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {methods.formState.errors.description && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.description.message}
              </p>
            )}
          </div>
          <InputField
            label="Banner ID"
            name="bannerId"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Banner ID is required"
          />
          <ImageUpload name="images" label="Images" />
          <VideoUpload name="videos" label="Videos" />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md"
          >
            Add Activity
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

ActivityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ActivityForm;
