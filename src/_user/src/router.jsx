import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Facilities from "./components/Facilities/Facilities";
import HorticultureActivities from "./components/LatestActivity/HorticultureActivities";
import IntroductionServices from "./components/DhaPropertyExchange/IntroducationServices";
import ImportantNotice from "./components/ImportantNotice/ImportantNotice";
// import DhaConsulantans from "./Pages/DhaConsulantans";
import BusinessCenter from "./components/Projects/BusinessCenter/BusinessCenter";
import VerticalPace from "./components/VerticalPace/VerticalPace";
import LoginForm from "./components/LoginPage/LoginForm";
import HomePage from "./_root/Pages/HomePage";
// import DHAmangementpage from './_root/Pages/DHAmangementpage';
// import Propertydealer from './components/PropertyDelair/Propertydealer';
import Property from "./_root/Pages/Property";
import Architectspage from "./_root/Pages/Architectspage";
import SoilTestFirms from "./_root/Pages/SoilTestFirms";
import Ptclpage from "./_root/Pages/Ptclpage";
import StructuralEngineerspage from "./_root/Pages/StructuralEngineerspage";
import SolarFirmspage from "./_root/Pages/SolarFirmspage";
import MepEngineerspage from "./_root/Pages/MepEngineerspage";
import Phases from "./_root/Pages/Phases";
import MapAllPhase from "./_root/Pages/MapAllPhase";
import MapPhase1 from "./_root/Pages/MapPhase1";
import MapPhase2 from "./_root/Pages/MapPhase2";
import MapPhaseV from "./_root/Pages/MapPhaseV";
import Complain from "./components/Complain/Complain";
import Plantation from "./components/Plantation/Plantation";
import DengueCampain from "./components/DenguePreventation/DengueCampain";
import EnviromentalActivity from "./components/EnviromentalActiviy/EnviromentalActivity";
import HortActivities from "./components/PlantationCampain/HortActivities";
import PropertySearch from "./components/BuyProperty/PropertySearch";
import SaleProperty from "./components/SaleProperty/SaleProperty";
import VettingEngineerspage from "./_root/Pages/VettingEngineerspage";
import Salesofproperitypage from "./_root/Pages/Salesofproperitypage";
import Rentahomepage from "./_root/Pages/Rentahomepage";
import PriceValiuationPage from "./_root/Pages/PriceValiuationPage";
import PurchaseProperityPage from "./_root/Pages/PurchaseProperityPage";
import RegistrationPage from "./_root/Pages/RegistrationPage";
import ContectUsPage from "./_root/Pages/ContectUsPage";
import FileOpeningPage from "./_root/Pages/FileOpeningPage";
import AllotmentCertificatePage from "./_root/Pages/AllotmentCertificatePage";
import PublicServicesPage from "./_root/Pages/PublicServicesPage";
import GuidePage from "./_root/Pages/GuidePage";
import HowToPay from "./components/MemberPortel/HowToPay";
import Advertisement from "./_root/Pages/Advertisement";
import MobileApp from "./_root/Pages/MobileApp";
import HomeServicesPage from "./_root/Pages/HomeServicesPage";
import CleaningServicesPage from "./_root/Pages/CleaningServicesPage";
import Page404 from "./_root/Pages/Page404";
import PhotoGallery from "./_root/Pages/PhotoGallery";
import ComingSoon from "./_root/Pages/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([

  {
    path: "/",

    element: (<><RootLayout /> <ScrollToTop /> </>),
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/phase",
        element: <Phases />,
      },
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
        element: <Advertisement />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      // {
      //   path: "media/advertisement",
      //   element: <Advertisement />,
      // },
      {
        path: "procedure/dha-valley",
        element: <VerticalPace />,
      },
      {
        path: "/latest-activities/horticulture-activities",
        element: <HorticultureActivities />,
      },
      {
        path: "/latest-activities/plantation-drive-dhai-r-monsoon-2020",
        element: <Plantation />,
      },
      {
        path: "/latest-activities/dengue-prevention-campaign",
        element: <DengueCampain />,
      },
      {
        path: "/latest-activities/environmental-activities",
        element: <EnviromentalActivity />,
      },
      {
        path: "/latest-activities/plantation-campaign",
        element: <HortActivities />,
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
      {
        path: "/member-portal/login",
        element: <LoginForm />,
      },
      // {
      //   path: 'affiliates/mep-engineers',
      //   element:<Homeserivicspage/>,
      // },
      {
        path: 'dha-property-exchange/sale-of-property',
        element: <Salesofproperitypage />,
      },
      {
        path: 'dha-property-exchange/rent-a-home',
        element: <Rentahomepage />,
      },
      {
        path: 'dha-property-exchange/price-valuation-benchmarking',
        element: <PriceValiuationPage />,
      },
      {
        path: 'dha-property-exchange/purchase-of-property',
        element: <PurchaseProperityPage />,
      },
      {
        path: 'dha-property-exchange/registration',
        element: <RegistrationPage />,
      },
      {
        path: 'dha-property-exchange/contact-us',
        element: <ContectUsPage />,
      },
      {
        path: 'procedure/dha-valley/file-opening',
        element: <FileOpeningPage />,
      },
      {
        path: 'procedure/dha-valley/issuance-new-allotment-certificate',
        element: <AllotmentCertificatePage />
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
        path: "*",
        element: <Page404 />,
      },
      {
        path: 'media/events',
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
]);

export default router;
