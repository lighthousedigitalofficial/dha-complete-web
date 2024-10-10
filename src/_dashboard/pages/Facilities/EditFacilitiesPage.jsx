import React, { useEffect, useState, useMemo } from 'react'
import { FaTrash } from 'react-icons/fa'
import { CiCircleRemove } from 'react-icons/ci'
import { toast, ToastContainer } from 'react-toastify'
import {
    useUpdateFacilitiesMutation,
    useGetFacilityQuery,
} from '../../../redux/slices/facilitiesApiSlice'
import { useForm, FormProvider } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import uploadImage from '../../../helpers/imageUpload'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmationModal from '../../_components/shared/ConfirmationModal' // Import your modal component

const EditFacilitiesPage = () => {
    const { id } = useParams() // Get the facility ID from the URL
    const navigate = useNavigate()
    const { data, isLoading: loadingData, refetch } = useGetFacilityQuery(id) // Fetch the facility data
    const [updateFacilities, { isLoading }] = useUpdateFacilitiesMutation()

    const [imageFile, setImageFile] = useState(null)
    const [mainImage, setMainImage] = useState('')
    const [images, setImages] = useState([])
    const [services, setServices] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(null) // For confirming image deletion

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: useMemo(
            () =>
                data
                    ? {
                          title: data.title,
                          description: data.description,
                          link: data.link,
                          services: data.services || [],
                      }
                    : {},
            [data]
        ),
    })

    useEffect(() => {
        if (data) {
            methods.reset({
                title: data.title,
                description: data.description,
                link: data.link,
                services: data.services || [],
            })
            setMainImage(data.mainImage)
            setImages(data.images || [])
            setServices(data.services || []) // Set services from fetched data
        }
    }, [data, methods])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            const imageUrl = URL.createObjectURL(file)
            setMainImage(imageUrl)
        }
    }

    const handleAddImages = (e) => {
        const files = Array.from(e.target.files)
        setImages((prevImages) => [...prevImages, ...files])
    }

    const confirmRemoveImage = (index) => {
        setSelectedImageIndex(index)
        setIsModalOpen(true) // Open confirmation modal
    }

    const handleRemoveImage = () => {
        if (selectedImageIndex !== null) {
            setImages(images.filter((_, i) => i !== selectedImageIndex))
            toast.info('Image removed')
            setIsModalOpen(false) // Close modal after removal
            setSelectedImageIndex(null) // Clear selected index
        }
    }

    const handleAddService = () => {
        const inputValue = methods.watch('serviceInput')
        if (inputValue && !services.includes(inputValue.trim())) {
            setServices((prevServices) => [...prevServices, inputValue.trim()])
            methods.setValue('serviceInput', '')
            toast.success('Service added successfully')
        }
    }

    const handleRemoveService = (service) => {
        setServices((prevServices) => prevServices.filter((s) => s !== service))
        toast.info('Service removed')
    }

    const handleFormSubmit = async (formData) => {
        if (!mainImage) {
            toast.error('Please provide a main image.')
            return
        }

        try {
            const uploadedImages = await Promise.all(
                images.map((image) => uploadImage(image, 'facilities'))
            )
            const uploadedMainImage = await uploadImage(imageFile, 'facilities')

            const finalData = {
                id,
                title: formData.title,
                description: formData.description,
                link: formData.link,
                mainImage: uploadedMainImage || mainImage, // Use uploaded or existing main image
                images: uploadedImages,
                services, // Include services here
            }

            await updateFacilities(finalData).unwrap()
            toast.success('Facilities updated successfully!')
            await refetch() // Refetch data to reflect updates
            navigate('/facilities/list')
        } catch (error) {
            console.error(error)
            toast.error('There was an error updating the facilities.')
        }
    }

    if (loadingData) return <div>Loading...</div> // Loading state

    return (
        <FormProvider {...methods}>
            <div className="w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
                <ToastContainer />
                <h2 className="text-2xl font-bold mb-6">Edit Facilities</h2>
                <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title Field */}
                        <InputField
                            label="Title"
                            name="title"
                            register={methods.register}
                            required
                            errors={methods.formState.errors}
                            errorMessage="Title is required"
                            className="text-[1rem]"
                        />

                        {/* Link Field */}
                        <InputField
                            label="Link"
                            name="link"
                            register={methods.register}
                            required
                            errors={methods.formState.errors}
                            errorMessage="Link is required"
                            className="text-[1rem]"
                        />

                        {/* Services */}
                        <div className="mb-4">
                            <label className="block text-[1rem] font-semibold mb-2">
                                Services
                            </label>
                            <div className="flex flex-wrap mb-2">
                                {services.map((service, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 flex items-center"
                                    >
                                        {service}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveService(service)
                                            }
                                            className="ml-1 text-red-600"
                                        >
                                            <CiCircleRemove className="text-sm" />
                                        </button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    {...methods.register('serviceInput')} // still register it to avoid errors but won't use in final submission
                                    placeholder="Add service..."
                                    className="border outline-primary-400 border-gray-400 rounded-md px-2 py-1 text-[1rem] mr-2"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault()
                                            handleAddService()
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Description Field */}
                        <div className="mb-4">
                            <label className="block text-[1rem] font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                {...methods.register('description')}
                                placeholder="Enter Description"
                                className="block w-full border border-gray-300 p-2 rounded-md text-[1rem]"
                                required
                            />
                        </div>

                        {/* Main Image Upload */}
                        <div className="mb-4">
                            <label className="block text-[1rem] font-semibold mb-2">
                                Main Image
                            </label>
                            <div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                    required
                                />
                                <div className="text-center">
                                    <div className="text-gray-500 text-3xl">
                                        +
                                    </div>
                                    <p className="text-gray-500">
                                        Add Main Image
                                    </p>
                                </div>
                            </div>
                            {mainImage && (
                                <div className="mt-4">
                                    <img
                                        src={mainImage}
                                        alt="Preview"
                                        className="object-cover w-full h-40 rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Image Upload Field */}
                        <div className="mb-4">
                            <label className="block text-[1rem] font-semibold mb-2">
                                Upload Images
                            </label>
                            <div className="relative bg-gray-100 border-2 border-dashed border-gray-500 rounded-md h-40 flex items-center justify-center cursor-pointer">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleAddImages}
                                />
                                <div className="text-center">
                                    <div className="text-gray-500 text-3xl">
                                        +
                                    </div>
                                    <p className="text-gray-500">
                                        Add More Images
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative h-24 w-24 mr-2"
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Uploaded ${index}`}
                                            className="object-cover w-full h-full rounded-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                confirmRemoveImage(index)
                                            }
                                            className="absolute top-0 right-0 text-red-600"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`bg-green-600 text-white px-4 py-2 rounded-md ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Updating...' : 'Update Facilities'}
                        </button>
                    </div>
                </form>

                {/* Confirmation Modal */}
                {isModalOpen && (
                    <ConfirmationModal
                        message="Are you sure you want to remove this image?"
                        onConfirm={handleRemoveImage}
                        onCancel={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </FormProvider>
    )
}

export default EditFacilitiesPage
