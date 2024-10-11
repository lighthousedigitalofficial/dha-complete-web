import React from "react";

const Profile = ({ img, heading, paragraph, sincerely, position, name }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-10 p-5  md:px-16 md:py-10">
      {/* Left: CEO Image */}
      <div className="col-span-3  ">
        <img
          src={img} // Replace this with the correct image path
          alt="img"
          className="rounded-lg w-72  h-full object-cover"
        />
      </div>

      {/* Right: CEO Message */}
      <div className="col-span-7 text-white">
        <h2 className="text-xl font-bold text-white my-2">{heading}</h2>
        <p className="text-[1rem] leading-relaxed">{paragraph}</p>

        <div className="mt-5">
          <p className="text-lg font-bold">{sincerely}</p>
          <p className="text-lg font-bold mt-1">{name}</p>
          <p className="text-[1rem] float-end">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
