import React, { useState } from 'react';
import ComplaintForm from './ComplaintForm';
import ChatModal from './ChatModel';
import DropdownIcons from './DropDownIcons';
import { MdOutlineHelpOutline } from 'react-icons/md';


const BottomMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  // Toggle complaint window open/close
  const toggleComplaint = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle chat window open/close
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Complaint submitted:', { name, email, phone, description });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
    // Close the complaint box
    setIsOpen(false);
  };

  return (
    <div className="relative bottom-4 right-4 z-10">
      {/* Floating Complaint Button */}
      <button
      onClick={toggleDropdown}
      className="bg-gradient-to-r from-indigo-500 to-purple-500 fixed bottom-7 right-6 text-white p-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      <MdOutlineHelpOutline size={36} className="animate-pulse" />
    </button>

      {/* Dropdown Icons */}
      {isDropdownOpen && (
        <DropdownIcons toggleChat={toggleChat} toggleComplaint={toggleComplaint} />
      )}

      {/* Complaint Box */}
      {isOpen && (
        <ComplaintForm
          handleSubmit={handleSubmit}
          toggleComplaint={toggleComplaint}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          description={description}
          setDescription={setDescription}
        />
      )}

      {/* Chat Box */}
      {isChatOpen && <ChatModal toggleChat={toggleChat} />}
    </div>
  );
};

export default BottomMenu;