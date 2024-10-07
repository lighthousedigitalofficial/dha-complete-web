import React, { useState } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddAffiliatesPage = ({ initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [status, setStatus] = useState(initialData.status || "active");

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Affiliate name is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        name,
        status,
      };
      console.log("Affiliate Data:", formData);
      alert("Affiliate form submitted!");
    }
  };

  const handleReset = () => {
    setName("");
    setStatus("active");
    setErrors({});
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Affiliates</h2>

      <div className="grid grid-cols-1 gap-6">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-[1rem] font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Affiliate Name"
              required
            />
          </div>

          {/* Status Field */}
          <div className="mb-4">
            <label
              className="block text-[1rem] font-semibold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 gap-2">
            <button
              type="reset"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 mr-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAffiliatesPage;
