import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import InputField from "../../_components/shared/InputField";
import uploadImage from "../../../helpers/imageUpload";
import {
  useGetSalePropertyQuery,
  useUpdateSalePropertiesMutation,
} from "../../../redux/slices/salePropertiesSlice";

const EditSalePropertyForm = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const { data: propertyData, isLoading: isLoadingProperty } =
    useGetSalePropertyQuery(propertyId);
  const [updateSaleProperty, { isLoading: isUpdating }] =
    useUpdateSalePropertiesMutation();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cnic: "",
      phone: "",
      email: "",
      plotNum: "",
      streetNum: "",
      sector: "",
      size: "",
      phase: "",
      demand: "",
      type: "",
      status: "",
    },
  });

  useEffect(() => {
    if (propertyData && propertyData.doc) {
      reset({
        name: propertyData.doc.name || "",
        cnic: propertyData.doc.cnic || "",
        phone: propertyData.doc.phone || "",
        email: propertyData.doc.email || "",
        plotNum: propertyData.doc.plotNum || "",
        streetNum: propertyData.doc.streetNum || "",
        sector: propertyData.doc.sector || "",
        size: propertyData.doc.size || "",
        phase: propertyData.doc.phase || "",
        demand: propertyData.doc.demand || "",
        type: propertyData.doc.type || "",
        status: propertyData.doc.status || "",
      });
      setImagePreview(propertyData.doc.document);
    }
  }, [propertyData, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      let documentUrl = propertyData?.doc.document || null;

      if (imageFile) {
        documentUrl = await uploadImage(imageFile, "image_uploads");
        if (!documentUrl) {
          toast.error("Image upload failed");
          console.error("Image upload failed"); // Logging upload failure
          return;
        }
      }

      const salePropertyData = {
        ...data,
        document: documentUrl,
      };

      await updateSaleProperty({
        id: propertyId,
        ...salePropertyData,
      }).unwrap();

      toast.success("Sale property updated successfully");
      navigate("/sale-property/list"); // Navigate immediately
    } catch (err) {
      console.error("Error updating sale property:", err);
      toast.error("Error updating sale property");
    }
  };

  if (isLoadingProperty || isUpdating) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border border-primary bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Sale Property</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <InputField
          label="Name"
          name="name"
          register={register}
          required
          errors={errors}
          errorMessage="Name is required"
        />
        <InputField
          label="CNIC"
          name="cnic"
          register={register}
          required
          errors={errors}
          errorMessage="CNIC is required"
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          required
          errors={errors}
          errorMessage="Phone is required"
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          required
          errors={errors}
          errorMessage="Email is required"
        />
        <InputField
          label="Plot Number"
          name="plotNum"
          register={register}
          required
          errors={errors}
          errorMessage="Plot Number is required"
        />
        <InputField
          label="Street Number"
          name="streetNum"
          register={register}
          required
          errors={errors}
          errorMessage="Street Number is required"
        />
        <InputField
          label="Sector"
          name="sector"
          register={register}
          required
          errors={errors}
          errorMessage="Sector is required"
        />
        <InputField
          label="Size"
          name="size"
          register={register}
          required
          errors={errors}
          errorMessage="Size is required"
        />
        <InputField
          label="Phase"
          name="phase"
          register={register}
          required
          errors={errors}
          errorMessage="Phase is required"
        />
        <InputField
          label="Demand"
          name="demand"
          register={register}
          required
          errors={errors}
          errorMessage="Demand is required"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            {...register("type", { required: "Type is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="shop">Shop</option>
            <option value="apartment">Apartment</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        <div className="mt-4 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`block w-full text-sm text-gray-500 border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded-md cursor-pointer p-2`}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">Image is required</p>
          )}
        </div>

        {imagePreview && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image Preview
            </label>
            <img src={imagePreview} alt="Uploaded" className="w-full" />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            {...register("status", { required: "Status is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Status</option>
            <option value="available">Available</option> {/* Updated option */}
            <option value="sold">Sold</option> {/* Updated option */}
            <option value="pending">Pending</option> {/* Updated option */}
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        <div className="col-span-full flex justify-end">
          <button
            type="submit"
            className={`px-4 py-2 ${
              isUpdating ? "bg-gray-400" : "bg-blue-600"
            } text-white rounded-md`}
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSalePropertyForm;
