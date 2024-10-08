import React from "react";
import FloorPlan from "./FloorPlan";

const OfficePlan = () => {
  return (
    <div className="bg-brand py-5">
      <FloorPlan
        heading={"FLOOR PLAN"}
        // phase={"SHOP NO. 1"}
        img="https://thevertical.pk/cdn/shop/files/V1_8th_Floor_Plan_page-0001_1920x.jpg?v=1720363430"
      />
      <div className="flex justify-center items-center">
        <button className="text-[1rem] bg-golden text-white hover:text-golden hover:bg-white px-10 py-2 rounded-md ">
          Download PDF
        </button>
      </div>
      <FloorPlan
        heading={"FLOOR PLAN"}
        // phase={"SHOP NO. 1"}
        img="https://thevertical.pk/cdn/shop/files/V1_8th_Floor_Plan_page-0001_1920x.jpg?v=1720363430"
      />
      <div className="flex justify-center items-center">
        <button className="text-[1rem] bg-golden text-white hover:text-golden hover:bg-white px-10 py-2 rounded-md ">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OfficePlan;
