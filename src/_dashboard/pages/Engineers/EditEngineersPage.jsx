import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import {
    useGetEngineerByIdQuery,
    useUpdateEngineerMutation,
} from '../../../redux/slices/engineers'
import { useGetAffiliatesQuery } from '../../../redux/slices/affiliates'
import toast from 'react-hot-toast'
import { useParams, useNavigate } from 'react-router-dom' // Import useParams and useNavigate
import Loader from '../../../components/shared/Loader'

const EditEngineersPage = () => {
    const { id } = useParams() // Get the engineer ID from the URL
    const navigate = useNavigate()

    const {
        data: getEngineerById,
        isLoading: isLoadingEngineer,
        refetch,
    } = useGetEngineerByIdQuery(id)
    const [updateEngineer, { isLoading }] = useUpdateEngineerMutation()

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: useMemo(() => {
            return getEngineerById?.doc || {}
        }, [getEngineerById?.doc]),
    })

    useEffect(() => {
        if (getEngineerById?.doc) {
            methods.reset(getEngineerById.doc) // Reset form with existing data
        }
    }, [getEngineerById, methods])

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
    } = methods

    const { data: affiliates, isLoading: isLoadingAffiliates } =
        useGetAffiliatesQuery()

    const affiliateList = Array.isArray(affiliates?.doc) ? affiliates?.doc : []
    const status = watch('status', 'active')

    const onSubmit = async (data) => {
        try {
            const formData = {
                id,
                registerNumber: data.registerNumber,
                firmName: data.firmName,
                engineerName: data.engineerName,
                address: data.address,
                phone: data.phone,
                status: data.status,
                affiliateId: data.affiliateId,
            }

            // Perform the update
            await updateEngineer(formData).unwrap()
            toast.success('Engineer updated successfully!')
            refetch()
            reset()

            navigate('/engineers/list')
        } catch (error) {
            // Log the error for better debugging
            console.error('Update failed:', error)
            toast.error('Failed to update the engineer. Please try again.')
        }
    }

    const toggleStatus = () => {
        setValue('status', status === 'active' ? 'inactive' : 'active')
    }

    return isLoadingEngineer ? (
        <Loader />
    ) : getEngineerById && getEngineerById?.doc ? (
        <div className="border border-primary bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Edit Engineer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        label="Registered Number"
                        name="registerNumber"
                        register={register}
                        required
                        errors={errors}
                        type="text"
                    />
                    <InputField
                        label="Firm Name"
                        name="firmName"
                        register={register}
                        required
                        errors={errors}
                        type="text"
                    />
                    <InputField
                        label="Engineer Name"
                        name="engineerName"
                        register={register}
                        required
                        errors={errors}
                        type="text"
                    />
                    <InputField
                        label="Address"
                        name="address"
                        register={register}
                        required
                        errors={errors}
                        type="text"
                    />
                    <InputField
                        label="Phone"
                        name="phone"
                        register={register}
                        required
                        errors={errors}
                        type="text"
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <div className="flex items-center">
                            <span className="mr-2">
                                {status === 'active' ? 'Active' : 'Inactive'}
                            </span>
                            <button
                                type="button"
                                onClick={toggleStatus}
                                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none ${
                                    status === 'active'
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                }`}
                            >
                                <span
                                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                                        status === 'active'
                                            ? 'translate-x-6'
                                            : 'translate-x-1'
                                    }`}
                                />
                            </button>
                        </div>
                        <input
                            type="hidden"
                            {...register('status', {
                                required: 'Status is required',
                            })}
                        />
                        {errors.status && (
                            <p className="text-red-500 text-sm">
                                {errors.status.message}
                            </p>
                        )}
                    </div>

                    {/* Affiliate Dropdown */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Affiliate ID
                        </label>
                        <select
                            {...register('affiliateId', {
                                required: 'Affiliate ID is required',
                            })}
                            className="block px-4 py-2 w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Affiliate</option>
                            {isLoadingAffiliates ? (
                                <option>Loading...</option>
                            ) : (
                                affiliateList.map((affiliate) => (
                                    <option
                                        key={affiliate._id}
                                        value={affiliate._id}
                                    >
                                        {affiliate.name}
                                    </option>
                                ))
                            )}
                        </select>
                        {errors.affiliateId && (
                            <p className="text-red-500 text-sm">
                                {errors.affiliateId.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                        disabled={isLoading || isLoadingEngineer}
                    >
                        {isLoading ? 'Updating...' : 'Update Engineer'}
                    </button>
                </div>
            </form>
        </div>
    ) : (
        <p>Importance Engineer data not found.</p>
    )
}

export default EditEngineersPage
