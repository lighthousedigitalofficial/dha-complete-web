import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handles hover effect for the accordion items
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(1);
  };

  return (
    <div className="flex h-[60vh] w-[70%] mx-auto gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex-1 relative overflow-hidden transition-all text-golden shadow-sm shadoe-primarylight rounded-[5px] duration-500 ease-in-out ${
            activeIndex === index ? "flex-[4]" : "flex-[3]"
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.videoSrc ? (
            <video
              src={item.videoSrc}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          ) : (
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          )}
          {/* Dimming the non-hovered items */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-70"
            }`}
          ></div>
          {/* Content overlay (if needed) */}
          <div className={`absolute inset-0 flex justify-center text-2xl font-semibold ${
              activeIndex === index ? "items-end" : "items-center transform -rotate-90 "
            }`}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;