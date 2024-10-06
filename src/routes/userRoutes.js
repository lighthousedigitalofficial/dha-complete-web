import HomePage from "../_user/pages/HomePage";
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
		],
	},
];

export default userRoutes;
