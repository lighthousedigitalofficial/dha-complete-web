// GuideCard.js
import React from 'react';

const GuideCard = ({ title, description, videoSrc }) => {
  return (
    <div className="bg-white rounded shadow-md h-96 flex flex-col justify-between"> {/* Set fixed height and flex properties */}
      {videoSrc && (
        <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}> {/* Maintain aspect ratio (16:9) */}
          <video className="absolute top-0 left-0 w-full h-full" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="p-4 flex flex-col"> {/* Use flex for title and description */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default GuideCard;
