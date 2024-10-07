import DashboardLayout from "../_dashboard/DashboardLayout";

import AddAdvertisementsPage from "../_dashboard/pages/Advertisements/AddAdvertisementsPage";
import AddAffiliatesPage from "../_dashboard/pages/Affiliates/AddAffiliatesPage";
import AddAssociatesWebsitesPage from "../_dashboard/pages/AssociatesWebsites/AddAssociatesWebsitesPage";
import AddBannerPage from "../_dashboard/pages/Banner/AddBannerPage";
import AddEventPage from "../_dashboard/pages/Events/AddEventPage";
import AddFacilitiesPage from "../_dashboard/pages/Facilities/AddFacilitiesPage";
import AddImportantNoticePage from "../_dashboard/pages/ImportantNotice/AddImportantNoticePage";
import AddMediaPage from "../_dashboard/pages/Media/AddMediaPage";
import AddPhasesPage from "../_dashboard/pages/Phases/AddPhasesPage";

import DashboardPage from "../_dashboard/pages/DashboardPage";
import PhasesList from "../_dashboard/pages/Phases/PhasesList";
import ImportantNoticeList from "../_dashboard/pages/ImportantNotice/ImportantNoticeList";
import BannerList from "../_dashboard/pages/Banner/BannerList";
import AssociatesWebsiteList from "../_dashboard/pages/AssociatesWebsites/AssociatesWebsiteList";
import AddVideoPage from "../_dashboard/pages/Vidoes/AddVideoPage";
import VideosList from "../_dashboard/pages/Vidoes/VidoesList";
import AdvertisementsList from "../_dashboard/pages/Advertisements/AdvertisementsList";
import EventsList from "../_dashboard/pages/Events/EventsList";
import FacilitiesList from "../_dashboard/pages/Facilities/FacilitiesList";
import AffiliatesList from "../_dashboard/pages/Affiliates/AffiliatesList";
import PropertyDealersList from "../_dashboard/pages/PropertyDealers/PropertyDealersList";
import AddPropertyDealersPage from "../_dashboard/pages/PropertyDealers/AddPropertyDealersPage";
import MediaList from "../_dashboard/pages/Media/MediaList";
import EngineersList from "../_dashboard/pages/Engineers/EngineersList";
import ActivitiesList from "../_dashboard/pages/Activities/ActivitiesList";
import SalePropertyList from "../_dashboard/pages/SaleProperty/SalePropertyList";
import PurchasePropertyList from "../_dashboard/pages/PurchaseProperty/PurchasePropertyList";
import RegistrationPropertyList from "../_dashboard/pages/RegistrationProperty/RegistrationPropertyList";
import TeamList from "../_dashboard/pages/Team/TeamList";
import PortGuidesList from "../_dashboard/pages/PortalGuide/PortalGuidesList";
import UserList from "../_dashboard/pages/User/UserList";

import RegistrationPropertyPage from "./../_dashboard/pages/RegistrationProperty/AddPropertyRegistrationPage";
import AddPortalPage from "../_dashboard/pages/PortalGuide/AddPortalPage";
import AddUserPage from "./../_dashboard/pages/User/AddUserPage";

const adminRoutes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},

			{
				path: "/car-types",
				element: <CarType />,
			},
			{
				path: "/car-types/update/:id/:name",
				element: <UpdateCarType />,
			},
			{
				path: "/brands",
				element: <AddBrandForm />,
			},
			{
				path: "/brands/update/:id/:name",
				element: <UpdateBrand />,
			},
			{
				path: "customers/customer-details/:id",
				element: <CustomerDetailPage />,
			},
			{
				path: "videos/add",
				element: <AddVideoPage />,
			},
			{
				path: "videos/list",
				element: <VideosList />,
			},

			{
				path: "associates/add",
				element: <AddAssociatesWebsitesPage />,
			},
			{
				path: "/users",
				element: <UserList />,
			},
			{
				path: "engineers/list",
				element: <EngineersList />,
			},
			{
				path: "users/user-details/:id",
				element: <UserDetailPage />,
			},
			{
				path: "bookings/car-alot",
				element: <BookingPage />,
			},
			{
				path: "/cars",
				element: <Carlist />,
			},
			{
				path: "/cars/add-car",
				element: <AddCarForm />,
			},
			{
				path: "/cars/update-car/:id",
				element: <UpdateCars />,
			},
			{
				path: "reports",
				element: <Reports />,
			},
			{
				path: "/billing-payments/list-cards",
				element: <Cardlist />,
			},
			{
				path: "/bookings",
				element: <Carallocationtable />,
			},
			{
				path: "car-details/:id",
				element: <CarDetails />,
			},
			// {
			// 	path: "cards",
			// 	element: <CardView />,
			// },

			{
				path: "billing-payments/add-card",
				element: <CreateTransactionPage />,
			},
			{
				path: "/transcations",
				element: <TransactionList />,
			},
			{
				path: "/billing-payments/add-card/transaction-list/:id",
				element: <TransactionDetailPage />,
			},
			{
				path: "billing-payments/add-card/transaction-list/:id/transaction",
				element: <TransactionDetails />,
			},
			{
				path: "/users/update/:id",

				element: <UpdateUserPage />,
			},
		],
	},
]);

export default router;
