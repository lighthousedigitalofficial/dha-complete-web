import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight, FaBars } from 'react-icons/fa';
import { sidebarItems } from '../../../utils/data';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="md:hidden fixed top-4 left-4 z-50 text-white">
        <FaBars />
      </button>
      <div className={`fixed top-0 left-0 h-full w-64 bg-primary-700 h-screen overflow-y-auto text-white p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 custom-scrollbar`}>
        <div className="w-full flex flex-col justify-center text-white">
          {sidebarItems.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-700"
                onClick={() => handleItemClick(index, !!item.subItems)}
              >
                <div className="flex items-center flex-1">
                  <item.icon className="mr-2" />
                  {item.subItems ? (
                    <span className="flex-1">{item.label}</span>
                  ) : (
                    <Link to={item.path} className="flex-1">
                      {item.label}
                    </Link>
                  )}
                </div>
                {item.subItems && (
                  <span className='text-sm'>
                    {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              {activeIndex === index && item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem.path}
                      key={subIndex}
                      className="block text-sm p-2 hover:bg-gray-700 flex items-center"
                    >
                      <subItem.icon className="mr-2" />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;