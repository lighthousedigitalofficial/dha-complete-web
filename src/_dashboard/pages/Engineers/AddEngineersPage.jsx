import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../shared/Inputfield';

const EngineersForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const status = watch('status', 'active');

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log('Form Data:', data);
  };

  const toggleStatus = () => {
    setValue('status', status === 'active' ? 'inactive' : 'active');
  };

  return (
    <div className="border border-primary bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Engineer</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Registered Number"
          name="registeredNumber"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <InputField
          label="Firm Name"
          name="firmName"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <InputField
          label="Engineer Name"
          name="engineerName"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="flex items-center">
            <span className="mr-2">{status === 'active' ? 'Active' : 'Inactive'}</span>
            <button
              type="button"
              onClick={toggleStatus}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none ${status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${status === 'active' ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
          <input
            type="hidden"
            {...register('status', { required: 'Status is required' })}
          />
          {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
        </div>
        <InputField
          label="Affiliate ID"
          name="affiliateId"
          register={register}
          required
          errors={errors}
          type='text'
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white rounded-md"
        >
          Add Engineer
        </button>
      </form>
    </div>
  );
};

export default EngineersForm;