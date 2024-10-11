import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import uploadVideo from '../../../helpers/videoUpload'
import {
    useUpdateVideoMutation,
    useGetVideoQuery,
} from '../../../redux/slices/videosApiSlice'
import { useGetMediaQuery } from '../../../redux/slices/mediaApiSlice'
import InputField from '../../_components/shared/InputField'
import Loader from '../../../components/shared/Loader'

const EditVideoPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const methods = useForm()

    const { data: video, isLoading: isVideoLoading } = useGetVideoQuery(id)
    const { data: medias, isLoading: isMediasLoading } = useGetMediaQuery()
    const [updateVideo, { isLoading: isUpdating }] = useUpdateVideoMutation()

    const [videoPreview, setVideoPreview] = useState(null)
    const [initialValues, setInitialValues] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [mediaFile, setMediaFile] = useState(null)

    useEffect(() => {
        if (video?.doc) {
            const initialFormValues = {
                title: video.doc.title,
                media: video.doc.mediaId,
                video: video.doc.url,
            }
            methods.reset(initialFormValues)
            setVideoPreview(video.doc.url || '')
            setInitialValues(initialFormValues)
        }
    }, [video, methods])

    const handleFormSubmit = async (data) => {
        try {
            setUploading(true)
            let videoUrl = video.doc.url

            // If a new video file is selected, upload it
            if (mediaFile) {
                videoUrl = await uploadVideo(mediaFile, 'video_uploads')
            }

            const videoData = {
                title: data.title,
                url: videoUrl,
                mediaId: data.media,
            }

            await updateVideo({ id, ...videoData }).unwrap()
            toast.success('Video updated successfully!')
            navigate('/videos/list')
        } catch (error) {
            toast.error('Failed to update the video. Please try again.')
        } finally {
            setUploading(false)
        }
    }

    const handleVideoChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const videoURL = URL.createObjectURL(file)
            setVideoPreview(videoURL)
            setMediaFile(file) // Store the selected file
        }
    }

    const resetForm = () => {
        methods.reset(initialValues) // Reset form to initial values
        setVideoPreview(initialValues?.video || null)
        setMediaFile(null) // Clear the selected file
    }

    // Clean up URL object after the preview is no longer needed
    useEffect(() => {
        return () => {
            if (videoPreview) {
                URL.revokeObjectURL(videoPreview)
            }
        }
    }, [videoPreview])

    if (isVideoLoading || isMediasLoading) {
        return <Loader />
    }

    return isVideoLoading ? (
        <Loader />
    ) : video && video?.doc ? (
        <FormProvider {...methods}>
            <div className="p-4 rounded-md shadow-md m-5 bg-white">
                <h2 className="text-2xl font-semibold mb-6">Update Video</h2>
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

                        {/* Select Media */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Select Media
                            </label>
                            <select
                                {...methods.register('media', {
                                    required: 'Media is required',
                                })}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            >
                                <option value="">Select Media</option>
                                {medias?.doc?.map((media) => (
                                    <option key={media._id} value={media._id}>
                                        {media.title}
                                    </option>
                                ))}
                            </select>
                            {methods.formState.errors.media && (
                                <p className="text-red-500 text-sm">
                                    {methods.formState.errors.media.message}
                                </p>
                            )}
                        </div>

                        {/* Video Upload */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Upload Video
                            </label>
                            <input
                                type="file"
                                accept="video/*"
                                {...methods.register('video')}
                                onChange={handleVideoChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                        </div>

                        {/* Video Preview */}
                        {videoPreview && (
                            <div className="flex flex-col items-center">
                                <div className="border-2 border-gray-300 rounded-md w-full md:w-64 h-64 flex items-center justify-center">
                                    <video
                                        className="object-cover h-full w-full rounded-md"
                                        controls
                                        src={videoPreview}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-6 gap-2">
                        <button
                            type="reset"
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                            onClick={resetForm}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
                            disabled={uploading || isUpdating}
                        >
                            {uploading || isUpdating
                                ? 'Updating...'
                                : 'Update Video'}
                        </button>
                    </div>
                </form>
            </div>
        </FormProvider>
    ) : (
        <p>Video data not found.</p>
    )
}

export default EditVideoPage
