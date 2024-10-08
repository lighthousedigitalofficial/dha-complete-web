

import React from "react";

const ServicesCard = ({ imageSrc, serviceName }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="">
        <img
          src={imageSrc}
          alt={serviceName}
          className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="">
        <p className="text-lg sm:text-xl lg:text-2xl">{serviceName}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
