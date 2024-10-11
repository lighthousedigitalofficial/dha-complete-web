import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import uploadVideo from '../../../helpers/videoUpload' // For uploading videos
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
    const { isLoading: isMediasLoading } = useGetMediaQuery()
    const [updateVideo, { isLoading: isUpdating }] = useUpdateVideoMutation()

    const [videoPreview, setVideoPreview] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [mediaFile, setMediaFile] = useState(null) // Store the actual file
    const [initialValues, setInitialValues] = useState({})

    // Load initial video data when component mounts
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

    const handleVideoChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setMediaFile(file) // Store the actual file
            setVideoPreview(URL.createObjectURL(file)) // Create a preview for the video
        }
    }

    const handleFormSubmit = async (data) => {
        try {
            setUploading(true)
            let videoUrl = video.doc.url

            // Check if a new video file is selected
            if (mediaFile) {
                videoUrl = await uploadVideo(mediaFile, 'video_uploads')
            }

            // Prepare the updated video data
            const videoData = {
                title: data.title,
                url: videoUrl,
                mediaId: data.media,
            }

            // Call the API to update the video
            await updateVideo({ id, ...videoData }).unwrap()
            toast.success('Video updated successfully!')
            navigate('/videos/list')
        } catch (error) {
            console.error('Error updating video:', error)
            toast.error('Failed to update the video. Please try again.')
        } finally {
            setUploading(false)
        }
    }

    if (isVideoLoading || isMediasLoading) {
        return <Loader />
    }

    return (
        <div className="p-4 rounded-md shadow-md m-5">
            <h2 className="text-2xl font-semibold mb-6">Edit Video</h2>

            <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <div className="mb-4">
                    <InputField
                        label="Title"
                        name="title"
                        register={methods.register}
                        required
                        errors={methods.formState.errors}
                        errorMessage="Title is required"
                    />
                </div>

                {/* Media File Upload */}
                <div className="mt-4 w-full">
                    <label
                        className="block text-[1rem] font-medium mb-2"
                        htmlFor="video-upload"
                    >
                        Choose Video
                    </label>
                    <input
                        type="file"
                        id="video-upload"
                        accept="video/*"
                        onChange={handleVideoChange}
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer p-2"
                    />
                </div>

                {/* Video Preview Section */}
                <div className="mt-4">
                    <h3 className="font-semibold mb-2">Video Preview</h3>
                    {videoPreview ? (
                        <video
                            src={videoPreview}
                            controls
                            className="h-72 object-cover w-full rounded-md"
                        />
                    ) : (
                        <p>No video selected</p>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-6 gap-2">
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        onClick={() => methods.reset(initialValues)}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-primary-500 text-white rounded-md"
                        disabled={uploading || isUpdating}
                    >
                        {uploading || isUpdating ? 'Uploading...' : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditVideoPage
