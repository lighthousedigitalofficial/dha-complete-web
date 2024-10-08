import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import { sidebarItems } from '../../../utils/data';
import logo from '../../../assets/Images/dhalogo.png';

const Sidebar = ({ isSidebarOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleItemClick = (index, hasSubItems) => {
    if (hasSubItems) {
      setActiveIndex(activeIndex === index ? null : index);
      setActiveSubIndex(null); // Reset sub-subitem index when main item is clicked
    }
  };

  const handleSubItemClick = (subIndex, hasSubSubItems) => {
    if (hasSubSubItems) {
      setActiveSubIndex(activeSubIndex === subIndex ? null : subIndex);
    }
  };

  return (
    <>
      <button onClick={isSidebarOpen} className="md:hidden fixed top-4 left-4 z-50 text-white">
        <FaBars />
      </button>
      <div className='bg-primary-500 w-full flex items-center justify-center'>
        <img src={logo} alt="" className='w-36 p-4' />
      </div>
      <div className={`fixed top-0 left-0 h-full w-72 py-4 bg-primary-500 min-h-screen overflow-y-auto text-white p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 custom-scrollbar`}>
        <div className="w-full flex flex-col justify-center text-white">
          {sidebarItems.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex items-center justify-between cursor-pointer p-2 hover:bg-primary-400 rounded-lg"
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
                  <span className='text-xs'>
                    {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              {activeIndex === index && item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="">
                      <div
                        className="flex items-center justify-between cursor-pointer text-sm p-2 hover:bg-primary-400 rounded-lg"
                        onClick={() => handleSubItemClick(subIndex, !!subItem.subsubItems)}
                      >
                        <div className="flex items-center flex-1">
                          <subItem.icon className="mr-2" />
                          {subItem.subsubItems ? (
                            <span className="flex-1">{subItem.label}</span>
                          ) : (
                            <Link to={subItem.path} className="flex-1">
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                        {subItem.subsubItems && (
                          <span className='text-xs'>
                            {activeSubIndex === subIndex ? <FaChevronDown /> : <FaChevronRight />}
                          </span>
                        )}
                      </div>
                      {activeSubIndex === subIndex && subItem.subsubItems && (
                        <div className="pl-4">
                          {subItem.subsubItems.map((subSubItem, subSubIndex) => (
                            
                            <Link
                              to={subSubItem.path}
                              key={subSubIndex}
                              className="block text-sm p-2 hover:bg-primary-400 flex items-center rounded-lg"
                            >
                               <subSubItem.icon className="mr-2 text-xs" />
                              {subSubItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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