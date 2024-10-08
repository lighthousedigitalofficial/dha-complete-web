import { useSelector } from "react-redux";

const useAuth = () => {
	// Get the userInfo from the Redux store
	const user = useSelector((state) => state.auth?.userInfo);

	return user;
};

export default useAuth;
