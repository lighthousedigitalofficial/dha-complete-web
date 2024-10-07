import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "./../components/shared/Loader";

const DashboardLayout = () => {
  const user = useAuth();
  const navigate = useNavigate();

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
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
