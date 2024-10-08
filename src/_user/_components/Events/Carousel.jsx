import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import image1 from '../../assets/Images/Advertisements/real-state.jpg';
import image2 from '../../assets/Images/Advertisements/DHA-security.jpg';
import image3 from '../../assets/Images/Advertisements/notice.jpg';
import image4 from '../../assets/Images/Advertisements/ips.jpg';
import image5 from '../../assets/Images/Advertisements/phase-4.jpeg';
import image6 from '../../assets/Images/Advertisements/river-view.jpg';
import image7 from '../../assets/Images/Advertisements/phase-v.jpg';
import image8 from '../../assets/Images/Advertisements/expressway.jpg';
import image9 from '../../assets/Images/Advertisements/secter-j.jpg';
import image10 from '../../assets/Images/Advertisements/secter-k.jpg';
import image12 from '../../assets/Images/Advertisements/auction.jpg';

const imageData = [
  {
    image: image1,
    title: 'Real Estate',
    description: 'Explore the best real estate options.',
  },
  {
    image: image2,
    title: 'DHA Security',
    description: 'Ensuring safety and security for all.',
  },
  {
    image: image3,
    title: 'Notice',
    description: 'Important notices and updates.',
  },
  {
    image: image4,
    title: 'IPS',
    description: 'Innovative Power Solutions.',
  },
  {
    image: image5,
    title: 'Phase 4',
    description: 'Development updates for Phase 4.',
  },
  {
    image: image6,
    title: 'River View',
    description: 'Beautiful river view properties.',
  },
  {
    image: image7,
    title: 'Phase V',
    description: 'Latest news on Phase V.',
  },
  {
    image: image8,
    title: 'Expressway',
    description: 'New expressway developments.',
  },
  {
    image: image9,
    title: 'Sector J',
    description: 'Updates on Sector J.',
  },
  {
    image: image10,
    title: 'Sector K',
    description: 'Updates on Sector K.',
  },
  {
    image: image12,
    title: 'Auction',
    description: 'Upcoming property auctions.',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
  };

  return (
    <div className="relative w-full mx-auto p-8 bg-gray-100">
      <AnimatePresence>
        {imageData.map((item, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
                <div className="Tilt-inner bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white mt-2">{item.description}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;