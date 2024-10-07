import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import InputField from '../../shared/Inputfield';

const RegistrationPropertyForm = ({ onSubmit }) => {
  const methods = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register Property</h2>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputField
            label="Name"
            name="name"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Name is required"
          />
          <InputField
            label="Phone"
            name="phone"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Phone is required"
          />
          <InputField
            label="Email"
            name="email"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Email is required"
          />
          <InputField
            label="Country"
            name="country"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Country is required"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Requirement</label>
            <select
              {...methods.register('requirement', { required: 'Requirement is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Requirement</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="shop">Shop</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
            {methods.formState.errors.requirement && <p className="text-red-500 text-sm">{methods.formState.errors.requirement.message}</p>}
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
            label="Budget Price"
            name="budgetPrice"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Budget Price is required"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Remarks</label>
            <textarea
              {...methods.register('remarks')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              {...methods.register('status', { required: 'Status is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {methods.formState.errors.status && <p className="text-red-500 text-sm">{methods.formState.errors.status.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md"
          >
            Register Property
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

RegistrationPropertyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationPropertyForm;