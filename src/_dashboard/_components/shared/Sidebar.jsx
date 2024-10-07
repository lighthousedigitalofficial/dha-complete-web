import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import PropTypes from "prop-types";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { sidebarItems } from "../../utils/data";
import logo from "../../assets/Images/dhalogo.png";

const SideBar = ({ isSidebarOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (index, event) => {
    if (!isSidebarOpen) {
      setHoveredItem(index);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarOpen) {
      setHoveredItem(null);
      setAnchorEl(null);
    }
  };

  const handleClick = (index) => {
    if (isSidebarOpen) {
      setClickedItem((prevClickedItem) =>
        prevClickedItem === index ? null : index
      );
    }
  };

  return (
    <div className="h-full font-montserrat">
      <div className="sticky bg-white w-full h-24">
        <div className="">
          {isSidebarOpen ? (
            <img src={logo} alt="Logo" className="w-24 mx-auto p-1" />
          ) : (
            <img src={logo} alt="Logo" className="w-12 mx-auto p-1" />
          )}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center mt-10 text-white">
        {sidebarItems.map((section, index) => {
          const content = (
            <div className="fixed -top-6 w-48 flex flex-col min-h-12 pl-4 py-3 text-primary-dark justify-start">
              <Link to={section.path} className="-ml-4">
                {section.label}
              </Link>
              {section.subSections &&
                section.subSections.map((subItem, subIndex) => (
                  <Link
                    to={subItem.path}
                    key={subIndex}
                    className="flex items-center gap-2 pl-2 p-2 hover:bg-primary-light"
                  >
                    {subItem.icon && <subItem.icon />}
                    {subItem.label}
                  </Link>
                ))}
            </div>
          );

          return (
            <div
              key={index}
              onMouseEnter={(event) => handleMouseEnter(index, event)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <Popper
                open={!isSidebarOpen && hoveredItem === index}
                anchorEl={anchorEl}
                placement="right"
                transition
                sx={{ zIndex: 1200 }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={700}>
                    <Paper>{content}</Paper>
                  </Fade>
                )}
              </Popper>

              <div className="relative flex border-b items-center hover:bg-primary-dark lg:w-full w-64 hover:text-primary-light">
                <Link to={section.path} className="w-full ">
                  <div
                    className={`relative flex items-center w-full h-12 w-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-primary-light hover:text-primary-light`}
                  >
                    <div className="w-12 flex justify-center font-white items-center text-xl">
                      {section.icon && <section.icon />}
                    </div>
                    <div
                      className={`flex items-center justify-between transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                      }`}
                    >
                      {isSidebarOpen && (
                        <div
                          className={`h-12 flex items-center whitespace-nowrap w-36 text-white hover:text-primary-light p-2`}
                        >
                          {section.label}
                        </div>
                      )}
                      {isSidebarOpen && section.subSections && (
                        <div className="text-primary-light ml-4">
                          {clickedItem === index ? (
                            <FaCaretDown />
                          ) : (
                            <FaCaretRight />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>

              {section.subSections && (
                <div
                  className={`${
                    isSidebarOpen && clickedItem === index ? "block" : "hidden"
                  } 
                   transition-all duration-300 ease-in-out`}
                >
                  {section.subSections.map((subSection, subIndex) => (
                    <Link
                      to={subSection.path}
                      key={subIndex}
                      className="flex items-center px-8 py-2 hover:bg-primary-dark hover:text-white"
                    >
                      <div className="flex text-white pr-2 justify-center transition-transform duration-300 ease-in-out">
                        {subSection.icon && <subSection.icon />}
                      </div>
                      <span
                        className={`transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                        }`}
                      >
                        {subSection.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SideBar;
