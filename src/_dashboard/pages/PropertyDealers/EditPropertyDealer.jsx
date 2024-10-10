import React, { useEffect } from 'react'
import {
    useUpdatePropertyDealerMutation,
    useGetPropertyDealerQuery,
} from '../../../redux/slices/propertyDealerSlice'
import { useGetAffiliatesQuery } from '../../../redux/slices/affiliates'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import toast from 'react-hot-toast'

const EditPropertyDealerPage = () => {
    const { id } = useParams() // Get property dealer ID from URL params
    const navigate = useNavigate() // Navigate after successful update

    const methods = useForm({
        mode: 'onBlur',
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods

    const {
        data: propertyDealer,
        isLoading: isPropertyDealerLoading,
        isError: isPropertyDealerError,
    } = useGetPropertyDealerQuery(id) // Fetch property dealer data

    const [updatePropertyDealer, { isLoading: isUpdating }] =
        useUpdatePropertyDealerMutation() // Property dealer update mutation hook

    const {
        data: affiliates,
        isLoading: isLoadingAffiliates,
        error: affiliatesError,
    } = useGetAffiliatesQuery() // Fetch affiliates

    // Ensure affiliates is an array
    const affiliateList = Array.isArray(affiliates?.doc) ? affiliates.doc : []

    // Effect to reset form when property dealer data is fetched
    useEffect(() => {
        if (propertyDealer) {
            console.log('Resetting form with:', propertyDealer)
            reset(propertyDealer) // Reset form with existing data
        }
    }, [propertyDealer, reset])

    // Handle form submission
    const handleFormSubmit = async (data) => {
        try {
            await updatePropertyDealer({ id, ...data }).unwrap() // Include ID and data for update
            toast.success('Property Dealer updated successfully!')
            navigate('/property-dealers/list') // Redirect after successful submission
        } catch (error) {
            console.error('Error updating property dealer:', error)
            toast.error(
                error.data.message || 'Failed to update Property Dealer.'
            )
        }
    }

    if (isPropertyDealerLoading)
        return <div>Loading property dealer data...</div>
    if (isPropertyDealerError) {
        console.error(
            'Error loading property dealer data:',
            isPropertyDealerError.message
        )
        return (
            <div>
                Error loading property dealer data:{' '}
                {isPropertyDealerError.message}
            </div>
        )
    }

    if (isLoadingAffiliates) return <div>Loading affiliates...</div>
    if (affiliatesError) {
        console.error('Error loading affiliates:', affiliatesError.message)
        return <div>Error loading affiliates: {affiliatesError.message}</div>
    }

    return (
        <FormProvider {...methods}>
            <div className="w-xl mx-auto bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                    Edit Property Dealer
                </h2>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="w-full flex gap-4 mb-4">
                        <div className="w-1/2">
                            <InputField
                                label="Agency"
                                name="agency"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Agency is required"
                                placeholder="Enter Agency Name"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Full Name"
                                name="fullName"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Full Name is required"
                                placeholder="Enter Full Name"
                            />
                        </div>
                    </div>

                    <div className="w-full flex gap-4 mb-4">
                        <div className="w-1/2">
                            <InputField
                                label="Address"
                                name="address"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Address is required"
                                placeholder="Enter Address"
                            />
                        </div>
                        <div className="w-1/2">
                            <InputField
                                label="Phone"
                                name="phone"
                                register={register}
                                required
                                errors={errors}
                                errorMessage="Phone is required"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                    </div>

                    {/* Affiliate Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Affiliate
                        </label>
                        <select
                            {...register('affiliateId', {
                                required: 'Affiliate is required',
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            <option value="" disabled>
                                Select Affiliates
                            </option>
                            {affiliateList.map((affiliate) => (
                                <option
                                    key={affiliate._id}
                                    value={affiliate._id}
                                >
                                    {affiliate.name}
                                </option>
                            ))}
                        </select>
                        {errors.affiliateId && (
                            <p className="text-red-500 text-sm">
                                {errors.affiliateId.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                        disabled={isUpdating}
                    >
                        {isUpdating ? 'Updating...' : 'Update Property Dealer'}
                    </button>
                </form>
            </div>
        </FormProvider>
    )
}

export default EditPropertyDealerPage
