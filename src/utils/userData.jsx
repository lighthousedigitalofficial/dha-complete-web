import image1 from "../assets/Images/Advertisements/real-state.jpg";
import image2 from "../assets/Images/Advertisements/DHA-security.jpg";
import image3 from "../assets/Images/Advertisements/notice.jpg";
import image4 from "../assets/Images/Advertisements/ips.jpg";
import image5 from "../assets/Images/Advertisements/phase-4.jpeg";
import image6 from "../assets/Images/Advertisements/river-view.jpg";
import image7 from "../assets/Images/Advertisements/phase-v.jpg";
import image8 from "../assets/Images/Advertisements/expressway.jpg";
import image9 from "../assets/Images/Advertisements/secter-j.jpg";
import image10 from "../assets/Images/Advertisements/secter-k.jpg";
import image12 from "../assets/Images/Advertisements/auction.jpg";

export const menuData = [
	{ label: "Home", link: "/" },
	{
		label: "Phases",
		subItems: [
			{ label: "Phase", link: "/phase" },
			{
				label: "Map",
				DropDown: [
					{
						label: "GIS Maps",
						subDropDown: [
							{ label: "Phase I", link: "/phase-i-gismap" },
							{ label: "Phase II", link: "/phase-ii-gismap" },
							{ label: "Phase V", link: "/phase-v-gismap" },
							{ label: "All Phases", link: "/all-phases-map" },
						],
					},
					{
						label: "Phase IV Overseas Sector",
						link: "/phase-iv-overseas-sector",
					},
				],
			},
		],
	},
	{ label: "Facilities", link: "/facilities" },
	{
		label: "Media",
		subItems: [
			{ label: "Advertisement", link: "/media/advertisement" },
			{
				label: "Videos",
				DropDown: [
					{ label: "DHA Mobile App", link: "/media/videos/dha-mobile-app" },
					{
						label: "Public Service Message",
						link: "/media/public-service-message",
					},
				],
			},
			{
				label: "EVENT & ACTIVITIES",
				DropDown: [{ label: "PhotoGraphy", link: "/media/events" }],
			},
		],
	},
	{
		label: "Procedure",
		subItems: [
			{
				label: "DHA VALLEY",
				DropDown: [
					{ label: "File Opening", link: "/procedure/dha-valley/file-opening" },
					{
						label:
							"Issuance of New Allotment Certificate in Lieu of Old Allotment Certificate",
						link: "/procedure/dha-valley/issuance-new-allotment-certificate",
					},
				],
			},
		],
	},
	{
		label: "Affiliates",
		link: "/affiliates",
		subItems: [
			{ label: "Property Dealer", link: "/property-dealer" },
			{ label: "Search Properties", link: "/search-property" },
			{ label: "Architects", link: "/affiliates/architects" },
			{ label: "Soil Test Firms", link: "/affiliates/soil-test-firms" },
			{ label: "Vetting Engineers", link: "/affiliates/vetting-engineers" },
			{ label: "PTCL", link: "/affiliates/ptcl" },
			{
				label: "Structural Engineers",
				link: "/affiliates/structural-engineers",
			},
			{ label: "Solar Firms", link: "/affiliates/solar-firms" },
			{ label: "MEP Engineers", link: "/affiliates/mep-engineers" },
		],
	},

	{
		label: "Latest Activities",
		subItems: [
			{
				label: "Horticulture Activities",
				link: "/latest-activities/horticulture-activities",
			},
			{
				label: "PLANTATION DRIVE DHAI-R (MONSOON 2020)",
				link: "/latest-activities/plantation-drive-dhai-r-monsoon-2020",
			},
			{
				label: "Dengue Prevention Campaign",
				link: "/latest-activities/dengue-prevention-campaign",
			},
			{
				label: "Environmental Activities",
				link: "/latest-activities/environmental-activities",
			},
			{
				label: "Plantation Campaign",
				link: "/latest-activities/plantation-campaign",
			},
		],
	},
	{
		label: "DHA Property Exchange",
		subItems: [
			{
				label: "Introduction & Services",
				link: "/dha-property-exchange/introduction-services",
			},
			{
				label: "Price Valuation Benchmarking",
				link: "/dha-property-exchange/price-valuation-benchmarking",
			},
			{
				label: "Sale of Property",
				link: "/dha-property-exchange/sale-of-property",
			},
			{ label: "Rent a Property", link: "/dha-property-exchange/rent-a-home" },
			{
				label: "Purchase of Property",
				link: "/dha-property-exchange/purchase-of-property",
			},
			{ label: "Registration", link: "/dha-property-exchange/registration" },
			{ label: "Contact Us", link: "/dha-property-exchange/contact-us" },
		],
	},
	{
		label: "Important Notices",
		subItems: [
			{ label: "Important Notice", link: "/important-notices" },
			{ label: "Complain", link: "/member-portal/complain" },
		],
	},
	{
		label: "Member Portal",
		subItems: [
			{ label: "Login", link: "/member-portal/login" },
			{ label: "Guide", link: "/member-portal/guide" },
			{ label: "How to Pay", link: "/member-portal/htp" },
		],
	},
	{
		label: "Services",
		subItems: [
			{ label: "Home Maintenance", link: "/home-maintenance" },
			{ label: "Cleaning Services", link: "/cleaning" },
		],
	},
	{
		label: "New Editions",
		subItems: [
			{
				label: "Property Listing",
				link: "https://demo.phpscriptpoint.com/realspoint/",
			},
			{ label: "Home Services", link: "https://captainhomeservice.com/" },
			{ label: "Resident Portal", link: "/new-editions/portal" },
			{
				label: "Complaint Management System",
				link: "https://demo.workdo.io/ticketgo/admin/dashboard",
			},
		],
	},
];

export const advertisementData = [
	{
		imageUrl: image1,
		title: "Real Estate Investment in Pakistan",
	},
	{
		imageUrl: image2,
		title: "DHA Security",
	},
	{
		imageUrl: image3,
		title: "Important Notice",
	},
	// Add more advertisements
	{
		imageUrl: image4,
		title: "IPS - 2024",
	},
	{
		imageUrl: image5,
		title: "Possession of Plots Sector A,B & C, Phase-IV",
	},
	{
		imageUrl: image6,
		title: "River View South",
	},
	{
		imageUrl: image7,
		title: "Possession of Residential Plots Sector J, Phase-V",
	},
	{
		imageUrl: image8,
		title: "Ground Breaking of DHA Interchange on Islamabad Express Way",
	},
	{
		imageUrl: image9,
		title: "Possession of Residential Plots Sector J, Phase-V",
	},
	{
		imageUrl: image10,
		title: "Possession of Residential Plots Sector J, Phase-V",
	},
	{
		imageUrl: image12,
		title: "Open Auction",
	},
];
