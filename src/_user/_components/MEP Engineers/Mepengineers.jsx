import React, { useEffect, useState } from "react";
import { useGetAffiliatesQuery } from "../../_root/redux/slices/affiliatesApiSlice";


const Mepengineers = () => {
  const { data: affiliatesData, isLoading: affiliatesLoading, error: affiliatesError } = useGetAffiliatesQuery();

  const [selectedAffiliateId, setSelectedAffiliateId] = useState(null);
  const [engineerData, setEngineerData] = useState({
    NAMEOFFIRM: "",
    ENGRNAME: "",
    ADDRESS: "",
    CONTACTNO: "",
  });

  const affiliates = affiliatesData?.doc || [];

  const handleAffiliateSelect = (affiliateId) => {
    setSelectedAffiliateId(affiliateId);
  };

  const handleCreateEngineer = async () => {
    if (selectedAffiliateId && engineerData.NAMEOFFIRM) {
      try {
        const newEngineer = {
          affiliateId: selectedAffiliateId, // Link to the selected affiliate
          ...engineerData, // Rest of the engineer details
        };
        await createEngineer(newEngineer);
        if (engineerCreated) {
          console.log("Engineer created successfully");
        }
      } catch (error) {
        console.error("Failed to create engineer:", createEngineerError);
      }
    }
  };

  if (affiliatesLoading) {
    return <p>Loading affiliates...</p>;
  }

  if (affiliatesError) {
    return <p>Error loading affiliates: {affiliatesError.message}</p>;
  }

  return (
    <div className="bg-golden ">
      <div className="p-4 mt-5 flex justify-center items-center">
        <div className="text-cream rounded-lg w-full lg:max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center p-4">
            LIST OF MEP ENGINEER - DHA ISLAMABAD - FOR THE YEAR 2024
          </h2>

          {/* Dropdown to select affiliate */}
          <div className="mb-4">
            <label htmlFor="affiliateSelect" className="block mb-2">Select Affiliate</label>
            <select
              id="affiliateSelect"
              className="p-2 border"
              onChange={(e) => handleAffiliateSelect(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Select an Affiliate</option>
              {affiliates.map((affiliate) => (
                <option key={affiliate._id} value={affiliate._id}>
                  {affiliate.name}
                </option>
              ))}
            </select>
          </div>

          {/* Engineer Creation Form */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name of Firm"
              className="p-2 border w-full mb-2"
              value={engineerData.NAMEOFFIRM}
              onChange={(e) => setEngineerData({ ...engineerData, NAMEOFFIRM: e.target.value })}
            />
            <input
              type="text"
              placeholder="Engineer Name"
              className="p-2 border w-full mb-2"
              value={engineerData.ENGRNAME}
              onChange={(e) => setEngineerData({ ...engineerData, ENGRNAME: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              className="p-2 border w-full mb-2"
              value={engineerData.ADDRESS}
              onChange={(e) => setEngineerData({ ...engineerData, ADDRESS: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="p-2 border w-full mb-2"
              value={engineerData.CONTACTNO}
              onChange={(e) => setEngineerData({ ...engineerData, CONTACTNO: e.target.value })}
            />
            <button
              className="p-2 bg-blue-500 text-white w-full"
              onClick={handleCreateEngineer}
            >
              Create Engineer
            </button>
          </div>

          {/* Engineer Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-cream">
              <thead>
                <tr>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">Ser</th>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">REGD NO</th>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">NAME OF FIRM</th>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">ENGR NAME</th>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">ADDRESS</th>
                  <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">CONTACT NO</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mepengineers;
