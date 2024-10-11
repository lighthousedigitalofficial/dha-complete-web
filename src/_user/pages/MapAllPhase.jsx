import React, { useEffect } from "react";
import SectionTitle from "../../components/Card/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import video from "../../assets/Phases/phase567.mp4";
const MapAllPhase = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="bg-brand" data-aos="zoom-out">
      <HeroSectionWithHeading heading="ALL PHASES OF DHA ISLAMABAD - RAWALPINDI" backgroundVideo={video}/> 
      <div className="w-[80%] mx-auto py-8">
        <img src="/Dha All phases map.jpg" alt="img" />
      </div>
    </div>
  );
};

export default MapAllPhase;
