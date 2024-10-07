import React, { useState } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";

const AddPropertyDealersPage = ({ initialData = {}, affiliates = [] }) => {
  const [agency, setAgency] = useState(initialData.agency || "");
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [affiliateId, setAffiliateId] = useState(initialData.affiliateId || "");

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!agency) {
      newErrors.agency = "Agency is required.";
    }
    if (!fullName) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!address) {
      newErrors.address = "Address is required.";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!affiliateId) {
      newErrors.affiliateId = "Affiliate is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation Errors:", validationErrors);
      return;
    }

    const formData = {
      agency,
      fullName,
      address,
      phone,
      affiliateId,
    };

    // Log the form data to the console
    console.log("Property Dealer Data:", formData);
    alert("Property Dealer form submitted!");

    // Optionally reset the form after submission
    handleReset();
  };

  const handleReset = () => {
    setAgency("");
    setFullName("");
    setAddress("");
    setPhone("");
    setAffiliateId("");
  };

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Property Dealers</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Agency Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="agency"
              >
                Agency
              </label>
              <FormInput
                type="text"
                id="agency"
                name="agency"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                placeholder="Enter Agency Name"
                required
              />
            </div>

            {/* Full Name Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <FormInput
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                required
              />
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <FormInput
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <FormInput
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                required
              />
            </div>

            {/* Affiliate ID Dropdown */}
            <div className="mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="affiliateId"
              >
                Affiliate
              </label>
              <select
                id="affiliateId"
                name="affiliateId"
                value={affiliateId}
                onChange={(e) => setAffiliateId(e.target.value)}
                className="block w-full border border-gray-300 p-2 rounded-md"
                required
              >
                <option value="" disabled>
                  Select Affiliate
                </option>
                {affiliates.map((affiliate) => (
                  <option key={affiliate.id} value={affiliate.id}>
                    {affiliate.name}
                  </option>
                ))}
              </select>
            </div>
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

export default AddPropertyDealersPage;
