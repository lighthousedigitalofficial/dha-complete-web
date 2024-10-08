import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSectionWithHeading = ({ backgroundImage, backgroundVideo, heading }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="relative h-[23vh] lg:h-screen bg-cover bg-center flex items-center justify-center">
      {backgroundVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <h1
        className="relative text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center uppercase transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-brand"
        data-aos="fade-up"
      >
        {heading}
      </h1>
    </div>
  );
};

HeroSectionWithHeading.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

export default HeroSectionWithHeading;
