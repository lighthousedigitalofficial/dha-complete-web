import { Link } from "react-router-dom";

const NotAuthorizedPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 text-center">
				<h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
				<p className="text-gray-700 mb-6">
					You are not authorized to access this page.
				</p>
				<Link
					to="/user/auth/sign-in"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default NotAuthorizedPage;
