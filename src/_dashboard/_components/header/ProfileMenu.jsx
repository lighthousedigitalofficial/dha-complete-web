/* eslint-disable react/prop-types */
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import profilePic from "../../../assets/Images/dhalogo.png";

import { useUserLogoutMutation } from "../../../redux/slices/usersApiSlice";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/shared/Loader";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

const ProfileMenu = ({
	handleMouseEnter,
	handleMouseLeave,
	isDropdownVisible,
}) => {
	const [userLogout, { isLoading }] = useUserLogoutMutation();
	const user = useAuth();
	const dispatch = useDispatch();

	const logoutHandler = async () => {
		try {
			if (user && user.token) {
				await userLogout(user.token);

				dispatch(logout());

				toast.success("Logout successfully");
			}
		} catch (error) {
			console.log(error);
			toast.error(error.data.message || "Error in Logout");
		}
	};

	if (isLoading) {
		return <Loader />;
	}
	return (
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
				className={`absolute top-full w-48 rounded-lg right-0 bg-[#f1f1f1] shadow-lg transition-opacity duration-100 ${
					isDropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<ul className="list-none m-2 text-primary-700 p-2">
					<li>
						<Link
							to="/dashboard/profile"
							className=" py-1 flex items-center hover:text-primary-500"
						>
							<FaUserCircle className="mr-2" />
							Profile
						</Link>
					</li>
					<hr className="border-primary-400" />
					<li>
						<button
							onClick={logoutHandler}
							className=" py-1 flex items-center hover:text-primary-500"
						>
							<FaSignOutAlt className="mr-2" />
							Logout
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileMenu;
