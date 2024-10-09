import HomePage from "../_user/pages/HomePage";
import UserLayout from "../_user/UserLayout";

import GuidePage from "./../_user/pages/GuidePage";
import CleaningServicesPage from "./../_user/pages/CleaningServicesPage";
import HomeServicesPage from "./../_user/pages/HomeServicesPage";
import HowToPay from "./../_user/_components/MemberPortel/HowToPay";
import PhotoGallery from "./../_user/pages/PhotoGallery";
import SaleProperty from "./../_user/_components/SaleProperty/SaleProperty";
import MapAllPhase from "./../_user/pages/MapAllPhase";
import MapPhaseV from "./../_user/pages/MapPhaseV";
import MapPhase2 from "./../_user/pages/MapPhase2";
import MapPhase1 from "./../_user/pages/MapPhase1";
import AllotmentCertificatePage from "./../_user/pages/AllotmentCertificatePage";
import FileOpeningPage from "./../_user/pages/FileOpeningPage";
import ContectUsPage from "./../_user/pages/ContectUsPage";
import RegistrationPage from "./../_user/pages/RegistrationPage";
import PurchaseProperityPage from "./../_user/pages/PurchaseProperityPage";
import PriceValiuationPage from "./../_user/pages/PriceValiuationPage";
import Rentahomepage from "./../_user/pages/Rentahomepage";
import Salesofproperitypage from "./../_user/pages/Salesofproperitypage";
import MepEngineerspage from "./../_user/pages/MepEngineerspage";
import SolarFirmspage from "./../_user/pages/SolarFirmspage";
import StructuralEngineerspage from "./../_user/pages/StructuralEngineerspage";
import Ptclpage from "./../_user/pages/Ptclpage";
import VettingEngineerspage from "./../_user/pages/VettingEngineerspage";
import SoilTestFirms from "./../_user/pages/SoilTestFirms";
import Affiliates from "./../_user/pages/Affiliates";
import Property from "./../_user/pages/Property";
import MobileApp from "./../_user/pages/MobileApp";
import ComingSoon from "./../_user/pages/ComingSoon";
import PublicServicesPage from "./../_user/pages/PublicServicesPage";
import ActivityDetails from "./../_user/_components/LatestActivity/ActivityDetails";
import HorticultureActivities from "./../_user/_components/LatestActivity/HorticultureActivities";
import VerticalPace from "./../_user/_components/VerticalPace/VerticalPace";
import BusinessCenter from "./../_user/_components/Projects/BusinessCenter/BusinessCenter";
import Complain from "./../_user/_components/Complain/Complain";
import Phases from "./../_user/pages/Phases";
import PhaseDetail from "./../_user/_components/Phases/PhaseDetail";
import AdvertisementCard from "./../_user/_components/Advertisement/AdvertisementCard";
import FacilitiesPage from "./../_user/_components/Facilities/Facilities";
import IntroductionServices from "./../_user/_components/DhaPropertyExchange/IntroducationServices";
import Architectspage from "./../_user/pages/Architectspage";
import PropertySearch from "./../_user/_components/BuyProperty/PropertySearch";
import ImportantNotice from "./../_user/_components/ImportantNotice/ImportantNotice";

const userRoutes = [
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/phase",
				element: <Phases />,
			},
			{ path: "/phase-detail/:phaseId", element: <PhaseDetail /> },

			{
				path: "/member-portal/complain",
				element: <Complain />,
			},

			{
				path: "/businesscenter",
				element: <BusinessCenter />,
			},
			{
				path: "media/advertisement",
				element: <AdvertisementCard />,
			},
			{
				path: "/facilities",
				element: <FacilitiesPage />,
			},

			{
				path: "procedure/dha-valley",
				element: <VerticalPace />,
			},
			{
				path: "/latest-activities/horticulture-activities",
				element: <HorticultureActivities />,
			},

			{
				path: "/latest-activities/activity-details/:id",
				element: <ActivityDetails />,
			},

			{
				path: "/dha-property-exchange/introduction-services",
				element: <IntroductionServices />,
			},
			{
				path: "/important-notices",
				element: <ImportantNotice />,
			},
			{
				path: "media/videos/dha-mobile-app",
				element: <MobileApp />,
			},
			{
				path: "property-dealer",
				element: <Property />,
			},
			{
				path: "/affiliates",
				element: <Affiliates />,
			},

			{
				path: "affiliates/architects",
				element: <Architectspage />,
			},
			{
				path: "affiliates/soil-test-firms",
				element: <SoilTestFirms />,
			},
			{
				path: "affiliates/vetting-engineers",
				element: <VettingEngineerspage />,
			},
			{
				path: "affiliates/ptcl",
				element: <Ptclpage />,
			},
			{
				path: "affiliates/structural-engineers",
				element: <StructuralEngineerspage />,
			},
			{
				path: "affiliates/solar-firms",
				element: <SolarFirmspage />,
			},
			{
				path: "affiliates/mep-engineers",
				element: <MepEngineerspage />,
			},
			// {
			// 	path: "/member-portal/login",
			// 	element: <LoginForm />,
			// },

			{
				path: "dha-property-exchange/sale-of-property",
				element: <Salesofproperitypage />,
			},
			{
				path: "dha-property-exchange/rent-a-home",
				element: <Rentahomepage />,
			},
			{
				path: "dha-property-exchange/price-valuation-benchmarking",
				element: <PriceValiuationPage />,
			},
			{
				path: "dha-property-exchange/purchase-of-property",
				element: <PurchaseProperityPage />,
			},
			{
				path: "dha-property-exchange/registration",
				element: <RegistrationPage />,
			},
			{
				path: "dha-property-exchange/contact-us",
				element: <ContectUsPage />,
			},
			{
				path: "procedure/dha-valley/file-opening",
				element: <FileOpeningPage />,
			},
			{
				path: "procedure/dha-valley/issuance-new-allotment-certificate",
				element: <AllotmentCertificatePage />,
			},
			{
				path: "/phase-i-gismap",
				element: <MapPhase1 />,
			},
			{
				path: "/phase-ii-gismap",
				element: <MapPhase2 />,
			},
			{
				path: "/phase-v-gismap",
				element: <MapPhaseV />,
			},
			{
				path: "/all-phases-map",
				element: <MapAllPhase />,
			},
			{
				path: "/search-property",
				element: <PropertySearch />,
			},
			{
				path: "/saleproperty",
				element: <SaleProperty />,
			},

			{
				path: "media/events",
				element: <PhotoGallery />,
			},
			{
				path: "member-portal/htp",
				element: <HowToPay />,
			},
			{
				path: "home-maintenance",
				element: <HomeServicesPage />,
			},
			{
				path: "cleaning",
				element: <CleaningServicesPage />,
			},
			{
				path: "member-portal/guide",
				element: <GuidePage />,
			},
			{
				path: "media/public-service-message",
				element: <PublicServicesPage />,
			},
			{
				path: "new-editions/portal",
				element: <ComingSoon />,
			},
		],
	},
];

export default userRoutes;
