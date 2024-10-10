import { useForm } from 'react-hook-form'
import InputField from '../../_components/shared/InputField'
import { useCreateEngineerMutation } from '../../../redux/slices/engineers'
import { useGetAffiliatesQuery } from '../../../redux/slices/affiliates'
import toast from 'react-hot-toast'

const EngineersForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
    } = useForm()

    const [createEngineer, { isLoading }] = useCreateEngineerMutation()

    const { data: affiliates, isLoading: isLoadingAffiliates } =
        useGetAffiliatesQuery()

    const affiliateList = Array.isArray(affiliates?.doc) ? affiliates.doc : []

    const status = watch('status', 'active')

    const onSubmit = async (data) => {
        try {
            await createEngineer(data).unwrap()
            // Show success message and reset the form
            toast.success('Engineer added successfully!')
            reset() // Reset the form fields
        } catch (err) {
            console.error('Failed to add engineer:', err)
            toast.error(err.data.message || 'Failed to add engineer')
        }
    }

    const toggleStatus = () => {
        setValue('status', status === 'active' ? 'inactive' : 'active')
    }

    return (
        <div className="border border-primary bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Engineer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
                    disabled={isLoading}
                >
                    {isLoading ? 'Adding...' : 'Add Engineer'}
                </button>
            </form>
        </div>
    )
}

export default EngineersForm
