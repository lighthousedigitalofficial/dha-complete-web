import React from "react";

const VideoGallery = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/YhpgCWE_dDE", // Correct embedded video URL
      phase: "1",
    },
    {
      url: "https://www.youtube.com/embed/eAx6v5uGBig", // Correct embedded video URL
      phase: "2",
    },
    {
      url: "https://www.youtube.com/embed/YhpgCWE_dDE", // Correct embedded video URL
      phase: "3",
    },
    {
      url: "https://www.youtube.com/embed/eAx6v5uGBig", // Correct embedded video URL
      phase: "4",
    },
    {
      url: "https://www.youtube.com/embed/YhpgCWE_dDE", // Correct embedded video URL
      phase: "5",
    },
    {
      url: "https://www.youtube.com/embed/eAx6v5uGBig", // Correct embedded video URL
      phase: "6",
    },

    // Add more videos as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-8">
      {videos.map((video, index) => (
        <div key={index} className="text-center">
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={`Episode ${video.phase}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-3xl font-bold mt-4">Phase {video.phase}</h2>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
