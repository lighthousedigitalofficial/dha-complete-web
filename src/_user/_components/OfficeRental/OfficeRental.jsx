import React from "react";
import Hero_Section from "../AboutUs/Hero_Section";

const OfficeRental = () => {
  return (
    <div className="bg-golden">
      <Hero_Section />

      <div className="">
        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_11.png?v=1722846004"
            alt="Spacious office with modern design"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_5.png?v=1722333954"
            alt="Fully furnished office space"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_9.png?v=1722844915"
            alt="Office view with natural lighting"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center items-center bg-golden py-6">
          <button className="bg-brand text-white font-semibold px-6 py-2 rounded-md border border-golden">
            Book Now
          </button>
        </div>

        {/* Two-column image layout */}
        <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-center pb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_3.png?v=1722331683"
            alt="Modern office conference room"
            className="w-full h-80 object-cover"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_7.png?v=1722336687"
            alt="Creative work environment"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Centered image */}
        <div className="flex justify-center items-center pb-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VMC_desktop_page_post_1024_x_512_px_6.png?v=1722335752"
            alt="Collaborative office space"
            className="w-96 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeRental;
