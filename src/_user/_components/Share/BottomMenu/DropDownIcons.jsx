import React from 'react';
import { BsPersonExclamation } from 'react-icons/bs';
import { MdChat } from 'react-icons/md';

const DropdownIcons = ({ toggleChat, toggleComplaint }) => {
  return (
    <div className="fixed bottom-32 right-8 flex flex-col items-center space-y-4 mt-2">
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        <MdChat size={36} />
      </button>
      <button
        onClick={toggleComplaint}
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-full shadow-lg hover:from-green-600 hover:to-teal-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        <BsPersonExclamation size={36} />
      </button>
    </div>
  );
};

export default DropdownIcons;