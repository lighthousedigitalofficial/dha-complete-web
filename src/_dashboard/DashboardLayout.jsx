import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./../components/shared/Loader";
import { FaTimes } from "react-icons/fa";
import Navbar from "./_components/header/Navbar";
import Sidebar from "./_components/shared/Sidebar";

const DashboardLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const user = useAuth();
	const navigate = useNavigate();

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		if (!user) {
			// Redirect to login if not authenticated
			navigate("/user/auth/sign-in");
		} else if (user.doc.role !== "admin") {
			navigate("/");
		}
	}, [navigate, user]);

	// // Loading or no user data
	if (!user) {
		return <Loader />;
	}

	// If user is authenticated and is an admin, render the dashboard layout
	return (
		<div className="relative flex overflow-hidden">
			<aside
				className={`fixed top-16 inset-y-0 left-0 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-200 ease-in-out overflow-y-auto custom-scrollbar text-white w-72 md:relative md:translate-x-0`}
			>
				<div className="flex items-center justify-between p-4 md:hidden">
					<button onClick={toggleSidebar}>
						<FaTimes />
					</button>
				</div>
				<Sidebar isSidebarOpen={true} />
			</aside>
			<div className="flex-1 flex flex-col overflow-hidden">
				<header className="fixed left-0 top-0 right-0 z-10">
					<Navbar toggleSidebar={toggleSidebar} />
				</header>
				<main className="flex-1 overflow-y-auto mt-20 p-2">
					<Outlet />
				</main>
			</div>
		</div>
	);
	// If user is authenticated and is an admin, render the dashboard layout
};

export default DashboardLayout;
