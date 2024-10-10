import {
	FaBuilding,
	FaDollarSign,
	FaRegCalendarAlt,
	FaRegListAlt,
	FaTag,
	FaUsersCog,
	FaUserTie,
	FaWrench,
} from "react-icons/fa";
import DashboardCard from "../_components/Dashboard/DashboardCard";
import { MdNotificationImportant } from "react-icons/md";
import { useGetDashboardStatsQuery } from "../../redux/slices/dashboardSlice";
import Loader from "../../components/shared/Loader";

const Dashboard = () => {
	const { data, isLoading } = useGetDashboardStatsQuery({});

	const cardsData = [
		{
			title: "Important Notices",
			total: data?.doc?.totalNotice || 0,
			bgColor: "bg-gradient-to-r from-yellow-700 to-yellow-900",
			link: "/important-notices/list",
			icon: MdNotificationImportant, // Changed icon
		},
		{
			title: "Phases",
			total: data?.doc?.totalPhases || 0,
			bgColor: "bg-gradient-to-r from-green-500 to-green-700",
			link: "/phases/list",
			icon: FaRegListAlt, // Changed icon
		},
		{
			title: "Engineers",
			total: data?.doc?.totalEngineers || 0,
			bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
			link: "/engineers/list",
			icon: FaWrench, // Changed icon
		},
		{
			title: "Users",
			total: data?.doc?.totalUsers || 0,
			bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
			link: "/users/list",
			icon: FaUsersCog, // Changed icon
		},
		{
			title: "Register Property",
			total: data?.doc?.totalPropertyDealers || 0,
			bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700",
			link: "/registration-property/list",
			icon: FaBuilding, // Changed icon
		},
		{
			title: "Sale Property",
			total: data?.doc?.totalSalesProperty || 0,
			bgColor: "bg-gradient-to-r from-red-500 to-red-700",
			link: "/sale-property/list",
			icon: FaTag, // Changed icon
		},
		{
			title: "Purchase Property",
			total: data?.doc?.totalPurchaseProperty || 0,
			bgColor: "bg-gradient-to-r from-teal-500 to-teal-700",
			link: "/purchase-property/list",
			icon: FaDollarSign, // Changed icon (same for demonstration)
		},
		{
			title: "Property Dealer",
			total: data?.doc?.totalPropertyDealers || 0,
			bgColor: "bg-gradient-to-r from-cyan-400 to-cyan-700",
			link: "/property-dealers/list",
			icon: FaUserTie, // Changed icon (same for demonstration)
		},
		{
			title: "Events",
			total: data?.doc?.totalEvents || 0,
			bgColor: "bg-gradient-to-r from-pink-500 to-pink-700",
			link: "/events/list",
			icon: FaRegCalendarAlt, // Changed icon
		},
	];

	return isLoading ? (
		<Loader />
	) : cardsData ? (
		<div className="p-2">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{cardsData?.map((card) => (
					<DashboardCard
						key={card.title}
						title={card.title}
						total={card.total}
						bgColor={card.bgColor}
						link={card.link}
						icon={() => <card.icon size="3em" />}
					/>
				))}
			</div>
		</div>
	) : (
		<h1>WELCOME TO DHA ADMIN DASHBOARD... 🙋‍♂️🙋‍♂️</h1>
	);
};

export default Dashboard;
