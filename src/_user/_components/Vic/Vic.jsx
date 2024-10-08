import React from "react";

const Vic = () => {
  return (
    <>
      <div className="w-full bg-brand text-white">
        <div className="flex text-center justify-center p-10">
          <h1 className="text-2xl">
            Defence Housing Authority Investment Consultants
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Left side for image */}
          <div className="flex flex-col lg:w-1/2 p-5">
            <div className="relative p-5 flex items-center justify-center w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3vZWYSkSzWJ07nHnXoO0VsN3AbHIVPZqlw&s"
                className="w-full lg:w-[50vw] h-[40vh] lg:h-[90vh] object-cover bg-brand bg-opacity-45 opacity-65 p-5"
                alt="Consultants"
              />
            </div>

            <div className="text-center p-10">
              <h2 className="text-2xl font-bold mb-4">
                Defence Housing Authority Investment Consultants
              </h2>
              <p className="text-lg mb-4">
                The DHA Investment Consultants are dedicated to providing
                comprehensive investment advisory services. Our expert team
                focuses on financial management, investment strategies, and
                estate planning, all tailored to secure their investments and
                make it profitable.
              </p>
              <p className="text-lg mb-4">
                By leveraging their deep industry knowledge and the robust
                resources of The DHA, we offer innovative and personalized
                financial solutions designed to ensure long-term stability and
                growth. Our mission is to help clients navigate the complexities
                of the financial landscape, achieve their financial goals, and
                secure a prosperous future.
              </p>
              <p className="text-sm italic">*TERMS AND CONDITIONS APPLY*</p>
            </div>
          </div>

          {/* Right side content - Form taking full width */}
          <div className="p-5 lg:w-1/2 flex items-center justify-center">
            <form className="bg-gray-100 p-6 rounded-md w-full lg:w-[45vw]">
              <h2 className="text-2xl text-black mb-4">Book an Appointment</h2>

              {/* First Name */}
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="Last Name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="Your Email"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-gray-700">
                  Phone Number (with country code)
                </label>
                <input
                  type="tel"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="Phone Number"
                />
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="Company Name"
                />
              </div>

              {/* City */}
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="City"
                />
              </div>

              {/* Country */}
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded"
                  placeholder="Country"
                />
              </div>

              {/* Project of Interest */}
              <div className="mb-4">
                <label className="block text-gray-700">
                  Project of Interest
                </label>
                <select className="w-full p-4 border border-gray-300 rounded">
                  <option>94 Business Centre</option>
                  <option>Other Project 1</option>
                  <option>Other Project 2</option>
                </select>
              </div>

              {/* Buying or Renting */}
              <div className="mb-4">
                <label className="block text-gray-700">Buying or Renting</label>
                <select className="w-full p-4 border border-gray-300 rounded">
                  <option>Buying</option>
                  <option>Renting</option>
                </select>
              </div>

              {/* Choose a Date and Time */}
              <div className="mb-4">
                <label className="block text-gray-700">
                  Choose a Date and Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-4 border border-gray-300 rounded"
                />
              </div>

              {/* Where did you hear about us? */}
              <div className="mb-4">
                <label className="block text-gray-700">
                  Where did you hear about us?
                </label>
                <select className="w-full p-4 border border-gray-300 rounded">
                  <option>Meta</option>
                  <option>Google</option>
                  <option>Friends</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button className="w-full p-4 bg-[#022C3C] text-white rounded">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vic;
