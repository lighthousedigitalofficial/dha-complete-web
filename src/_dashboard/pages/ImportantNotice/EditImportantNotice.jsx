import { useState, useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import uploadImage from '../../../helpers/imageUpload'
import {
    useGetNoticeQuery,
    useUpdateNoticeMutation,
} from '../../../redux/slices/noticesApiSlice'
import InputField from '../../_components/shared/InputField'
import Loader from '../../../components/shared/Loader'

const EditImportantNotice = () => {
    const { id } = useParams()
    const { data: notice, isLoading, refetch } = useGetNoticeQuery(id)
    const [updateNotice, { isLoading: isUpdating, isError }] =
        useUpdateNoticeMutation()

    const [imageFile, setImageFile] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: useMemo(() => {
            return notice?.doc || {}
        }, [notice?.doc]),
    })

    useEffect(() => {
        if (notice?.doc) {
            methods.reset(notice?.doc)
            setImagePreview(notice?.doc?.image || '')
        }
    }, [notice, methods])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    // Form submit logic
    const handleFormSubmit = async (data) => {
        try {
            let imageUrl = notice?.image || null

            if (imageFile) {
                imageUrl = await uploadImage(imageFile)
                if (!imageUrl) {
                    toast.error('Image upload failed')
                    return
                }
            }

            // Prepare the updated notice data
            const noticeData = {
                id,
                title: data.title,
                description: data.description,
                image: imageUrl || data.imageUrl, // Use the new or existing image
            }

            await updateNotice(noticeData).unwrap()
            toast.success('Notice updated successfully')
            refetch()
            methods.reset() // Reset form after successful submission
            setImagePreview(null) // Clear image preview
        } catch (error) {
            toast.error('Error updating notice')
        }
    }

    return isLoading ? (
        <Loader />
    ) : notice && notice?.doc ? (
        <FormProvider {...methods}>
            <div className="p-4 rounded-md shadow-md m-5 bg-white">
                <h2 className="text-2xl font-semibold mb-6">
                    Update Important Notice
                </h2>
                <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title Input */}
                        <InputField
                            label="Title"
                            name="title"
                            register={methods.register}
                            required
                            errors={methods.formState.errors}
                            errorMessage="Title is required"
                        />

                        {/* Description */}
                        <InputField
                            label="Description"
                            name="description"
                            register={methods.register}
                            required
                            errors={methods.formState.errors}
                            errorMessage="Description is required"
                            textarea // Making it a textarea
                        />

                        {/* Image Upload */}
                        <div className="mt-4 w-full">
                            <label
                                className="block text-[1rem] font-semibold mb-2"
                                htmlFor="file-upload"
                            >
                                Choose Image
                            </label>
                            <input
                                type="file"
                                id="file-upload"
                                accept="image/*"
                                onChange={handleImageChange}
                                className={`block w-full text-sm text-gray-500 border ${
                                    methods.formState.errors.image
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } rounded-md cursor-pointer p-2 focus:outline-none focus:ring focus:ring-blue-200`}
                            />
                            {methods.formState.errors.image && (
                                <p className="text-red-500 text-sm mt-1">
                                    Image is required
                                </p>
                            )}
                        </div>

                        {/* Image Preview */}
                        <div className="flex flex-col items-center">
                            <div className="border-2 border-gray-300 rounded-md w-64 h-64 flex items-center justify-center">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Image Preview"
                                        className="object-cover h-full w-full rounded-md"
                                    />
                                ) : (
                                    <img
                                        src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                                        className="h-64 w-full"
                                        alt="Placeholder"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-6 gap-2">
                        <button
                            type="reset"
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                            onClick={() => {
                                methods.reset()
                                setImagePreview(null)
                            }}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
                            disabled={isUpdating}
                        >
                            {isUpdating ? 'Updating...' : 'Update Notice'}
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
        <p>Importance Notice data not found.</p>
    )
}

export default EditImportantNotice
