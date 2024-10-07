import { useSelector } from "react-redux";

const useAuth = () => {
	// Get the userInfo from the Redux store
	const user = useSelector((state) => state.userInfo?.user);

	return user;
};

export default useAuth;
 