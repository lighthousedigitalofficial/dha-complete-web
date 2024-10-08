import React from "react";
import { useGetGuidesQuery } from "../redux/slices/guidesSlice";

const GuidePage = () => {
  // Fetch guides using the useGetGuidesQuery hook
  const { data, error, isLoading } = useGetGuidesQuery();

  if (isLoading) {
    return <div className="text-white">Loading...</div>; // Change loading text color
  }

  if (error) {
    return <div className="text-red-500">Error loading guides: {error.message}</div>; // Change error text color
  }

  // Check if data is available and guides exist
  const guides = data?.doc || [];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5"> {/* Updated color scheme */}
      {/* Guides Section */}
      {guides.length > 0 && (
        <div className="space-y-8 mt-5">
          {guides.map((guide) => (
            <div key={guide._id} className="flex flex-col items-center bg-gray-800 rounded-md shadow-lg p-5"> {/* Grouping all elements together */}
              <div className="overflow-hidden rounded-md shadow-md w-full md:w-[80%] lg:w-[70%]">
                {/* Use the video URL from the guide data */}
                <video
                  src={guide.video} // Use the video URL
                  alt={guide.title} // Use title as the alt text
                  className="h-[700px] w-full object-cover object-center" // Increased height
                  controls // Add controls to the video player
                  autoPlay // Enable autoplay
                  muted // Mute the video for autoplay to work on mobile
                  playsInline // Allows autoplay on mobile devices
                />
              </div>
              {/* Display guide title and content */}
              <h2 className="text-white w-[80vw] text-[1.5rem] md:text-[2rem] font-bold mt-4 text-center">
                {guide.title}
              </h2>
              <p className="text-white text-[1rem] md:text-[1.2rem] mt-2 text-center px-4">
                {guide.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuidePage;
