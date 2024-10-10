import React, { useState, useEffect } from "react";
import FormInput from "../../_components/Form/FormInput/FormInput";
import { useUpdatePropertyDealerMutation, useGetPropertyDealerQuery } from "../../../redux/slices/propertyDealerSlice";
import { useGetAffiliatesQuery } from "../../../redux/slices/affiliates";
import { useParams } from "react-router-dom";

const EditPropertyDealerPage = () => {
  const { id } = useParams(); // Get property dealer ID from URL params
  const [agency, setAgency] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [affiliateId, setAffiliateId] = useState("");

  const { data: propertyDealer, isLoading: isPropertyDealerLoading, isError: isPropertyDealerError } = useGetPropertyDealerQuery(id); // Fetch property dealer data
  const [updatePropertyDealer, { isLoading: isUpdating }] = useUpdatePropertyDealerMutation(); // Property dealer update mutation hook
  const { data: affiliates, isLoading: isLoadingAffiliates, error: affiliatesError } = useGetAffiliatesQuery(); // Fetch affiliates

  // Ensure affiliates is an array
  const affiliateList = Array.isArray(affiliates?.doc) ? affiliates.doc : [];

  useEffect(() => {
    if (propertyDealer) {
      setAgency(propertyDealer.agency);
      setFullName(propertyDealer.fullName);
      setAddress(propertyDealer.address);
      setPhone(propertyDealer.phone);
      setAffiliateId(propertyDealer.affiliateId);
    }
  }, [propertyDealer]);

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
      await updatePropertyDealer({ id, ...formData }).unwrap();
      alert("Property Dealer updated successfully!");
    } catch (error) {
      console.error("Error updating property dealer:", error);
    }
  };

  if (isPropertyDealerLoading) return <div>Loading property dealer data...</div>;
  if (isPropertyDealerError) {
    console.error("Error loading property dealer data:", isPropertyDealerError.message);
    return <div>Error loading property dealer data: {isPropertyDealerError.message}</div>;
  }

  if (isLoadingAffiliates) return <div>Loading affiliates...</div>;
  if (affiliatesError) {
    console.error("Error loading affiliates:", affiliatesError.message);
    return <div>Error loading affiliates: {affiliatesError.message}</div>;
  }

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">Edit Property Dealer</h2>

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
            type="submit"
            className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPropertyDealerPage;