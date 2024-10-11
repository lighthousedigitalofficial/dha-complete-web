import React from "react";

const Hero_Section = () => {
  return (
    <video
      className="w-screen h-screen object-cover"
      src="/dha1.mp4"
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

export default Hero_Section;
