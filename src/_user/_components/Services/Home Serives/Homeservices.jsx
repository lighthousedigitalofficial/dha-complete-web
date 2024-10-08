import React from 'react';
import ServiceList from './ServiceList';

const serviceData = [
  { imageSrc: "https://cdn.mrmahir.com/services/ac.svg", serviceName: "AC Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/carpenter.svg", serviceName: "Carpenter Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/electrician.svg", serviceName: "Electrician Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/geyser.svg", serviceName: "Geyser Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/handyman.svg", serviceName: "Handyman Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/appliance-repair.svg", serviceName: "Home Appliances Services" },
  { imageSrc: "https://cdn.mrmahir.com/services/plumber.svg", serviceName: "Plumber Services" },
];
const Homeservices = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-[#F6F6F6] rounded-lg w-full lg:w-full xl:w-full 2xl:w-full max-w-full">
        <div className="flex items-center mt-5 p-4 justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center">
            Home Maintenance Services
          </h1>
        </div>
        <div className="flex flex-col p-6 items-center justify-center">
          <ServiceList services={serviceData} />
        </div>
      </div>
    </div>
  );
};

export default Homeservices;
