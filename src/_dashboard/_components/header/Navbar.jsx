import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt, FaCog, FaBars } from 'react-icons/fa';
import profilePic from '../../../assets/Images/dhalogo.png'; // Ensure you have a profile picture in the assets folder
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/dhalogo.png';

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(true);
    }, 300); // 300ms delay
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(false);
  };
  return (
    <header className="flex justify-between items-center px-4 p-2 text-white bg-primary-500 w-full top-0 z-50">
      <button onClick={toggleSidebar} className="md:hidden">
        <FaBars />
      </button>
      <div className='bg-primary-500'>
        <img src={logo} alt="" className='h-12' />
      </div>
      <div className="flex items-center justify-center">
      <h2 className="lg:text-2xl font-bold  text-primary-100 text-center  py-2">
				Welcome to the DHA dashboard👋
			</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-xl text-primary-dark" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-primary-dark rounded-full"></span>
        </button>

        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div
            className={`absolute top-full w-48 rounded-lg right-0 bg-[#f1f1f1] shadow-lg transition-opacity duration-300 ${isDropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <ul className="list-none m-2 text-primary-700 p-2">
              <li>
                <Link
                  to="/dashboard/profile"
                  className="block py-1 flex items-center hover:text-primary-500"
                >
                  <FaUserCircle className="mr-2" />
                  Profile
                </Link>
              </li>
              <hr className='border-primary-400' />
              <li>
                <a
                  href="/logout"
                  className="block py-1 flex items-center hover:text-primary-500"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;