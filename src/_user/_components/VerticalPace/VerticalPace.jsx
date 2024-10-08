import React from "react";
import VideoGallery from "./VideoGallery";

const VerticalPace = () => {
  return (
    <div>
      <img
        src="https://makaansolutions.com/wp-content/uploads/2022/07/dha-rawalpindi-islamabad-introduction-1024x677.webp"
        alt="hero-img"
        className="w-full h-full"
      />
      <div className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-[1rem] md:text-[1.5rem] font-bold tracking-wide text-gray-900">
          THE VERTICAL PACE
        </h1>
        <p className="text-[1rem] text-center text-gray-600 mt-4">
          The groundbreaking series that delves into the latest{" "}
          <br className="hidden md:block" />
          advancements in our construction projects
        </p>
      </div>
      <VideoGallery />
    </div>
  );
};

export default VerticalPace;
