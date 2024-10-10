import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import uploadImage from '../../../helpers/imageUpload' // Assuming this is for image uploads
import uploadVideo from '../../../helpers/videoUpload' // Assuming this is for video uploads
import { useParams, useNavigate } from 'react-router-dom' // For getting the banner ID from URL and navigating
import {
    useGetBannerByIdQuery,
    useUpdateBannerMutation,
} from '../../../redux/slices/bannerSlice'
import InputField from '../../_components/shared/InputField'
import Loader from '../../../components/shared/Loader'

const EditBannerPage = () => {
    const { id } = useParams() // Get banner ID from URL
    const navigate = useNavigate() // Initialize navigate hook

    // Fetch banner data by ID
    const { data: bannerData, isLoading: isLoadingBanner } =
        useGetBannerByIdQuery(id)
    const [updateBanner, { isLoading: isUpdating }] = useUpdateBannerMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [uploading, setUploading] = useState(false)
    const [mediaFile, setMediaFile] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [type, setType] = useState('image')
    const [status, setStatus] = useState('active')

    // Reset form when banner data is fetched
    useEffect(() => {
        if (bannerData?.doc) {
            reset(bannerData?.doc)
            setImagePreview(bannerData?.doc?.mediaUrl)
            setType(bannerData?.doc?.type)
            setStatus(bannerData?.doc?.status)
        }
    }, [bannerData?.doc, reset])

    // Handle media file change (image or video)
    const handleMediaChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setMediaFile(file) // Store the actual file
            setImagePreview(URL.createObjectURL(file)) // Create a preview for image or video
        }
    }

    // Form submit logic with type check for media upload
    const onSubmit = async (data) => {
        try {
            let mediaUrl = null

            setUploading(true)
            // Check if media file exists, then upload based on type
            if (mediaFile) {
                if (type === 'image' && mediaFile.type.startsWith('image/')) {
                    mediaUrl = await uploadImage(mediaFile, 'dha-images')
                } else if (
                    type === 'video' &&
                    mediaFile.type.startsWith('video/')
                ) {
                    mediaUrl = await uploadVideo(mediaFile, 'dha-videos')
                } else {
                    toast.error(
                        'Please upload a valid image or video file based on the selected type.'
                    )
                    return
                }

                if (!mediaUrl) {
                    toast.error(
                        `${type === 'image' ? 'Image' : 'Video'} upload failed.`
                    )
                    return
                }
            }

            setUploading(false)

            // Prepare the final data to send
            const bannerDataToUpdate = {
                id, // Include the ID for the update
                title: data.title,
                description: data.description,
                type: type,
                mediaUrl: mediaUrl || imagePreview || null, // Include uploaded media URL or existing media URL
                status: status,
            }

            await updateBanner(bannerDataToUpdate).unwrap()

            toast.success('Banner updated successfully!')

            // Reset form and state
            reset()
            setImagePreview(null)
            setMediaFile(null)

            // Navigate to the banners list or any desired page after update
            navigate('/banners/list') // Adjust the route based on your app structure
        } catch (error) {
            console.error('Error updating banner:', error)
            toast.error('Error updating banner.')
            setUploading(false)
        }
    }

    // Handle form reset
    const handleReset = () => {
        reset()
        setImagePreview(null)
        setMediaFile(null)
        setStatus('active')
        setType('image')
    }

    if (isLoadingBanner) {
        return <Loader />
    }

    return (
        <div className="p-4 rounded-md shadow-md m-5">
            <h2 className="text-2xl font-semibold mb-6">Edit Banner</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Section */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Title */}
                        <div className="mb-4">
                            <InputField
                                label="Title"
                                name="title"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Title is required"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <InputField
                                label="Description"
                                name="description"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Description is required"
                            />
                        </div>

                        {/* Status */}
                        <div className="mb-4 mt-4">
                            <label
                                className="block text-[1rem] font-semibold mb-2"
                                htmlFor="status"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Type */}
                        <div className="mb-4">
                            <label
                                className="block text-[1rem] font-semibold mb-2"
                                htmlFor="type"
                            >
                                Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={type}
                                onChange={(e) => {
                                    setType(e.target.value)
                                    setImagePreview(null) // Reset preview when type changes
                                }}
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                        </div>

                        {/* Media File Upload */}
                        <div className="mt-4 w-full">
                            <label
                                className="block text-[1rem] font-medium mb-2"
                                htmlFor="media-upload"
                            >
                                Choose {type === 'image' ? 'Image' : 'Video'}
                            </label>
                            <input
                                type="file"
                                id="media-upload"
                                name="media-upload"
                                accept={
                                    type === 'image' ? 'image/*' : 'video/*'
                                }
                                onChange={handleMediaChange}
                                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer p-2"
                            />
                            {errors.media && (
                                <p className="text-red-600">{errors.media}</p>
                            )}
                        </div>
                    </form>
                </div>

                {/* Media Preview Section */}
                <div className="flex flex-col items-center">
                    <div className="border-2 border-gray-300 rounded-md w-64 h-64 flex items-center justify-center">
                        {imagePreview ? (
                            type === 'image' ? (
                                <img
                                    src={imagePreview}
                                    alt="Media Preview"
                                    className="object-cover h-full w-full rounded-md"
                                />
                            ) : (
                                <video
                                    src={imagePreview}
                                    controls
                                    className="object-cover h-full w-full rounded-md"
                                />
                            )
                        ) : (
                            <img
                                src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                                className="h-64 w-full object-cover"
                                alt="Placeholder"
                            />
                        )}
                    </div>
                </div>
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
                    onClick={handleSubmit(onSubmit)}
                    className="px-4 py-2 bg-primary-500 text-white rounded-md"
                    disabled={uploading || isUpdating}
                >
                    {uploading || isUpdating ? 'Uploading...' : 'Update'}
                </button>
            </div>
        </div>
    )
}

export default EditBannerPage
