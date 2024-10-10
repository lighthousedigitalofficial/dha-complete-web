import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import { useCreatePropertyDealerMutation } from '../../../redux/slices/propertyDealerSlice'
import { useGetAffiliatesQuery } from '../../../redux/slices/affiliates'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddPropertyDealersPage = ({ initialData = {} }) => {
    const methods = useForm()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = methods
    const [createPropertyDealer, { isLoading }] =
        useCreatePropertyDealerMutation()
    const navigate = useNavigate()

    // Fetch affiliates
    const {
        data: affiliates,
        isLoading: isLoadingAffiliates,
        error,
    } = useGetAffiliatesQuery()

    // Ensure affiliates is an array
    const affiliateList = Array.isArray(affiliates?.doc) ? affiliates.doc : []

    // Handle form submission
    const handleFormSubmit = async (data) => {
        try {
            await createPropertyDealer(data).unwrap()
            toast.success('Property Dealer added successfully!')
            reset() // Reset the form
            navigate('/property-dealers/list') // Redirect after successful submission
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error(error.data.message || 'Failed to add Property Dealer.')
        }
    }

    if (isLoadingAffiliates) return <div>Loading affiliates...</div>
    if (error) {
        console.error('Error loading affiliates:', error.message)
        return <div>Error loading affiliates: {error.message}</div>
    }

    return (
        <FormProvider {...methods}>
            <div className="w-xl mx-auto bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">Add Property Dealer</h2>

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
                        disabled={isLoading}
                    >
                        {isLoading ? 'Adding...' : 'Add Property Dealer'}
                    </button>
                </form>
            </div>
        </FormProvider>
    )
}

export default AddPropertyDealersPage
