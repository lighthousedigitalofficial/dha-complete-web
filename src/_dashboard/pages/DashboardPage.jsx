// import { useGetEmployeesQuery } from "../../query/services/employeesApi";
// import { useGetSectionsQuery } from "../../query/services/sectionApi";
// import Loader from "./../../components/shared/Loader";
import { FaBuilding, FaDollarSign,  FaRegCalendarAlt, FaRegListAlt, FaTag, FaUsersCog, FaUserTie, FaWrench } from "react-icons/fa";
import DashboardCard from "../_components/Dashboard/DashboardCard";
import { MdNotificationImportant } from "react-icons/md";

// import { useGetEmployeeAllowancesQuery } from "../../query/services/employeeAllowances";
// import { useGetEmployeeDeductionsQuery } from "../../query/services/employeeDeductions";

const Dashboard = () => {
	// const { data: employees, isLoading: employeesLoading } =
	// 	useGetEmployeesQuery();
	// const { data: sections, isLoading: sectionsLoading } = useGetSectionsQuery();
	// const { data: employeeAllowances, isLoading: employeeAllowancesLoading } =
	// 	useGetEmployeeAllowancesQuery();
	// const { data: employeeDeductions, isLoading: employeeDeductionsLoading } =
	// 	useGetEmployeeDeductionsQuery();

	// const totalSections = sections?.doc?.length;
	// const totalEmployees = employees?.doc?.length;
	// const totalAllowances = employeeAllowances?.doc?.reduce(
	// 	(acc, employee) => (acc += employee.totalAllowances),
	// 	0
	// );
	// const totalDeductions = employeeDeductions?.doc?.reduce(
	// 	(acc, employee) => (acc += employee.totalDeductions),
	// 	0
	// );

	const cardsData = [
		{
			title: "Important Notices",
			total: 0,
			bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700",
			link: "/notices",
			icon: MdNotificationImportant, // Changed icon
		},
		{
			title: "Phases",
			total: 0,
			bgColor: "bg-gradient-to-r from-green-500 to-green-700",
			link: "/phases",
			icon: FaRegListAlt, // Changed icon
		},
		{
			title: "Engineers",
			total: 0,
			bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
			link: "/engineers",
			icon: FaWrench, // Changed icon
		},
		{
			title: "Users",
			total: 0,
			bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
			link: "/users",
			icon: FaUsersCog, // Changed icon
		},
		{
			title: "Register Property",
			total: 0,
			bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700",
			link: "/registered-properties",
			icon: FaBuilding, // Changed icon
		},
		{
			title: "Sale Property",
			total: 0,
			bgColor: "bg-gradient-to-r from-red-500 to-red-700",
			link: "/sale-properties",
			icon: FaTag, // Changed icon
		},
		{
			title: "Purchase Property",
			total: 0,
			bgColor: "bg-gradient-to-r from-teal-500 to-teal-700",
			link: "/purchase-properties",
			icon: FaDollarSign, // Changed icon (same for demonstration)
		},
		{
			title: "Property Dealer",
			total: 0,
			bgColor: "bg-gradient-to-r from-gray-500 to-gray-700",
			link: "/property-dealers",
			icon: FaUserTie, // Changed icon (same for demonstration)
		},
		{
			title: "Events",
			total: 0,
			bgColor: "bg-gradient-to-r from-pink-500 to-pink-700",
			link: "/events",
			icon: FaRegCalendarAlt, // Changed icon
		},
	];
	
	

	// if (
	// 	employeesLoading ||
	// 	sectionsLoading ||
	// 	employeeAllowancesLoading ||
	// 	employeeDeductionsLoading
	// ) {
	// 	return <Loader />;
	// }

	return (
		<div className="p-2">			
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
				{cardsData.map((card) => (
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
	);
};

export default Dashboard;