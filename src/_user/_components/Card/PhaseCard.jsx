import React, { useState } from "react";
import { Link } from "react-router-dom";

const PhaseCard = ({ imageUrl, title, description, videoUrl, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className=" bg-golden p-4 overflow-hidden h-96 w-full">
      {/* Conditionally render the image or the video */}
      {!isPlaying ? (
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handlePlayVideo}
        >
          <img
            className="w-full h-48 object-cover hover:opacity-80"
            src={imageUrl}
            alt={title}
          />
          {/* Show play icon on hover */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 3.5a1 1 0 011.5-.87l9 6a1 1 0 010 1.74l-9 6A1 1 0 014.5 15.5V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      ) : (
        <video
          className="w-full h-48 object-cover rounded-md"
          autoPlay
          loop
          muted // Optional if you want the video to be muted
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="">
        <h2 className="text-lg font-semibold text-center py-2 text-golden">
          {title}
        </h2>
        <p className="text-cream mt-2 text-[1rem]">{description}</p>
        <Link
          to={link}
          className="hover:text-orange-300 text-golden float-end text-[1rem] font-semibold"

        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default PhaseCard;
