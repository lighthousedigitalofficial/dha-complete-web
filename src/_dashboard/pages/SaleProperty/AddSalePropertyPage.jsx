import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../_components/shared/InputField";
import uploadImage from "../../../helpers/imageUpload";
import { useCreateSalePropertiesMutation } from "../../../redux/slices/salePropertiesSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SalePropertyForm = () => {
  const methods = useForm();
  const [imageFile, setImageFile] = useState(null); // Store the actual image file
  const [imagePreview, setImagePreview] = useState(null); // Store preview for display
  const [createSaleProperty, { isLoading, isError, isSuccess, error }] =
    useCreateSalePropertiesMutation();
  const navigate = useNavigate(); // Initialize navigate

  // Handle image change and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Store the actual file for upload
      setImagePreview(URL.createObjectURL(file)); // Set the preview for display
    } else {
      console.error("No image file selected");
    }
  };

  // Form submit logic
  const handleFormSubmit = async (data) => {
    try {
      console.log("Form submitted with data:", data);

      let url = null;
      // Check if an image file is selected and upload it to Cloudinary
      if (imageFile) {
        url = await uploadImage(imageFile, "image_uploads"); // Upload image to Cloudinary
        if (!url) {
          toast.error("Image upload failed");
          return;
        }
      }

      const salePropertyData = {
        ...data,
        document: url || null, // Include uploaded image URL if available
      };

      await createSaleProperty(salePropertyData).unwrap(); // Send data to the backend
      toast.success("Sale property added successfully");
      methods.reset();
      setImagePreview(null); // Clear image preview
      setImageFile(null); // Clear the image file state

      navigate("/sale-property/list"); // Navigate to the sale property list page
    } catch (err) {
      console.error("Failed to create sale property: ", err);
      toast.error("Error creating sale property");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Sale Property</h2>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField
              label="Name"
              name="name"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Name is required"
            />
            <InputField
              label="CNIC"
              name="cnic"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="CNIC is required"
            />
            <InputField
              label="Phone"
              name="phone"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Phone is required"
            />
            <InputField
              label="Email"
              name="email"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Email is required"
            />
            <InputField
              label="Plot Number"
              name="plotNum"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Plot Number is required"
            />
            <InputField
              label="Street Number"
              name="streetNum"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Street Number is required"
            />
            <InputField
              label="Sector"
              name="sector"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Sector is required"
            />
            <InputField
              label="Size"
              name="size"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Size is required"
            />
            <InputField
              label="Phase"
              name="phase"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Phase is required"
            />
            <InputField
              label="Demand"
              name="demand"
              register={methods.register}
              required
              errors={methods.formState.errors}
              errorMessage="Demand is required"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              {...methods.register("type", { required: "Type is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="shop">Shop</option>
              <option value="apartment">Apartment</option>
            </select>
            {methods.formState.errors.type && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.type.message}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div className="mt-4 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={`block w-full text-sm text-gray-500 border ${
                methods.formState.errors.image
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md cursor-pointer p-2 focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {methods.formState.errors.image && (
              <p className="text-red-500 text-sm mt-1">Image is required</p>
            )}
          </div>

          {/* Image preview section */}
          {imagePreview && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image Preview
              </label>
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-32 h-32 object-cover" // Set width and height for the preview
              />
            </div>
          )}

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
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="pending">Pending</option>
            </select>
            {methods.formState.errors.status && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.status.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-34 ml-auto flex justify-center items-center px-4 py-2 bg-green-500 text-white rounded-md whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Add Sale Property"}
          </button>

          {isError && (
            <p className="text-red-500 text-sm mt-2">
              Failed to add sale property: {error.message}
            </p>
          )}
          {isSuccess && (
            <p className="text-green-500 text-sm mt-2">
              Sale property added successfully!
            </p>
          )}
        </form>
      </div>
    </FormProvider>
  );
};

SalePropertyForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SalePropertyForm;
