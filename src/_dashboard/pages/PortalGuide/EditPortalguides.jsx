import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import {
    useGetGuideQuery,
    useUpdateGuideMutation,
} from '../../../redux/slices/guidesSlice'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../components/shared/Loader'

const EditPortalguides = () => {
    const { id } = useParams() // Get the guide ID from the URL
    const navigate = useNavigate()
    const methods = useForm()
    const {
        data: guideData,
        isLoading: isLoadingGuide,
        refetch,
    } = useGetGuideQuery(id) // Fetch guide data by ID

    const [updateGuide, { isLoading, isError }] = useUpdateGuideMutation()

    // Prefill the form with the fetched guide data
    useEffect(() => {
        if (guideData?.doc) {
            // Use optional chaining to access 'doc'
            methods.reset({
                title: guideData.doc.title,
                author: guideData.doc.author,
                content: guideData.doc.content,
                video: guideData.doc.video,
                status: guideData.doc.status,
            })
        }
    }, [guideData, methods])

    // Handle form submission
    const handleFormSubmit = async (data) => {
        try {
            // Call the mutation to update the guide
            await updateGuide({ id, ...data }).unwrap()
            toast.success('Portal updated successfully!')
            refetch() // Refetch the data after successful update
            navigate('/portal-guide/list')
        } catch (error) {
            toast.error('Failed to update the portal. Please try again.')
        }
    }

    return isLoadingGuide ? (
        <Loader />
    ) : guideData && guideData?.doc ? (
        <FormProvider {...methods}>
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">Update Portal</h2>

                {isLoadingGuide ? (
                    <p>Loading...</p>
                ) : (
                    <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <InputField
                                label="Title"
                                name="title"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Title is required"
                            />
                            <InputField
                                label="Author"
                                name="author"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Author is required"
                            />
                            <InputField
                                label="Content"
                                name="content"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Content is required"
                            />
                            <InputField
                                label="Video URL"
                                name="video"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Video URL is required"
                            />

                            {/* Status Dropdown */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    {...methods.register('status', {
                                        required: 'Status is required',
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                >
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
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

                        {/* Action Buttons */}
                        <div className="flex justify-end items-center mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary-500 text-white rounded-md"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Updating...' : 'Update Portal'}
                            </button>
                        </div>

                        {isError && (
                            <p className="text-red-500 text-sm mt-2">
                                Something went wrong, please try again.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </FormProvider>
    ) : (
        <p>Portal Guide data not found.</p>
    )
}

export default EditPortalguides
