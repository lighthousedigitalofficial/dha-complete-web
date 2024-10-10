import { Outlet } from "react-router-dom";

import logo from "./../assets/Images/dhalogo.png";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const AuthLayout = () => {
  //   const user = useAuth();
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   console.log(user);
  //
  //   useEffect(() => {
  //     if (user && user?.doc && user.doc?.role === "admin") {
  //       navigate("/");
  //     } else if (user && user?.doc) {
  //       navigate("/");
  //     } else {
  //       dispatch(logout());
  //       navigate("/user/auth/sign-in");
  //     }
  //   }, [dispatch, navigate, user]);

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
