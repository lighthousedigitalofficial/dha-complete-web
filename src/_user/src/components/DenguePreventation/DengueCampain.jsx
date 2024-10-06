import React, { useEffect } from "react";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import AOS from "aos";
import "aos/dist/aos.css";
const images = [
  {
    src: "/dengue-11-8-2022-2.jpg",
    alt: "Dengue Drive Image 1",
  },
  {
    src: "/dengue-11-8-2022.jpg",
    alt: "Dengue Drive Image 2",
  },
  {
    src: "/dengue.jpg",
    alt: "Dengue Drive Image 3",
  },
];

const DengueCampain = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <HeroSectionWithHeading
        backgroundImage="/dengue-11-8-2022.jpg"
        heading="
Dengue Prevention Campaign Details"
      />
      <div className="flex flex-wrap justify-center gap-6  m-8">
        {images.map((image, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className=" rounded-md bg-brand shadow-lg border-2  p-2 border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DengueCampain;
