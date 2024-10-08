import HomePage from "../_user/pages/HomePage";
import NotFoundPage from "../_user/pages/NotFoundPage";
import UserLayout from "../_user/UserLayout";

const userRoutes = [
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
];

export default userRoutes;
