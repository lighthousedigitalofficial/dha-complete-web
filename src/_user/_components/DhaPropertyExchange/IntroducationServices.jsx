import React from "react";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const IntroductionServices = () => {
  const imageUrls = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCZ2Tk9g0GxuRuWXrS5XgJA_Syn1Md3QVAuO3cxKoKy35BS0Jq",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJFqLs65B4JvjlGzm6sLq7G67w9n9H4unPVsaVnYEsM66NkxF",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCgeZ06OPisfPzQ-NFy2al85K4vbKv8GP6jP7-E_mv_Eshzbno",
  ];

  return (
    <div className="bg-golden text-cream" >
      <HeroSectionWithHeading backgroundImage={"https://premierchoiceint.com/wp-content/uploads/2024/01/Grand-Orchard-Elevation4.webp"} heading="Intruduction" />
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center py-5 text-center">
          <p className=" text-[1rem] leading-7 px-4 md:px-20">
            DHA Property Exchange Islamabad-Rawalpindi was established in Nov 2008
            with the core purpose to provide valued property services in a
            customer-friendly environment that helps you to Buy, Sell, and Rent
            out property in DHA Islamabad-Rawalpindi with faith and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 pb-5">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`img-${index}`}
              className="h-56 w-full object-cover object-top"
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-center items-center py-4 text-center">
          <h1 className="text-cream w-[80vw] text-[1rem] md:text-[1rem] font-bold">
            INTRODUCTION
          </h1>
          <ul className="text-[1rem] leading-7 px-4 md:px-20 text-left list-disc list-inside">
            <li>
              Our team will facilitate valuable clients/members with a price valuation system to determine the value of their properties at any given time.
            </li>
            <li>
              The team will try to give you the best rate/offer for your property.
            </li>
            <li>
              The team will ensure end-to-end transparent dealings and facilitation.
            </li>
            <li>
              1% Service Charges will be charged on the total sale consideration.
            </li>
            <li>
              * For details/rates, please contact our team at Mob No: 0321-5355988.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default IntroductionServices;
