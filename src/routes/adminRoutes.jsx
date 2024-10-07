import DashboardLayout from "../_dashboard/DashboardLayout";

import AddAffiliatesPage from "../_dashboard/pages/Affiliates/AddAffiliatesPage";
import AddAssociatesWebsitesPage from "../_dashboard/pages/AssociatesWebsites/AddAssociatesWebsitesPage";
import AddBannerPage from "../_dashboard/pages/Banner/AddBannerPage";
import AddEventPage from "../_dashboard/pages/Events/AddEventPage";
import AddFacilitiesPage from "../_dashboard/pages/Facilities/AddFacilitiesPage";
import AddImportantNoticePage from "../_dashboard/pages/ImportantNotice/AddImportantNoticePage";
import AddMediaPage from "../_dashboard/pages/Media/AddMediaPage";
// import AddPhasesPage from "../_dashboard/pages/Phases/AddPhasesPage";
import DashboardPage from "../_dashboard/pages/DashboardPage";
import PhasesList from "../_dashboard/pages/Phases/PhasesList";
import ImportantNoticeList from "../_dashboard/pages/ImportantNotice/ImportantNoticeList";
import BannerList from "../_dashboard/pages/Banner/BannerList";
import AssociatesWebsiteList from "../_dashboard/pages/AssociatesWebsites/AssociatesWebsiteList";

import EventsList from "../_dashboard/pages/Events/EventsList";
import FacilitiesList from "../_dashboard/pages/Facilities/FacilitiesList";
import AffiliatesList from "../_dashboard/pages/Affiliates/AffiliatesList";
import PropertyDealersList from "../_dashboard/pages/PropertyDealers/PropertyDealersList";
import AddPropertyDealersPage from "../_dashboard/pages/PropertyDealers/AddPropertyDealersPage";
import MediaList from "../_dashboard/pages/Media/MediaList";
import AddPhasesPage from "../_dashboard/pages/Phases/AddPhasesPage";
import AddVideosPage from "../_dashboard/pages/Vidoes/AddVideosPage";
import VideosList from "../_dashboard/pages/Vidoes/VidoesList";

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
        element: <AddVideosPage />,
      },
      {
        path: "videos/list",
        element: <VideosList />,
      },

      {
        path: "associates-websites/add",
        element: <AddAssociatesWebsitesPage />,
      },
      {
        path: "associates-websites/list",
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
        path: "phases/page",
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
    ],
  },
];

export default adminRoutes;
