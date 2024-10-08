import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SectionTitle = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div data-aos="zoom-in">
      {" "}
      <div className="flex justify-center items-center py-5 text-center">
        <h1 className="text-white w-[80vw] bg-golden text-[1rem] md:text-[1.8rem] font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
