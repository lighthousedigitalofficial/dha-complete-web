import React from 'react'

const PurchaseProperity = () => {
  return (
   
     <>
     <div className="bg-golden">
        <div className="p-4 flex justify-center items-center">
          <div className=" rounded-lg  w-full max-w-4xl mx-auto">
            <div className=" flex justify-center py-10">
              <div className="bg-white     w-full max-w-4xl rounded-md shadow-lg">
                {/* Header Section */}
                <div className="bg-brand text-white p-4 rounded-t-md">
                  <h2 className="text-lg font-semibold">
                    Please fill the form below
                  </h2>
                </div>

                {/* Form Section */}
                <form className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* CNIC */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      CNIC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="CNIC"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* Mobile No */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Mobile No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Mobile No"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                 

<div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  {/* Street No */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Phase <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Phase |"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* Sector */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Size <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="2 Kanal"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* Size */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-1">
                      Price Range/Budget <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>

                 
                 

                  {/* Submit Button */}
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full  bg-brand text-white py-2 rounded-md hover:bg-gray-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* Contact Details */}
                <div className="p-4 text-center text-sm text-gray-700">
                  *For Details / Rates please contact our team at Mob No:
                  0321-5355988 & 0303-8255475
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
    
  )
}

export default PurchaseProperity
