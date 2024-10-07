import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import InputField from '../../shared/Inputfield';

const SalePropertyForm = ({ onSubmit }) => {
  const methods = useForm();
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    setUploadedDocument(URL.createObjectURL(file));
    methods.setValue('document', file);
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Sale Property</h2>
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
            label="Plot Number"
            name="plotNum"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Plot Number is required"
          />
          <InputField
            label="Street Number"
            name="streetNum"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Street Number is required"
          />
          <InputField
            label="Sector"
            name="sector"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Sector is required"
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
            label="Phase"
            name="phase"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Phase is required"
          />
          <InputField
            label="Demand"
            name="demand"
            register={methods.register}
            required
            errors={methods.formState.errors}
            errorMessage="Demand is required"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              {...methods.register('type', { required: 'Type is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="shop">Shop</option>
              <option value="apartment">Apartment</option>
            </select>
            {methods.formState.errors.type && <p className="text-red-500 text-sm">{methods.formState.errors.type.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Document</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleDocumentUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {uploadedDocument && (
              <div className="mt-2">
                <a href={uploadedDocument} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Uploaded Document</a>
              </div>
            )}
            {methods.formState.errors.document && <p className="text-red-500 text-sm">{methods.formState.errors.document.message}</p>}
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
            Add Sale Property
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

SalePropertyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SalePropertyForm;