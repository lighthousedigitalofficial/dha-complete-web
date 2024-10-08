import DashboardLayout from "../_dashboard/DashboardLayout";

import AddAffiliatesPage from "../_dashboard/pages/Affiliates/AddAffiliatesPage";
import AddAssociatesWebsitesPage from "../_dashboard/pages/AssociatesWebsites/AddAssociatesWebsitesPage";
import AddBannerPage from "../_dashboard/pages/Banner/AddBannerPage";
import AddEventPage from "../_dashboard/pages/Events/AddEventPage";
import AddFacilitiesPage from "../_dashboard/pages/Facilities/AddFacilitiesPage";
import AddImportantNoticePage from "../_dashboard/pages/ImportantNotice/AddImportantNoticePage";
import AddMediaPage from "../_dashboard/pages/Media/AddMediaPage";
import AddPhasePage from "../_dashboard/pages/Phases/AddPhasePage";
import DashboardPage from "../_dashboard/pages/DashboardPage";
import PhasesList from "../_dashboard/pages/Phases/PhasesList";
import ImportantNoticeList from "../_dashboard/pages/ImportantNotice/ImportantNoticeList";
import BannerList from "../_dashboard/pages/Banner/BannerList";
import AssociatesWebsiteList from "../_dashboard/pages/AssociatesWebsites/AssociatesWebsiteList";
import AddVideoPage from "../_dashboard/pages/Vidoes/AddVideoPage";
import VideosList from "../_dashboard/pages/Vidoes/VidoesList";
import EventsList from "../_dashboard/pages/Events/EventsList";
import FacilitiesList from "../_dashboard/pages/Facilities/FacilitiesList";
import AffiliatesList from "../_dashboard/pages/Affiliates/AffiliatesList";
import PropertyDealersList from "../_dashboard/pages/PropertyDealers/PropertyDealersList";
import AddPropertyDealersPage from "../_dashboard/pages/PropertyDealers/AddPropertyDealersPage";
import MediaList from "../_dashboard/pages/Media/MediaList";
import PortGuidesList from "../_dashboard/pages/PortalGuide/PortalGuidesList";
import AddPortalPage from "../_dashboard/pages/PortalGuide/AddPortalPage";

import UserList from "./../_dashboard/pages/User/UserList";
import AddUserPage from "./../_dashboard/pages/User/AddUserPage";
import RegistrationPropertyPage from "../_dashboard/pages/RegistrationProperty/AddPropertyRegistrationPage";
import RegistrationPropertyList from "./../_dashboard/pages/RegistrationProperty/RegistrationPropertyList";
import UserDetailPage from "../_dashboard/pages/User/UserDetailPage";

const adminRoutes = [
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element: <DashboardPage />,
			},

			{
				path: "affiliates/add",
				element: <AddAffiliatesPage />,
			},
			{
				path: "affiliates/list",
				element: <AffiliatesList />,
			},
			{
				path: "associates/add",
				element: <AddAssociatesWebsitesPage />,
			},
			{
				path: "associates/list",
				element: <AssociatesWebsiteList />,
			},

			{
				path: "facilities/list",
				element: <FacilitiesList />,
			},
			{
				path: "facilities/list",
				element: <FacilitiesList />,
			},
			{
				path: "facilities/add",
				element: <AddFacilitiesPage />,
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
				path: "associates/list",
				element: <AssociatesWebsiteList />,
			},

			{
				path: "banners/add",
				element: <AddBannerPage />,
			},
			{
				path: "banners/list",
				element: <BannerList />,
			},

			{
				path: "events/add",
				element: <AddEventPage />,
			},
			{
				path: "events/list",
				element: <EventsList />,
			},

			{
				path: "important-notices/add",
				element: <AddImportantNoticePage />,
			},
			{
				path: "important-notices/list",
				element: <ImportantNoticeList />,
			},

			{
				path: "media/add",
				element: <AddMediaPage />,
			},
			{
				path: "media/list",
				element: <MediaList />,
			},

			{
				path: "phases/add",
				element: <AddPhasePage />,
			},
			{
				path: "users/add",
				element: <AddUserPage />,
			},
			{
				path: "users/list",
				element: <UserList />,
			},
			{
				path: "portal-guide/add",
				element: <AddPortalPage />,
			},
			{
				path: "portal-guide/list",
				element: <PortGuidesList />,
			},
			{
				path: "phases/list",
				element: <PhasesList />,
			},

			{
				path: "property-dealers/add",
				element: <AddPropertyDealersPage />,
			},
			{
				path: "property-dealers/list",
				element: <PropertyDealersList />,
			},
			{
				path: "registration-property/add",
				element: <RegistrationPropertyPage />,
			},
			{
				path: "registration-property/list",
				element: <RegistrationPropertyList />,
			},
			{
				path: "profile",
				element: <UserDetailPage />,
			},
		],
	},
];

export default adminRoutes;
