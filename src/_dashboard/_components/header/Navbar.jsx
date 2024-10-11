
import logo from '../../../assets/Images/dhalogo.png';
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

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

				<ProfileMenu
					handleMouseLeave={handleMouseLeave}
					handleMouseEnter={handleMouseEnter}
					isDropdownVisible={isDropdownVisible}
				/>
			</div>
		</header>
	);
};

export default Navbar;
