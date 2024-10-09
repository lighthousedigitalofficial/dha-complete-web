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
		<header className="flex justify-between items-center p-5 text-white bg-primary-500 w-full top-0 z-50">
			<button onClick={toggleSidebar} className="md:hidden">
				<FaBars />
			</button>
			<div className="flex items-center">
				<h1 className="text-lg   text-white font-sans tracking-wide">
					Welcome to DHA, Admin Panel
				</h1>
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
