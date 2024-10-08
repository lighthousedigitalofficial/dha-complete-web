import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const PropertySearch = () => {
  const [city, setCity] = useState("Islamabad");
  const [location, setLocation] = useState("");
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [selectedPropertySubType, setSelectedPropertySubType] = useState("");
  const [showCurrencyModal, setShowCurrencyModal] = useState(false); // Currency modal state
  const [showAreaUnitModal, setShowAreaUnitModal] = useState(false); // Area unit modal state
  const [clickedButton, setClickedButton] = useState(""); // For button bg change

  const handleCityChange = (e) => setCity(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleSearch = () =>
    alert(`Searching properties in ${city}, ${location}`);

  const toggleMoreOptions = () => setMoreOptionsVisible(!moreOptionsVisible);

  const openCurrencyModal = () => setShowCurrencyModal(true); // Open currency modal
  const closeCurrencyModal = () => setShowCurrencyModal(false); // Close currency modal
  const openAreaUnitModal = () => setShowAreaUnitModal(true); // Open area unit modal
  const closeAreaUnitModal = () => setShowAreaUnitModal(false); // Close area unit modal

  const handleButtonClick = (buttonType) => {
    setClickedButton(buttonType);
  };

  return (
    <>
      {/* <HeroSectionWithHeading
        backgroundVideo="/dha1.mp4"
        heading="Search Properties For Sale"
      /> */}
      <div
        className="relative bg-cover bg-center h-screen"
      // style={{
      //   backgroundImage:
      //     "url('https://content-cdn.zameen.com/DHA_Islamabad_3edf0d2161.jpg')",
      // }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/dha.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div
          className="relative flex flex-col gap-5 justify-center items-center h-full"
          data-aos="fade-up" // Apply animation
        >
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-8">
            Search Properties For Sale in DHA
          </h1>

          {/* Buy, Rent, Projects Buttons */}
          <div
            className="flex justify-center items-center gap-5"
            data-aos="zoom-in"
          >
            <button
              className={`border text-[1rem] border-white rounded-md px-4 py-2 font-semibold transition-transform transform ${clickedButton === "BUY"
                  ? "bg-white text-black scale-105"
                  : "bg-transparent text-white hover:bg-white hover:text-black"
                }`}
              onClick={() => handleButtonClick("BUY")}
            >
              BUY
            </button>

            {/* Link for Rent */}
            <Link to="/">
              <button
                className={`border text-[1rem] border-white rounded-md px-4 py-2 font-semibold transition-transform transform ${clickedButton === "RENT"
                    ? "bg-white text-black scale-105"
                    : "bg-transparent text-white hover:bg-white hover:text-black"
                  }`}
                onClick={() => handleButtonClick("RENT")}
              >
                RENT
              </button>
            </Link>

            {/* Link for Projects */}
            <Link to="/phase">
              <button
                className={`border text-[1rem] border-white rounded-md px-4 py-2 font-semibold transition-transform transform ${clickedButton === "PROJECTS"
                    ? "bg-white text-black scale-105"
                    : "bg-transparent text-white hover:bg-white hover:text-black"
                  }`}
                onClick={() => handleButtonClick("PROJECTS")}
              >
                PROJECTS
              </button>
            </Link>
          </div>

          <div
            className="bg-gray-800 bg-opacity-90 w-full md:w-1/2 p-6 rounded-md"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 md:flex-row justify-center gap-5 items-center">
              {/* City Dropdown */}
              <div className="relative  col-span-2">
                <label className="text-white  text-[.8rem] ">
                  City
                </label>{" "}
                <select
                  value={city}
                  onChange={handleCityChange}
                  className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 font-semibold transition-transform transform focus:scale-105 hover:border-green-400"
                >
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="DHA Islamabad">DHA Islamabad</option>
                </select>
              </div>

              {/* Location Input */}
              <div className="relative col-span-2">
                <label className="text-white text-[.8rem]">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onClick={() => setMoreOptionsVisible(true)}
                  onChange={handleLocationChange}
                  className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 font-semibold transition-transform transform focus:scale-105 hover:border-green-400"
                  placeholder="Enter location"
                />
              </div>

              {/* Find Button */}
              <Link
                to={"/saleproperty"}
                // onClick={handleSearch}
                className="bg-primary text-white text-center px-4 py-2 mt-0 md:mt-8 font-semibold rounded transition-transform transform hover:scale-105"
              >
                FIND
              </Link>
            </div>

            {/* More Options */}
            {moreOptionsVisible && (
              <div className="mt-5" data-aos="fade-down">
                <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                  {/* Property Type */}
                  <div className="relative">
                    <label className="text-white text-sm">
                      Property
                    </label>
                    <select className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 transition-transform transform focus:scale-105 hover:border-green-400">
                      <option value="Homes">Homes</option>
                      <option value="Plots">Plots</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div className="relative">
                    <label className="text-white text-sm">
                      Price (PKR)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 transition-transform transform focus:scale-105 hover:border-green-400"
                      placeholder="Enter Price"
                    />
                  </div>

                  {/* Area */}
                  <div className="relative">
                    <label className="text-white text-sm">
                      Area (Marla)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 transition-transform transform focus:scale-105 hover:border-green-400"
                      placeholder="Enter Area"
                    />
                  </div>

                  {/* Beds */}
                  <div className="relative">
                    <label className="text-white text-sm">
                      Beds
                    </label>
                    <select className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-3 transition-transform transform focus:scale-105 hover:border-green-400">
                      <option value="All">All</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Options */}
            <div className="text-white text-sm space-x-4 mt-4">
              <button
                onClick={toggleMoreOptions}
                className={`p-2 rounded-[4px] ${moreOptionsVisible ? "bg-red-500" : "bg-green-500"}`}
              >
                {moreOptionsVisible ? "Less Options" : "More Options"}
              </button>
              <button
                onClick={openCurrencyModal}
                className="bg-golden p-2 rounded-[4px]"
              >
                Change Currency
              </button>
              <button
                onClick={openAreaUnitModal}
                className="bg-brand p-2 rounded-[4px]"
              >
                Change Area Unit
              </button>
              <button
                className="bg-purple-500 p-2 rounded-[4px]"
              >
                Reset Search
              </button>
            </div>
          </div>
        </div>
        {showCurrencyModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-md md:w-1/3">
              <h2 className="text-xl font-bold mb-4">Select Currency</h2>
              <select className="w-full mb-4 border border-gray-400 rounded px-3 py-2">
                <option value="PKR">PKR</option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
              </select>
              <div className="flex justify-end">
                <button
                  onClick={closeCurrencyModal}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Area Unit Modal */}
        {showAreaUnitModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-md md:w-1/3">
              <h2 className="text-xl font-bold mb-4">Select Area Unit</h2>
              <select className="w-full mb-4 border border-gray-400 rounded px-3 py-2">
                <option value="Marla">Marla</option>
                <option value="Kanal">Kanal</option>
                <option value="Square Feet">Square Feet</option>
              </select>
              <div className="flex justify-end">
                <button
                  onClick={closeAreaUnitModal}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertySearch;
