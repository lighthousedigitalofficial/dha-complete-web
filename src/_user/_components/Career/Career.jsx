import React from "react";
import CareerOpportunityForm from "./CareerOpportunityForm";

const Career = () => {
  return (
    <div>
      <CareerOpportunityForm />
      <div className="mt-5">
        <h1 className="text-center text-[1rem] font-semibold py-5">
          LIFE AT THE DHA
        </h1>
        <div className="w-full p-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Qp46zOPGhfQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[100vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Career;
