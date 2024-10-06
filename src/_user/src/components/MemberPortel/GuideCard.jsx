import React, { useState } from 'react';

const GuideCard = ({ title, description, imageSrc, videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Card */}
      <div
        onClick={toggleModal}
        className="cursor-pointer rounded-[10px] shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-cream">{title}</h2>
        </div>
        {videoSrc ? (
          <video src={videoSrc} className="w-full h-96 object-cover" controls autoPlay/>
        ) : (
          <img src={imageSrc} alt={title} className="w-full h-96 object-cover" />
        )}
        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-opacity-50 animate-fadeIn" onClick={toggleModal}></div>
          <div className=" rounded-lg shadow-lg p-6 w-[75%] mx-auto relative z-10 transition-transform duration-300 ease-in-out transform scale-100 animate-slideIn">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            {videoSrc ? (
              <video src={videoSrc} className="w-full object-cover rounded-lg" controls autoPlay/>
            ) : (
              <img src={imageSrc} alt={title} className="w-full object-cover rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideCard;