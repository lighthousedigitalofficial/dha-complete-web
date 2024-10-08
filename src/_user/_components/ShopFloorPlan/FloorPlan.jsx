import React from "react";

const FloorPlan = ({ heading, img, phase }) => {
  return (
    <div className="bg-brand p-5">
      <div className="bg-brand text-white flex flex-col items-center justify-center gap-5   ">
        {/* Title Section */}
        <div className=" w-[80vw] text-center ">
          <h1 className="text-white bg-golden text-[1.3rem] md:text-[1.8rem] font-bold">
            {heading}
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="">
          <h2 className="text-white text-[1rem] font-semibold">{phase}</h2>
        </div>
      </div>
      <img src={img} alt="img" className="w-full h-full overflow-hidden" />
    </div>
  );
};

export default FloorPlan;
