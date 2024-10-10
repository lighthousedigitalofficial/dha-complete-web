import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import toast from 'react-hot-toast'

import {
    useGetPurchasePropertyByIdQuery,
    useUpdatePurchasePropertyMutation,
} from '../../../redux/slices/purchaseProperties'
import { useParams, useNavigate } from 'react-router-dom'

const EditPurchaseProperty = () => {
    const { id } = useParams()
    const navigate = useNavigate() // Navigate after successful update
    const {
        data: propertyData,
        isLoading: isLoadingProperty,
        refetch,
    } = useGetPurchasePropertyByIdQuery(id)

    const [updatePurchaseProperty, { isLoading, isError }] =
        useUpdatePurchasePropertyMutation()

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: useMemo(() => {
            return propertyData?.doc || {}
        }, [propertyData?.doc]),
    })

    useEffect(() => {
        if (propertyData?.doc) {
            methods.reset(propertyData.doc) // Reset form with existing data
        }
    }, [propertyData, methods])

    // Handle form submit
    const handleFormSubmit = async (data) => {
        try {
            const formData = {
                id,
                name: data.name,
                cnic: data.cnic, // Include CNIC
                phone: data.phone,
                email: data.email,
                type: data.type, // Include Type
                // requirement: data.requirement,
                phase: data.phase,
                size: data.size,
                price: data.price, // Change budget to price
                status: data.status, // Include Status
            }

            await updatePurchaseProperty(formData).unwrap()
            toast.success('Property updated successfully!')
            refetch()
            navigate('/purchase-property/list') // Navigate back after successful edit
            methods.reset() // Reset form after successful submission
        } catch (error) {
            toast.error('Failed to update the property. Please try again.')
        }
    }

    return (
        <FormProvider {...methods}>
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                    Update Purchase Property
                </h2>
                {isLoadingProperty ? (
                    <p>Loading...</p> // Loading state while fetching data
                ) : (
                    <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                pattern={{
                                    value: /^[0-9]{10}$/, // Example regex for phone number validation
                                    message: 'Phone number must be 10 digits',
                                }}
                            />
                            <InputField
                                label="Email"
                                name="email"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Email is required"
                                pattern={{
                                    value: /^\S+@\S+$/i,
                                    message: 'Email format is invalid',
                                }}
                            />
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
                            <InputField
                                label="Phase"
                                name="phase"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Phase is required"
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
                                label="Price"
                                name="price"
                                register={methods.register}
                                required
                                errors={methods.formState.errors}
                                errorMessage="Price is required"
                                type="number" // Changed to number for better UX
                            />
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
                                    <option value="">Select Status</option>
                                    <option value="available">Available</option>
                                    <option value="sold">Sold</option>
                                    <option value="sold">Pending</option>
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
                        <div className="flex justify-end items-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary-500 text-white rounded-md"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? 'Updating...'
                                    : 'Update Purchase Property'}
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
    )
}

export default EditPurchaseProperty
