import React from "react";

const HeroSection = () => {
  return (
    <video
      className="w-screen h-[90vh] object-cover object-top"
      src="/dha.mp4"
      title="Video player"
      autoPlay
      loop
      muted
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroSection;
