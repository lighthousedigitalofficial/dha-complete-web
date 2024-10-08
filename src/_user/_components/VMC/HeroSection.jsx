

import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Hero image */}
      <img
        src="https://www.pins.pk/uploads/project/230-439.jpg"
        alt="Hero"
        className="w-full sm:w-[80vw] object-cover p-5 bg-brand bg-opacity-90 opacity-40"
      />
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 sm:p-5 w-full sm:w-[60%] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Defence Housing Authority
        </h1>

        <p className="text-base lg:text-2xl sm:text-lg md:text-xl text-[#CEB784]">
          DHA Phase I Community has been meticulously planned and designed to
          best standards in order to present residents with an exceptional way
          of life and quality living in a semi-mountainous area with breathtaking
          views. Residents are enjoying a contemporary lifestyle that is
          the exclusive of DHA.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
