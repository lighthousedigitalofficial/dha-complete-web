import React from "react";

const GoalsCard = ({ heading, pragraph }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">{heading}</h2>
      <p className="text-lg text-center">{pragraph}</p>
    </div>
  );
};

export default GoalsCard;
