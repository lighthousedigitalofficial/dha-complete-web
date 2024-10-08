import React from "react";
import FloorPlan from "./FloorPlan";

const ShopFloorPlan = () => {
  const floorPlans = [
    {
      phase: "SHOP NO. 1",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-02_1920x.png?v=1676093460",
    },
    {
      phase: "SHOP NO. 2",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-04_1920x.png?v=1676093645",
    },
    {
      phase: "SHOP NO. 3",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-06_1920x.png?v=1676093728",
    },
    {
      phase: "SHOP NO. 4",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-08_1920x.png?v=1676093827",
    },
    {
      phase: "SHOP NO. 5",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-10_1920x.png?v=1676093875",
    },
    {
      phase: "SHOP NO. 6",
      img: "https://thevertical.pk/cdn/shop/files/payment_plan_floor_plan_final-12_1920x.png?v=1676093923",
    },
  ];

  return (
    <div className="bg-brand">
      {floorPlans.map((plan, index) => (
        <FloorPlan
          key={index}
          heading="FLOOR PLAN"
          phase={plan.phase}
          img={plan.img}
        />
      ))}
    </div>
  );
};

export default ShopFloorPlan;
