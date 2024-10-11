import React from "react";

const BusinessPaymentPlan = () => {
  // Image URL
  const imageUrl =
    "https://isbproperty.com/wp-content/uploads/2020/04/DHA-Islamabad-Installment-Plan-Resized.jpg";

  // Function to trigger the image download

  return (
    <>
      <div className="bg-brand text-white flex flex-col items-center justify-center gap-5 py-5 mt-5">
        {/* Title Section */}
        <div className=" w-[80vw] text-center ">
          <h1 className="text-white bg-golden text-[1.3rem] md:text-[1.8rem] font-bold">
            94 BUSINESS CENTER
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="">
          <h2 className="text-white text-[1rem] font-semibold">
            PAYMENT TIMELINE
          </h2>
        </div>

        {/* Button Section */}
        <h1 className=" text-[.9rem] ">CORPORATE OFFICES</h1>
      </div>

      <div className="bg-brand">
        <img src={imageUrl} alt="Payment Plan" className="w-full h-full" />
      </div>

      <div className="bg-brand flex flex-col justify-center items-center gap-4 py-4 md:py-10">
        {/* Book Now Button */}
        <button className="text-[1rem] md:text-[1.3rem] bg-golden text-white hover:text-golden hover:bg-white px-10 py-2 rounded-md border border-brand">
          BOOK NOW
        </button>

        {/* Download Button */}
        <button className="bg-golden text-[1rem] md:text-[1.3rem] text-white hover:text-golden hover:bg-white px-10 py-2 rounded-md border border-brand">
          DOWNLOAD
        </button>
      </div>
    </>
  );
};

export default BusinessPaymentPlan;
