import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // For the hamburger and close icons
import logo from '../../assets/Images/dhalogo.gif';
import MediaDropDown from './MediaDropdown';

const Navbar = ({ menuData }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);
  const [subsubDropdownVisible, setSubsubDropdownVisible] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (index) => {
    setDropdownVisible(index);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
    setSubDropdownVisible(null);
    setSubsubDropdownVisible(null);
  };

  const handleSubMouseEnter = (index) => {
    setSubDropdownVisible(index);
  };

  const handleSubMouseLeave = () => {
    setSubDropdownVisible(null);
    setSubsubDropdownVisible(null);
  };

  const handleSubsubMouseEnter = (index) => {
    setSubsubDropdownVisible(index);
  };

  const handleSubsubMouseLeave = () => {
    setSubsubDropdownVisible(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` flex p-2 px-8 lg:px-16 w-full justify-between text-cream items-center transition-all font-bold duration-500 ${isScrolled ? 'bg-primarydark ' : 'bg-primary'}`} style={{ fontFamily: 'system-ui' }}>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-10 lg:h-16 rounded-full transition-transform duration-500 transform ${isScrolled ? 'scale-90' : 'scale-100'}" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden text-cream text-2xl" onClick={toggleMobileMenu}>
        {mobileMenuVisible ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Items - Hidden on Mobile */}
      
      <ul className={`lg:flex lg:flex-wrap w-[80%] space-x-4 text-sm items-center jusitfy-center hidden uppercase`}>
        {menuData.map((item, index) => (
          <li
            key={index}
            className="relative group p-2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.link || '#'} className="hover:text-gray-200">
              {item.label}
            </Link>
            {(dropdownVisible === index && (item.subItems || item.DropDown)) && (
              <ul className="absolute left-0 p-2 w-52 bg-primary border border-white z-50 text-cream transition duration-300 delay-200">
                {item.subItems &&
                  item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative group"
                      onMouseEnter={() => handleSubMouseEnter(subIndex)}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      <Link to={subItem.link || '#'} className="block px-2 py-2 hover:bg-gray-200 hover:text-primary ">
                        {subItem.label}
                      </Link>
                      {subIndex !== item.subItems.length - 1 && <div className='border-b mr-4'></div>}
                      {subDropdownVisible === subIndex && subItem.DropDown && (
                        <ul className="absolute left-[95%] w-52 top-0 p-2 bg-primary z-50  border border-white transition duration-300 delay-200">
                          {subItem.DropDown.map((dropDownItem, dropIndex) => (
                            <li
                              key={dropIndex}
                              className="relative group"
                              onMouseEnter={() => handleSubsubMouseEnter(dropIndex)}
                              onMouseLeave={handleSubsubMouseLeave}
                            >
                              <Link to={dropDownItem.link || '#'} className="block px-2 py-2 hover:bg-gray-200 hover:text-primary">
                                {dropDownItem.label}
                              </Link>
                              {dropIndex !== subItem.DropDown.length - 1 && <div className='border-b mr-4'></div>}
                              {subsubDropdownVisible === dropIndex && dropDownItem.subDropDown && (
                                <ul className="absolute left-[95%] w-52 top-0 p-2 bg-primary z-50   border border-white transition duration-300 delay-200">
                                  {dropDownItem.subDropDown.map((subDropDownItem, subDropDownIndex) => (
                                    <li key={subDropDownIndex} className='relative group'>
                                      <Link
                                        to={subDropDownItem.link || '#'}
                                        className="block px-2 py-2 hover:bg-gray-200 hover:text-primary "
                                      >
                                        {subDropDownItem.label}
                                      </Link>
                                      {subDropDownIndex !== dropDownItem.subDropDown.length - 1 && <div className='border-b mr-4'></div>}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <ul className="lg:hidden flex flex-col space-y-4 text-white absolute top-14 left-0 w-full bg-primary p-4">
          {menuData.map((item, index) => (
            <li key={index} className="relative">
              <div
                className="text-white uppercase cursor-pointer"
                onClick={() =>
                  dropdownVisible === index ? setDropdownVisible(null) : setDropdownVisible(index)
                }
              >
                <Link to={item.link || '#'}>{item.label}</Link>
              </div>
              {(dropdownVisible === index && (item.subItems || item.DropDown)) && (
                <ul className="mt-2 bg-primary text-white border-t border-white">
                  {item.subItems &&
                    item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="pl-4 py-2">
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            subDropdownVisible === subIndex ? setSubDropdownVisible(null) : setSubDropdownVisible(subIndex)
                          }
                        >
                          <Link to={subItem.link || '#'} className="block px-2 py-2 hover:bg-gray-200 hover:text-primary">
                            {subItem.label}
                          </Link>
                        </div>
                        {subDropdownVisible === subIndex && subItem.DropDown && (
                          <ul className="pl-4 mt-2 bg-primary">
                            {subItem.DropDown.map((dropDownItem, dropIndex) => (
                              <li key={dropIndex} className="py-1">
                                <div
                                  className="cursor-pointer"
                                  onClick={() =>
                                    subsubDropdownVisible === dropIndex ? setSubsubDropdownVisible(null) : setSubsubDropdownVisible(dropIndex)
                                  }
                                >
                                  <Link to={dropDownItem.link || '#'} className="block px-2 py-2 hover:bg-gray-200 hover:text-primary">
                                    {dropDownItem.label}
                                  </Link>
                                </div>
                                {subsubDropdownVisible === dropIndex && dropDownItem.subDropDown && (
                                  <ul className="pl-4 mt-2 bg-primary">
                                    {dropDownItem.subDropDown.map((subDropDownItem, subDropDownIndex) => (
                                      <li key={subDropDownIndex} className="py-1">
                                        <Link
                                          to={subDropDownItem.link || '#'}
                                          className="block px-2 py-2 hover:bg-gray-200 hover:text-primary"
                                        >
                                          {subDropDownItem.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string,
          DropDown: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              link: PropTypes.string,
              subDropDown: PropTypes.arrayOf(
                PropTypes.shape({
                  label: PropTypes.string.isRequired,
                  link: PropTypes.string,
                })
              ),
            })
          ),
        })
      ),
      DropDown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string,
          subDropDown: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              link: PropTypes.string,
            })
          ),
        })
      ),
    })
  ).isRequired,
};

export default Navbar;