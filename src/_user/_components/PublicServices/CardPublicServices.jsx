import React, { useState } from 'react';

const CardPublicServices = ({ title, videoSrc, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Card */}
      <div
        onClick={toggleModal}
        className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-80 object-cover"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-end bottom-4 left-4 justify-start opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h2 className="text-brand text-2xl font-bold">{title}</h2>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleModal}></div>
          <div className="w-[75%] mx-auto relative z-10 transition-transform duration-300 ease-in-out transform scale-100">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            {videoSrc ? (
              <video src={videoSrc} className="w-full  object-cover rounded-lg" controls autoPlay />
            ) : (
              <img src={imageSrc} alt={title} className="w-full  object-cover rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPublicServices;