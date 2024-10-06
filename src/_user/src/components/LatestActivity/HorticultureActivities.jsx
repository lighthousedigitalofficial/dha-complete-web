import React from "react";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import banner from '../../assets/Images/Latest-Activity/banner.jpg'
const HorticultureActivities = () => {
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2JqK9pUiFBhCmIGUE4bpmoq2Sv3jgsvR0Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9WynSYLdqArWJougu8O5KmWeRPHvHG2hOw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6K0-9dpekJil5MszAZNu-UEs34XTxcCiij6qCTWVU5yj0dNYcwoou5oazD-Q35vcA1E&usqp=CAU",
  ];

  return (
    <div className="bg-golden">
      {/* <div className="flex justify-center items-center py-5 text-center bg-brand">
        <h1 className="text-white w-[80vw] bg-golden text-[1.3rem] md:text-[1.8rem] font-bold">
          Horticulture Activities
        </h1>
      </div> */}
      <HeroSectionWithHeading backgroundImage={banner} heading="Album"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto p-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`img-${index}`}
            className="w-full object-cover object-top"
          />
        ))}
      </div>
    </div>
  );
};

export default HorticultureActivities;
