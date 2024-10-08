import React from 'react'
import ServiceList from '../ServiceList';

const serviceData = [
    { imageSrc: "https://cdn.mrmahir.com/svgs/car-service.svg", serviceName: "Car Wash Services" },
    { imageSrc: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/carpet.svg", serviceName: "Carpet Cleaning Services" },
    { imageSrc: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_cement.svg", serviceName: "Cement Water Tank Cleaning Services" },
    { imageSrc: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/chair.svg", serviceName: "Chair Cleaning Services" },
    { imageSrc: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/curtain.svg", serviceName: "Curtain Cleaning Services" },
    { imageSrc: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg", serviceName: "House Deep Cleaning  Services" },
    { imageSrc: "https://cdn.mrmahir.com/svgs/solar_cleaning.svg", serviceName: "Solar Cleaning Services" },
  ];

const CleaningServices = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-[#F6F6F6] rounded-lg w-full lg:w-full xl:w-full 2xl:w-full max-w-full">
        <div className="flex items-center mt-5 p-4 justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center">
          Cleaning Services
          </h1>
        </div>
        <div className="flex flex-col p-6 items-center justify-center">
          <ServiceList services={serviceData}/>
        </div>
      </div>
    </div>
  )
}

export default CleaningServices
