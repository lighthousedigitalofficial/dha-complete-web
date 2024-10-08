import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import a heart icon from react-icons
import "aos/dist/aos.css"; // Import AOS styles

const PropertyCard = ({
  price,
  location,
  size,
  beds,
  baths,
  imgUrl,
  onEmail,
  onCall,
}) => {
  // State for managing the favorite status
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle favorite status
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      data-aos="zoom-out"
      className="grid grid-cols-1 sm:grid-cols-2  gap-3 mx-auto h-90 md:w-2/3  my-5 overflow-hidden shadow-lg rounded-md  bg-white transition-transform duration-300 hover:scale-105"
    >
      {/* Property Image */}
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={imgUrl}
          alt="Property"
        />
        <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 rounded-br-md text-xs">
          SUPER HOT
        </div>
        <div className="absolute top-0 right-0 bg-gray-300 text-gray-800 py-1 px-3 rounded-bl-md text-xs">
          TITANIUM
        </div>
      </div>

      {/* Property Info */}
      <div className="p-4 flex flex-col justify-between">
        {/* Favorite Icon with hover effect */}
        <div className="flex justify-end mb-2">
          <FaHeart
            className={`text-2xl cursor-pointer transition-colors duration-300 transform hover:scale-125 ${
              isFavorited ? "text-red-500" : "text-gray-400"
            }`}
            onClick={handleFavoriteClick}
          />
        </div>

        {/* Price and Location */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">CAD {price}</h3>
          <p className="text-gray-600">{location}</p>
        </div>

        {/* Property Details */}
        <div className="flex justify-between text-lg items-center mb-4">
          <p className="text-gray-600 text-xl">
            <span className="font-bold">{beds}</span> Beds
          </p>
          <p className="text-gray-600 text-xl">
            <span className="font-bold">{baths}</span> Baths
          </p>
          <p className="text-gray-600 text-xl">
            <span className="font-bold">{size}</span> Marla
          </p>
        </div>
        <div className="text-sm  text-gray-600 font-semibold flex flex-col gap-2 pb-2">
          {" "}
          <h1>Flat For Sale Multi Garden B17</h1>
          <p>Your Home Is The Busy City Of Islamabad</p>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              onEmail();
              alert("Email button clicked");
            }}
            className="bg-primary hover:bg-primarydark text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            EMAIL
          </button>
          <button
            onClick={() => {
              onCall();
              alert("Call button clicked");
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
