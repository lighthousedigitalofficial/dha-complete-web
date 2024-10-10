import DashboardLayout from "../_dashboard/DashboardLayout";
import AddAffiliatesPage from "../_dashboard/pages/Affiliates/AddAffiliatesPage";
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
import EngineersList from "../_dashboard/pages/Engineers/EngineersList";
import ActivitiesList from "../_dashboard/pages/Activities/ActivitiesList";
import ActivityForm from "../_dashboard/pages/Activities/AddActivityPage";
import SalePropertyList from "../_dashboard/pages/SaleProperty/SalePropertyList";
import PurchasePropertyList from "../_dashboard/pages/PurchaseProperty/PurchasePropertyList";
import RegistrationPropertyList from "../_dashboard/pages/RegistrationProperty/RegistrationPropertyList";
import TeamList from "../_dashboard/pages/Team/TeamList";
import PortGuidesList from "../_dashboard/pages/PortalGuide/PortalGuidesList";
import AddPortalPage from "../_dashboard/pages/PortalGuide/AddPortalPage";

import UserList from "./../_dashboard/pages/User/UserList";
import AddUserPage from "./../_dashboard/pages/User/AddUserPage";
import UserDetailPage from "./../_dashboard/pages/User/UserDetailPage";

import SalePropertyForm from "./../_dashboard/pages/SaleProperty/AddSalePropertyPage";
import RegistrationPropertyPage from "./../_dashboard/pages/RegistrationProperty/AddPropertyRegistrationPage";
import EngineersForm from "./../_dashboard/pages/Engineers/AddEngineersPage";
import TeamForm from "./../_dashboard/pages/Team/AddTeamPage";
import PurchasePropertyForm from "./../_dashboard/pages/PurchaseProperty/AddPurchasePropertyPage";
import AddActivityPage from "../_dashboard/pages/Activities/AddActivityPage";
import NotFoundPage from "../_user/pages/NotFoundPage";
import NotAuthorizedPage from "../_dashboard/pages/NotAuthorizedPage";
import AddAssociatesWebsitePage from "../_dashboard/pages/AssociatesWebsites/AddAssociatesWebsitePage";

import EventEditPage from "../_dashboard/pages/Events/EventEditPage";
import EditTeamPage from "../_dashboard/pages/Team/EditTeamPage";
import EditRegistrationProperty from "../_dashboard/pages/RegistrationProperty/EditRegistrationProperty";
import EditPortalguides from "../_dashboard/pages/PortalGuide/EditPortalguides";
import EditEngineersPage from "../_dashboard/pages/Engineers/EditEngineersPage";
import EditImportantNotice from "../_dashboard/pages/ImportantNotice/EditImportantNotice";

const adminRoutes = [
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element: <DashboardPage />,
			},

			{
				path: "sale-property/add",
				element: <SalePropertyForm />,
			},
			{
				path: "registration-property/add",
				element: <RegistrationPropertyPage />,
			},
			{
				path: "purchase-property/add",
				element: <PurchasePropertyForm />,
			},
			{
				path: "engineers/add",
				element: <EngineersForm />,
			},
			{
				path: "team/add",
				element: <TeamForm />,
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
				element: <AddAssociatesWebsitePage />,
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
				path: "events/edit/:id",
				element: <EventEditPage />,
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
				path: "important-notices/edit/:id",
				element: <EditImportantNotice />,
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
				path: "portal-guide/edit/:id",

				element: <EditPortalguides />,
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
				path: "engineers/add",
				element: <EngineersForm />,
			},
			{
				path: "engineers/list",
				element: <EngineersList />,
			},

			{
				path: "engineers/edit/:id",

				element: <EditEngineersPage />,
			},

			//   {
			//     path: "activities/list",
			//     element: <ActivitiesList />,
			//   },

			{
				path: "activities/add",
				element: <ActivityForm />,
			},

			{
				path: "sale-property/list",
				element: <SalePropertyList />,
			},

			{
				path: "purchase-property/list",
				element: <PurchasePropertyList />,
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
				path: "registration-property/edit/:id",

				element: <EditRegistrationProperty />,
			},
			{
				path: "team/list",
				element: <TeamList />,
			},
			{
				path: "teams/edit/:id",
				element: <EditTeamPage />,
			},
			

			{
				path: "portal-guide/list",
				element: <PortGuidesList />,
			},
			{
				path: "users/list",
				element: <UserList />,
			},
			{
				path: "profile",
				element: <UserDetailPage />,
			},

			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: "/not-authorized",
		element: <NotAuthorizedPage />,
	},
];

export default adminRoutes;
