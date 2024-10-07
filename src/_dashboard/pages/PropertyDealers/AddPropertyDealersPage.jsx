import React, { useState, useEffect } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";
import { useCreatePropertyDealerMutation } from "../../../redux/slices/propertyDealerSlice";
import { useGetAffiliatesQuery } from "../../../redux/slices/affiliates";

const AddPropertyDealersPage = ({ initialData = {} }) => {
  const [agency, setAgency] = useState(initialData.agency || "");
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [affiliateId, setAffiliateId] = useState(initialData.affiliateId || "");

  const [createPropertyDealer, { isLoading: isCreating }] = useCreatePropertyDealerMutation();

  // Fetch affiliates
  const {
    data: affiliates,
    isLoading: isLoadingAffiliates,
    error,
  } = useGetAffiliatesQuery();

  // Ensure affiliates is an array
  const affiliateList = Array.isArray(affiliates?.doc) ? affiliates.doc : [];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      agency,
      fullName,
      address,
      phone,
      affiliateId,
    };

    try {
      await createPropertyDealer(formData).unwrap();
      alert("Property Dealer form submitted!");
      handleReset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleReset = () => {
    setAgency("");
    setFullName("");
    setAddress("");
    setPhone("");
    setAffiliateId("");
  };

  if (isLoadingAffiliates) return <div>Loading affiliates...</div>;
  if (error) {
    console.error("Error loading affiliates:", error.message);
    return <div>Error loading affiliates: {error.message}</div>;
  }

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Add Property Dealer</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agency Field */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="agency">
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
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="fullName">
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
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="address">
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
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="phone">
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

          {/* Affiliate Field */}
          <div className="mb-4">
            <label className="block text-[1rem] font-semibold mb-2" htmlFor="affiliateId">
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
              {affiliateList.map((affiliate) => (
                <option key={affiliate._id} value={affiliate._id}>
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
            className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500"
            disabled={isCreating}
          >
            {isCreating ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyDealersPage;
