import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AssociatedBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  const images = [
    "https://thevertical.pk/cdn/shop/files/dukan.pk.jpg?v=1720374024",
    "https://thevertical.pk/cdn/shop/files/1716214008604.jpg?v=1720374024",
    "https://thevertical.pk/cdn/shop/files/THE_VERTICAL_SIGNS_MOU_WITH_NEAPO_BY_AMAL.png?v=1720374024",
    "https://thevertical.pk/cdn/shop/files/okay_beans.jpg?v=1720374024",
    "https://thevertical.pk/cdn/shop/files/Tedx_MOU.jpg?v=1705914738",
    "https://thevertical.pk/cdn/shop/files/Adex_MOU.png?v=1705914644",
    "https://thevertical.pk/cdn/shop/files/Steak_Away_MOU.png?v=1705914940",
    "https://thevertical.pk/cdn/shop/files/1690035404008.jpg?v=1690444299",
    "https://thevertical.pk/cdn/shop/files/WhatsApp_Image_2023-07-13_at_17.38.43.jpg?v=1690444755",
    "https://thevertical.pk/cdn/shop/files/Dough_MOU.png?v=1705914940",
    "https://thevertical.pk/cdn/shop/files/8.jpg?v=1690456717",
    "https://thevertical.pk/cdn/shop/files/WhatsApp_Image_2023-07-14_at_17.30.15.jpg?v=1690444755",
  ];

  return (
    <div className="bg-brand">
      <img
        src="https://beaconinvestment.org/wp-content/uploads/2023/05/DHA-ISLAMABAD.jpg"
        alt="hero-img"
        className="h-full w-full object-contain"
        data-aos="zoom-in" // Apply AOS animation
      />
      <div className="flex flex-col justify-center items-center gap-2 p-8">
        <h1 className="text-[1.2rem] font-bold text-white">
          Real Estate Investment in Pakistan
        </h1>
        {/* <p
          data-aos="zoom-in"
          className="text-[.9rem] md:text-[1rem] text-center"
        >
          Explore Our Network of Trusted Partners and Collaborators
        </p> */}
      </div>
      <div className="mx-0 md:mx-8 py-2 grid grid-cols-1  md:grid-cols-3 gap-4 md:gap-8 ">
        {images.map((imgSrc, index) => (
          <div key={index} className=" rounded-lg shadow-lg">
            <img
              src={imgSrc}
              alt={`MOU Image ${index + 1}`}
              className="w-full h-auto object-cover"
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatedBrand;
