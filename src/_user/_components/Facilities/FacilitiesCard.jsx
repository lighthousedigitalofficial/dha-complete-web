import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilitiesCard = ({ imageUrl, title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="bg-golden  p-4 overflow-hidden h-90 w-full transform transition duration-500 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="w-full h-48 object-cover transition-opacity duration-500 hover:opacity-80"
        src={imageUrl}
        alt={title}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <div data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-lg font-semibold text-center py-2 text-primarylight transition-colors duration-300 hover:text-orange-300">
          {title}
        </h2>
        <p
          className="text-cream mt-2 text-[1rem] transition-colors duration-300 hover:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {description}
        </p>
        <Link
          to={"/"}
          className="hover:text-orange-300 float-end text-[1rem] font-semibold"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default FacilitiesCard;
