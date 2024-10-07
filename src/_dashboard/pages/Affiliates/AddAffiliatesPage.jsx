import { useForm } from 'react-hook-form';
import { useCreateAffiliateMutation } from '../../../redux/slices/affiliates';
// import { useCreateAffiliateMutation } from '../features/affiliates/affiliatesApi'; // Adjust the import based on your file structure

const AddAffiliatesPage = ({ initialData = {} }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: initialData.name || "",
      status: initialData.status || "active"
    }
  });

  const [createAffiliate, { isLoading, isSuccess, isError }] = useCreateAffiliateMutation();

  const onSubmit = async (data) => {
    try {
      await createAffiliate(data).unwrap();
      alert("Affiliate form submitted!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Failed to save the affiliate:", error);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Affiliates</h2>

      <div className="grid grid-cols-1 gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Affiliate name is required." })}
              placeholder="Enter Affiliate Name"
              className={`block w-full border border-gray-300 p-2 rounded-md ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Status Field */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              {...register("status")}
              className="block w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 gap-2">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="submit"
              className={`bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </div>

          {/* Success/Error Messages */}
          {isSuccess && <p className="text-green-500 mt-4">Affiliate added successfully!</p>}
          {isError && <p className="text-red-500 mt-4">Failed to add affiliate. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default AddAffiliatesPage;
