import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt, FaCog, FaBars } from 'react-icons/fa';
import profilePic from '../../../assets/Images/dhalogo.png'; // Ensure you have a profile picture in the assets folder

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-5 text-white bg-primary-500 w-full top-0 z-50">
      <button onClick={toggleSidebar} className="md:hidden">
        <FaBars />
      </button>
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-xl text-primary-dark" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-primary-dark rounded-full"></span>
        </button>
        <button className="relative">
          <FaCog className="text-xl" />
        </button>
        <div className="relative group">
          <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
          <div className="absolute top-full right-0 bg-white shadow-lg hidden group-hover:block">
            <ul className="list-none m-0 p-2">
              <li><a href="/profile" className="block py-1 flex items-center"><FaUserCircle className="mr-2" />Profile</a></li>
              <li><a href="/settings" className="block py-1 flex items-center"><FaCog className="mr-2" />Settings</a></li>
              <li><a href="/logout" className="block py-1 flex items-center"><FaSignOutAlt className="mr-2" />Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;