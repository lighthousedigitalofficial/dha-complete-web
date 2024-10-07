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
import AddVideosPage from "../_dashboard/pages/Vidoes/AddVideosPage";
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
				path: "advertisements/add",
				element: <AddAdvertisementsPage />,
			},
			{
				path: "advertisements/list",
				element: <AdvertisementsList />,
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
				path: "activities/list",
				element: <ActivitiesList />,
			},

			{
				path: "advertisements/add",
				element: <AddAdvertisementsPage />,
			},
			{
				path: "advertisements/list",
				element: <AdvertisementsList />,
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
				element: <AddVideosPage />,
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
				path: "engineers/list",
				element: <EngineersList />,
			},

			{
				path: "videos/add",
				element: <AddVideosPage />,
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
				element: <AddPhasesPage />,
			},
			{
				path: "phases/list",
				element: <PhasesList />,
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
				element: <AddPhasesPage />,
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
				path: "sale-property/list",
				element: <SalePropertyList />,
			},

			{
				path: "purchase-property/list",
				element: <PurchasePropertyList />,
			},

			{
				path: "registration-property/list",
				element: <RegistrationPropertyList />,
			},

			{
				path: "team/list",
				element: <TeamList />,
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
				path: "property-dealers/add",
				element: <AddPropertyDealersPage />,
			},
			{
				path: "property-dealers/list",
				element: <PropertyDealersList />,
			},
			{
				path: "register-property/add",
				element: <RegistrationPropertyPage />,
			},
			{
				path: "portals/add",
				element: <AddPortalPage />,
			},
			// {
			//   path: "register-property/list",
			//   element: < />,
			// },
		],
	},
];

export default adminRoutes;
