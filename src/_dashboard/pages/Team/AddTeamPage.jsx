import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useCreateTeamsMutation } from "../../../redux/slices/teamApiSlice";

const TeamForm = () => {
  const methods = useForm();
  const [createTeam, { isLoading, isError, isSuccess, error }] = useCreateTeamsMutation();

  const handleFormSubmit = async (data) => {
    try {
      // Call the mutation and pass form data
      const response = await createTeam(data).unwrap();
      console.log("Team added successfully:", response);
    } catch (err) {
      console.error("Failed to add team:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Team Member</h2>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputField
            label="Name"
            name="name"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Name is required"
          />
          <InputField
            label="Designation"
            name="designation"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Designation is required"
          />
          <InputField
            label="Extension"
            name="extn"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Extension is required"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              {...methods.register("status", {
                required: "Status is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {methods.formState.errors.status && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.status.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-green-500 text-white rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Team Member"}
          </button>
        </form>

        {isSuccess && (
          <p className="mt-4 text-green-500">Team member added successfully!</p>
        )}
        {isError && (
          <p className="mt-4 text-red-500">Error: {error?.data?.message || "Failed to add team member"}</p>
        )}
      </div>
    </FormProvider>
  );
};

export default TeamForm;
