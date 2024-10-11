import React, { useState } from "react";
import axios from "axios";
import { useCreateSalePropertiesMutation } from "../../_root/redux/slices/saleProperties";
const Salesofproperity = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    phone: "",
    email: "",
    plotNum: "",
    streetNum: "",
    sector: "",
    size: "",
    phase: "",
    demand: "",
    type: "shop", // Updated default value
    document: null, // This will now store the Cloudinary URL
    status: "sold" // Default value
  });

  const [createSaleProperties, { isLoading, isError, isSuccess }] = useCreateSalePropertiesMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(`Updated ${name}: ${value}`); // Log the updated field
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "carrental121"); // Use your Cloudinary upload preset
  
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dbaldcbyq/image/upload`, // Use your Cloudinary cloud name
          formData
        );
        setFormData((prevData) => ({
          ...prevData,
          document: response.data.secure_url, // Save the Cloudinary URL
        }));
        console.log(`File uploaded: ${response.data.secure_url}`); // Log the uploaded file URL
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("File upload failed. Please try again."); // Show error message
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const formDataToSubmit = {
      name: formData.name,
      cnic: formData.cnic,
      phone: formData.phone,
      email: formData.email,
      plotNum: formData.plotNum,
      demand: formData.demand,
      document: formData.document, // Make sure this is set with the Cloudinary URL
      phase: formData.phase,
      sector: formData.sector,
      size: formData.size,
      status: formData.status,
      streetNum: formData.streetNum,
      type: formData.type,
    };
  
    console.log('Submitting form data:', formDataToSubmit);
  
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formDataToSubmit);
      console.log('Success:', response.data);
      // Handle success (e.g., show a message or reset the form)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
    }
  };
  
  
  // Example of how you might structure your form
  <form onSubmit={handleSubmit}>
    {/* Your input fields with state handlers */}
  </form>
  
  return (
    <div className="bg-golden">
      <div className="p-4 flex justify-center items-center">
        <div className="rounded-lg w-full max-w-4xl mx-auto">
          <div className="flex justify-center py-10">
            <div className="bg-white w-full max-w-4xl rounded-md shadow-lg">
              {/* Header Section */}
              <div className="bg-brand text-white p-4 rounded-t-md">
                <h2 className="text-lg font-semibold">Please fill the form below</h2>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form fields */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">CNIC <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="cnic"
                    placeholder="CNIC"
                    value={formData.cnic}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Plot No <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="plotNum"
                    placeholder="Plot No"
                    value={formData.plotNum}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Street No <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="streetNum"
                    placeholder="Street No"
                    value={formData.streetNum}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Sector <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="sector"
                    placeholder="Sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Size <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="size"
                    placeholder="Size"
                    value={formData.size}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Phase <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="phase"
                    placeholder="Phase"
                    value={formData.phase}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Demand <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="demand"
                    placeholder="Demand"
                    value={formData.demand}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Type <span className="text-red-500">*</span></label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                    required
                  >
                    <option value="shop">Shop</option>
                    <option value="plot">Plot</option>
                    <option value="house">House</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Document Upload</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="sold">Sold</option>
                    <option value="available">Available</option>
                  </select>
                </div>

                <div className="col-span-full">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>

              {/* Success/Error message section */}
              {isError && <div className="text-red-500 text-center">Error occurred! Please try again.</div>}
              {isSuccess && <div className="text-green-500 text-center">Property created successfully!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salesofproperity;
