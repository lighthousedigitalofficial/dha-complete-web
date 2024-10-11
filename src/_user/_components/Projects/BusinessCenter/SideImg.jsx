import React from "react";

const SideImg = ({ imgSrc, title, content }) => {
  return (
    <div className="flex flex-col md:flex-row   p-6 bg-white">
      {/* Image Section */}
      <div className="md:w-1/3 w-full flex items-center justify-center">
        <img
          src={imgSrc}
          alt="Business Centre Logo"
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 w-full">
        <h1 className="text-[1.3rem] text-center font-bold  my-5">{title}</h1>
        <div className="space-y-4 text-lg">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideImg;
