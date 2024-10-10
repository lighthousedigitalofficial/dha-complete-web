import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import PropTypes from 'prop-types'
import InputField from '../../_components/shared/InputField'
import uploadImage from '../../../helpers/imageUpload'
import { useCreateSalePropertiesMutation } from '../../../redux/slices/salePropertiesSlice'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SalePropertyForm = () => {
    const methods = useForm()
    const [imageFile, setImageFile] = useState(null) // Store the actual image file
    const [imagePreview, setImagePreview] = useState(null) // Store preview for display
    const [createSaleProperty, { isLoading, isError, isSuccess, error }] =
        useCreateSalePropertiesMutation()
    const navigate = useNavigate()

    // Handle image change and preview
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file) // Store the actual file for upload
            setImagePreview(URL.createObjectURL(file)) // Set the preview for display
        } else {
            console.error('No image file selected')
        }
    }

    // Form submit logic
    const handleFormSubmit = async (data) => {
        try {
            console.log('Form submitted with data:', data)

            let documentUrl = null
            // Check if an image file is selected and upload it to Cloudinary
            if (imageFile) {
                documentUrl = await uploadImage(imageFile, 'image_uploads') // Upload image to Cloudinary
                if (!documentUrl) {
                    toast.error('Image upload failed')
                    return
                }
            }

            const salePropertyData = {
                ...data,
                document: documentUrl || null, // Include uploaded image URL if available
            }

            await createSaleProperty(salePropertyData).unwrap() // Send data to the backend
            toast.success('Sale property added successfully')
            methods.reset()
            setImagePreview(null) // Clear image preview
            setImageFile(null) // Clear the image file state

            navigate('/sale-property/list') // Navigate to the sale property list page
        } catch (err) {
            console.error('Failed to create sale property: ', err)
            toast.error('Error creating sale property')
        }
    }

    return (
        <FormProvider {...methods}>
            <div className="w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">Add Sale Property</h2>
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
                                label="CNIC"
                                name="cnic"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="CNIC is required"
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <InputField
                                label="Phone"
                                name="phone"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Phone is required"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Email"
                                name="email"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Email is required"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <InputField
                                label="Plot Number"
                                name="plotNum"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Plot Number is required"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Street Number"
                                name="streetNum"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Street Number is required"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <InputField
                                label="Sector"
                                name="sector"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Sector is required"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Size"
                                name="size"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Size is required"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <InputField
                                label="Phase"
                                name="phase"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Phase is required"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Demand"
                                name="demand"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Demand is required"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Type
                                </label>
                                <select
                                    {...methods.register('type', {
                                        required: 'Type is required',
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                >
                                    <option value="">Select Type</option>
                                    <option value="residential">
                                        Residential
                                    </option>
                                    <option value="commercial">
                                        Commercial
                                    </option>
                                    <option value="shop">Shop</option>
                                    <option value="apartment">Apartment</option>
                                </select>
                                {methods.formState.errors.type && (
                                    <p className="text-red-500 text-sm">
                                        {methods.formState.errors.type.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="w-full mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    {...methods.register('status', {
                                        required: 'Status is required',
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
                                        {
                                            methods.formState.errors.status
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            {...methods.register('image', {
                                required: 'Image file is required',
                            })}
                            onChange={handleImageChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {methods.formState.errors.image && (
                            <p className="text-red-500 text-sm">
                                {methods.formState.errors.image.message}
                            </p>
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

                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    {isError && (
                        <p className="text-red-500 text-sm mt-4">
                            {error?.data?.message || 'Error occurred!'}
                        </p>
                    )}
                    {isSuccess && (
                        <p className="text-green-500 text-sm mt-4">
                            Sale property created successfully!
                        </p>
                    )}
                </form>
            </div>
        </FormProvider>
    )
}

SalePropertyForm.propTypes = {}

export default SalePropertyForm
