import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import { useGetTeamByIdQuery, useUpdateTeamMutation } from "../../../redux/slices/teamApiSlice";

const EditTeamPage = ({ teamId }) => { // Accept teamId as a prop
  const methods = useForm();
  const { data: teamData, isLoading: isFetching } = useGetTeamByIdQuery(teamId); // Fetch team data by ID
  const [updateTeam, { isLoading, isError, isSuccess, error }] = useUpdateTeamMutation();

  // Set default values when teamData is fetched
  useEffect(() => {
    if (teamData) {
      methods.reset({
        name: teamData.name,
        designation: teamData.designation,
        extn: teamData.extn,
        status: teamData.status,
      });
    }
  }, [teamData, methods]);

  const handleFormSubmit = async (data) => {
    try {
      // Call the mutation and pass form data along with team ID
      const response = await updateTeam({ id: teamId, ...data }).unwrap();
      console.log("Team updated successfully:", response);
    } catch (err) {
      console.error("Failed to update team:", err);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Edit Team Member</h2>
        {isFetching ? (
          <p>Loading...</p> // Show loading state while fetching
        ) : (
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <InputField
                  label="Name"
                  name="name"
                  register={methods.register}
                  required
                  errors={methods.formState.errors}
                  errorMessage="Name is required"
                />
              </div>
              <div className="w-1/2">
                <InputField
                  label="Designation"
                  name="designation"
                  register={methods.register}
                  required
                  errors={methods.formState.errors}
                  errorMessage="Designation is required"
                />
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <InputField
                  label="Extension"
                  name="extn"
                  register={methods.register}
                  required
                  errors={methods.formState.errors}
                  errorMessage="Extension is required"
                />
              </div>
              <div className="w-1/2">
                <div className="">
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
              </div>
            </div>

            <button
              type="submit"
              className={`px-4 py-2 bg-green-500 text-white rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Member"}
            </button>
          </form>
        )}

        {isSuccess && (
          <p className="mt-4 text-green-500">Team member updated successfully!</p>
        )}
        {isError && (
          <p className="mt-4 text-red-500">Error: {error?.data?.message || "Failed to update team member"}</p>
        )}
      </div>
    </FormProvider>
  );
};

export default EditTeamPage;
