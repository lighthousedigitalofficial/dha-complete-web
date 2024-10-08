import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./../components/shared/Loader";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./_components/header/Navbar";
import Sidebar from "./_components/shared/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = useAuth();
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // useEffect(() => {
  // 	if (!user) {
  // 		// Redirect to login if not authenticated
  // 		navigate("/login");
  // 	} else if (user.role !== "admin") {
  // 		navigate("/");
  // 	}
  // }, [navigate, user]);

	// // Loading or no user data
	// if (!user) {
	// 	return <Loader />;
	// }

  // If user is authenticated and is an admin, render the dashboard layout
  return (
    <div className="flex h-screen">
      <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out bg-gray-800 text-white w-72 md:relative md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 md:hidden">
          <button onClick={toggleSidebar}>
            <FaTimes />
          </button>
          
        </div>
        <Sidebar isSidebarOpen={true} />
      </aside>
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4 mt-16 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
