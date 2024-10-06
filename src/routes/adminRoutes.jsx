import DashboardLayout from "../_dashboard/DashboardLayout";
import DashboardPage from "../_dashboard/pages/DashboardPage";

const adminRoutes = [
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element: <DashboardPage />,
			},
		],
	},
];

export default adminRoutes;
