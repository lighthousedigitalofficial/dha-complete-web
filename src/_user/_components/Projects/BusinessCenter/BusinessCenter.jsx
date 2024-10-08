import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BusinessCenter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  const details = [
    {
      img: "https://theleadmarketing.com/wp-content/uploads/2023/02/dha-phase-1-Dev--1024x576.jpg",
    },
    {
      img: "https://theleadmarketing.com/wp-content/uploads/2023/02/DHA-Phase-2-Islamabad-1.jpg",
    },
    {
      img: "https://rbsland.com/wp-content/uploads/2022/10/DHA-Phase-3-Islamabad-web-thumb.jpg",
    },
    {
      img: "https://theleadmarketing.com/wp-content/uploads/2023/01/DHA-Phase-4-Islamabad.jpg",
    },
    {
      img: "https://theleadmarketing.com/wp-content/uploads/2023/01/DHA-Phase-5-Islamabad.jpg",
    },
    {
      img: "https://www.housings.pk/wp-content/uploads/2021/11/DHA-Phase-6-Lahore.jpg",
    },
  ];

  return (
    <div>
      <img
        src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2022/03/1440x625-DHAI.jpg"
        alt="hero-img"
        className="w-full h-full object-cover"
        data-aos="zoom-in"
      />

      <div className="my-5">
        <h1 className="text-center text-[1.3rem] md:text-[1.5rem] my-5 font-bold">
          Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-0 md:mx-5">
          {details.map((data, index) => (
            <div key={index} data-aos="fade-up">
              <img src={data.img} alt="img" className="h-96 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-center text-[1.4rem] my-5 font-bold">
          DOWNLOAD PDF
        </h1>
        <button className="border border-gray-400 bg-brand text-white font-bold text-[1.3rem] rounded-md px-10 py-2">
          Download
        </button>
      </div>
    </div>
  );
};

export default BusinessCenter;
