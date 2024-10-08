import { Outlet, useNavigate } from "react-router-dom";

import logo from "./../assets/Images/dhalogo.png";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
	const user = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user && user.doc.role === "admin") {
			navigate("/");
		} else if (user) {
			navigate("/");
		} else navigate("/user/auth/sign-in");
	}, [navigate, user]);

	return (
		<div className="my-4 p-8 flex justify-between items-center flex-col">
			<img src={logo} alt="DHA" className="w-32 h-32 object-contain mb-4" />
			<div className="p-8 lg:w-1/2 w-full shadow-md">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
