import DashboardLayout from "../_dashboard/DashboardLayout";

const adminRoutes = [
	{
		path: "/admin",
		element: <DashboardLayout />,
		children: [
			// {
			// 	path: "dashboard",
			// 	element: <AdminDashboard />,
			// },
		],
	},
];

export default adminRoutes;
