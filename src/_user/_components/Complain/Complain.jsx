import React from "react";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import SectionTitle from "../Card/SectionTitle";

const Complain = () => {
  return (
    <div>
      {/* Hero Section with a background image */}
      <HeroSectionWithHeading
        heading="Register Your Grievances Via DHA Islamabad & Rawalpindi Complaint Management System"
        backgroundImage="https://www.zameen.com/blog/wp-content/uploads/2019/10/image-2-98-1024x640.jpg"
      />

      {/* Main Content Section */}
      <div className="bg-brand text-white text-[1rem] md:text-[1.3rem]">
        {/* Section Title */}
        <SectionTitle
          title={
            "Register Your Grievances Via DHA Islamabad & Rawalpindi Complaint Management System"
          }
        />

        {/* Informational Text */}
        <h1 className="p-5">
          The Defence Housing Authority (DHA) in Islamabad and Rawalpindi has
          introduced an online portal that makes it easier for residents to
          register complaints related to civic issues. This system is accessible
          at any time and from anywhere. Whether you're facing problems like
          road conditions, water supply issues, or any other concerns linked to
          DHA, simply submit a complaint form to resolve the issue.
        </h1>

        {/* Another Section Title */}
        <SectionTitle
          title={
            "How to Register a Complaint Via DHA’s Complaint Management System"
          }
        />

        {/* YouTube Video Section */}
        <div className="p-5 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/goePoLO0_eY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain;
