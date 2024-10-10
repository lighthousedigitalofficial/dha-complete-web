import React, { useState, useRef } from 'react'
import { FaTrash } from 'react-icons/fa'
import { CiCircleRemove } from 'react-icons/ci'
import { useCreateFacilitiesMutation } from '../../../redux/slices/facilitiesApiSlice'
import { useForm } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import uploadImage from '../../../helpers/imageUpload'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import 'react-toastify/dist/ReactToastify.css'

const AddFacilitiesPage = ({ initialData = {} }) => {
    const navigate = useNavigate() // Get the navigate function
    const {
        handleSubmit,
        register,
        setValue,
        watch,
        formState: { errors },
    } = useForm()

    const [imagePreview, setImagePreview] = useState(initialData.image || null)
    const [mainImage, setMainImage] = useState(initialData.mainImage || '')
    const [images, setImages] = useState(initialData.images || [])
    const [services, setServices] = useState(initialData.services || [])
    const [link, setLink] = useState(initialData.link || '')
    const inputRef = useRef(null)

    const [createFacilities, { isLoading }] = useCreateFacilitiesMutation()

    const onSubmit = async (data) => {
        if (!mainImage) {
            toast.error('Please provide a main image.')
            return
        }

        try {
            const uploadedImages = await Promise.all(
                images.map((image) => uploadImage(image, 'facilities'))
            )
            const uploadedMainImage = await uploadImage(mainImage, 'facilities')

            const { serviceInput, ...formData } = data

            const finalData = {
                ...formData,
                mainImage: uploadedMainImage,
                images: uploadedImages,
                services,
            }

            await createFacilities(finalData).unwrap()
            toast.success('Facilities form submitted successfully!')
            handleReset()
            // Redirect to the facilities list page
            navigate('/facilities/list')
        } catch (error) {
            console.error(error)
            toast.error('There was an error submitting the form.')
        }
    }

    const handleMainImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setMainImage(file)
            const imageUrl = URL.createObjectURL(file)
            setImagePreview(imageUrl)
        }
    }

    const handleAddImages = (e) => {
        const files = Array.from(e.target.files)
        setImages((prevImages) => [...prevImages, ...files])
    }

    const handleReset = () => {
        setValue('title', '')
        setValue('description', '')
        setMainImage('')
        setImages([])
        setServices([])
        setLink('')
        setImagePreview(null)
    }

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index))
        toast.info('Image removed')
    }

    const handleAddService = () => {
        const inputValue = watch('serviceInput')
        if (inputValue && !services.includes(inputValue.trim())) {
            setServices((prevServices) => [...prevServices, inputValue.trim()])
            setValue('serviceInput', '')
            if (inputRef.current) {
                inputRef.current.focus()
            }
            toast.success('Service added successfully')
        }
    }

    const handleRemoveService = (service) => {
        setServices((prevServices) => prevServices.filter((s) => s !== service))
        toast.info('Service removed')
    }

    return (
        <div className="w-[90%] mx-auto bg-white p-8 rounded-md shadow-md">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-6">Add Facilities</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Title Field */}
                    <InputField
                        label="Title"
                        name="title"
                        register={register}
                        required
                        errors={errors}
                        errorMessage="Title is required"
                        className="text-[1rem]"
                    />

                    {/* Link Field */}
                    <InputField
                        label="Link"
                        name="link"
                        register={register}
                        required
                        errors={errors}
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
                                ref={inputRef}
                                {...register('serviceInput')}
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
                            {...register('description')}
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
                                onChange={handleMainImageChange}
                                required
                            />
                            <div className="text-center">
                                <div className="text-gray-500 text-3xl">+</div>
                                <p className="text-gray-500">Add Main Image</p>
                            </div>
                        </div>
                        {imagePreview && (
                            <div className="mt-4">
                                <img
                                    src={imagePreview}
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
                                <div className="text-gray-500 text-3xl">+</div>
                                <p className="text-gray-500">Add Images</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative group border border-gray-300 rounded-md overflow-hidden"
                                >
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index}`}
                                        className="object-cover w-full h-32"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddFacilitiesPage
