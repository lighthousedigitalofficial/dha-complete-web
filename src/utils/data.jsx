import {
	FaBell,
	FaImage,
	FaLink,
	FaVideo,
	FaAd,
	FaCalendarAlt,
	FaMapMarkerAlt,
	FaBuilding,
	FaUsers,
	FaUserTie,
	FaTools,
	FaTasks,
	FaHome,
	FaShoppingCart,
	FaClipboardList,
	FaUser,
	FaBook,
	FaPlus,
	FaList,
} from "react-icons/fa";

export const sidebarItems = [
	{
		path: "/",
		label: "Dashboard",
		icon: FaHome,
	},
	{
		label: "Important Notices",
		icon: FaBell,
		subItems: [
			{ path: "/important-notices/add", label: "Add Notice", icon: FaPlus },
			{ path: "/important-notices/list", label: "List Notices", icon: FaList },
		],
	},
	{
		label: "Banners",
		icon: FaImage,
		subItems: [
			{ path: "/banners/add", label: "Add Banner", icon: FaPlus },
			{ path: "/banners/list", label: "List Banners", icon: FaList },
		],
	},
	// {
	// 	label: "Associates",
	// 	icon: FaLink,
	// 	subItems: [
	// 		{ path: "/associates/add", label: "Add Website", icon: FaPlus },
	// 		{ path: "/associates/list", label: "List Websites", icon: FaList },
	// 	],
	// },

	{
		label: "Gallery",
		icon: FaImage,
		subItems: [
			{
				label: "Videos",
				icon: FaVideo,
				subsubItems: [
					{ path: "/videos/add", label: "Add Video", icon: FaPlus },
					{
						path: "/videos/list",
						label: "List Videos",
						icon: FaList,
					},
				],
			},
			{
				label: "Media",
				icon: FaImage,
				subsubItems: [
					{ path: "/media/add", label: "Add Media", icon: FaPlus },
					{ path: "/media/list", label: "List Media", icon: FaList },
				],
			},
			{
				label: "Events",
				icon: FaCalendarAlt,
				subsubItems: [
					{ path: "/events/add", label: "Add Event", icon: FaPlus },
					{
						path: "/events/list",
						label: "List Events",
						icon: FaList,
					},
				],
			},
		],
	},

	{
		label: "Phases",
		icon: FaMapMarkerAlt,
		subItems: [
			{ path: "/phases/add", label: "Add Phase", icon: FaPlus },
			{ path: "/phases/list", label: "List Phases", icon: FaList },
		],
	},
	// {
	// 	label: "Facilities",
	// 	icon: FaBuilding,
	// 	subItems: [
	// 		{ path: "/facilities/add", label: "Add Facility", icon: FaPlus },
	// 		{ path: "/facilities/list", label: "List Facilities", icon: FaList },
	// 	],
	// },
	{
		label: "Affiliates",
		icon: FaUsers,
		subItems: [
			{ path: "/affiliates/add", label: "Add Affiliate", icon: FaPlus },
			{ path: "/affiliates/list", label: "List Affiliates", icon: FaList },
		],
	},

	{
		label: "Engineers",
		icon: FaTools,
		subItems: [
			{ path: "/engineers/add", label: "Add Engineer", icon: FaPlus },
			{
				path: "/engineers/list",
				label: "List Engineers",
				icon: FaList,
			},
		],
	},
	{
		label: "Activities",
		icon: FaTasks,
		subItems: [
			{
				path: "/activities/add",
				label: "Add Activity",
				icon: FaPlus,
			},
			{
				path: "/activities/list",
				label: "List Activities",
				icon: FaList,
			},
		],
	},
	{
		label: "Property",
		icon: FaImage,
		subItems: [
			{
				label: "Sale Property",
				icon: FaHome,
				subsubItems: [
					{
						path: "/sale-property/add",
						label: "Add Sale Property",
						icon: FaPlus,
					},
					{
						path: "/sale-property/list",
						label: "List Sale Properties",
						icon: FaList,
					},
				],
			},
			{
				label: "Purchase Property",
				icon: FaShoppingCart,
				subsubItems: [
					{
						path: "/purchase-property/add",
						label: "Add Purchase Property",
						icon: FaPlus,
					},
					{
						path: "/purchase-property/list",
						label: "List Purchase Properties",
						icon: FaList,
					},
				],
			},
			{
				label: "Registration Property",
				icon: FaClipboardList,
				subsubItems: [
					{
						path: "/registration-property/add",
						label: "Add Registration Property",
						icon: FaPlus,
					},
					{
						path: "/registration-property/list",
						label: "List Registration Properties",
						icon: FaList,
					},
				],
			},
			{
				label: "Property Dealers",
				icon: FaUserTie,
				subsubItems: [
					{
						path: "/property-dealers/add",
						label: "Add Property Dealer",
						icon: FaPlus,
					},
					{
						path: "/property-dealers/list",
						label: "List Property Dealers",
						icon: FaList,
					},
				],
			},
		],
	},

	{
		label: "Team",
		icon: FaUsers,
		subItems: [
			{ path: "/team/add", label: "Add Team Member", icon: FaPlus },
			{
				path: "/team/list",
				label: "List Team Members",
				icon: FaList,
			},
		],
	},
	{
		label: "Portal Guide",
		icon: FaBook,
		subItems: [
			{
				path: "/portal-guide/add",
				label: "Add Portal Guide",
				icon: FaPlus,
			},
			{
				path: "/portal-guide/list",
				label: "List Portal Guides",
				icon: FaList,
			},
		],
	},
	{
		label: "User",
		icon: FaUser,
		subItems: [
			{ path: "/users/add", label: "Add User", icon: FaPlus },
			{ path: "/users/list", label: "List Users", icon: FaList },
		],
	},
];

export const engineers = [
	{
		registeredNumber: "12345",
		firmName: "Tech Solutions",
		engineerName: "John Doe",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Active",
		affiliateId: "A001",
	},
	{
		registeredNumber: "54321",
		firmName: "Tech Solutions",
		engineerName: "Jane Doe",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Inactive",
		affiliateId: "A002",
	},
	{
		registeredNumber: "67890",
		firmName: "Tech Solutions",
		engineerName: "John Smith",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Active",
		affiliateId: "A003",
	},
	{
		registeredNumber: "09876",
		firmName: "Tech Solutions",
		engineerName: "Jane Smith",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Inactive",
		affiliateId: "A004",
	},
	{
		registeredNumber: "54321",
		firmName: "Tech Solutions",
		engineerName: "John Doe",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Active",
		affiliateId: "A005",
	},
	{
		registeredNumber: "12345",
		firmName: "Tech Solutions",
		engineerName: "Jane Doe",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Inactive",
		affiliateId: "A006",
	},
	{
		registeredNumber: "67890",
		firmName: "Tech Solutions",
		engineerName: "John Smith",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Active",
		affiliateId: "A007",
	},
	{
		registeredNumber: "09876",
		firmName: "Tech Solutions",
		engineerName: "Jane Smith",
		address: "123 Main St, Anytown, USA",
		phone: "555-1234",
		status: "Inactive",
		affiliateId: "A008",
	},
];

export const banners = [
	{
		id: "1",
		type: "Promotion",
		mediaUrl: "https://example.com/summer-sale.jpg",
		title: "Summer Sale",
		description: "Get up to 50% off on summer items!",
		status: "active",
	},
	{
		id: "2",
		type: "Announcement",
		mediaUrl: "https://example.com/winter-collection.jpg",
		title: "Winter Collection",
		description: "Check out our new winter collection.",
		status: "inactive",
	},
	{
		id: "3",
		type: "Discount",
		mediaUrl: "https://example.com/spring-discounts.jpg",
		title: "Spring Discounts",
		description: "Enjoy spring discounts on all items.",
		status: "active",
	},
	{
		id: "4",
		type: "Offer",
		mediaUrl: "https://example.com/autumn-offers.jpg",
		title: "Autumn Offers",
		description: "Special offers for the autumn season.",
		status: "inactive",
	},
];

export const associates = [
	{
		id: "1",
		logo: "https://example.com/logo1.png",
		link: "https://example.com/associate1",
		status: "active",
	},
	{
		id: "2",
		logo: "https://example.com/logo2.png",
		link: "https://example.com/associate2",
		status: "inactive",
	},
	{
		id: "3",
		logo: "https://example.com/logo3.png",
		link: "https://example.com/associate3",
		status: "active",
	},
	{
		id: "4",
		logo: "https://example.com/logo4.png",
		link: "https://example.com/associate4",
		status: "inactive",
	},
];

export const videos = [
	{
		id: "1",
		url: "https://example.com/video1.mp4",
		title: "Introduction to React",
		status: "active",
	},
	{
		id: "2",
		url: "https://example.com/video2.mp4",
		title: "Advanced React Patterns",
		status: "inactive",
	},
	{
		id: "3",
		url: "https://example.com/video3.mp4",
		title: "React Hooks in Depth",
		status: "active",
	},
	{
		id: "4",
		url: "https://example.com/video4.mp4",
		title: "State Management with Redux",
		status: "inactive",
	},
];

export const ads = [
	{
		id: "1",
		title: "Summer Sale Ad",
		image: "https://example.com/summer-sale-ad.jpg",
	},
	{
		id: "2",
		title: "Winter Collection Ad",
		image: "https://example.com/winter-collection-ad.jpg",
	},
	{
		id: "3",
		title: "Spring Discounts Ad",
		image: "https://example.com/spring-discounts-ad.jpg",
	},
	{
		id: "4",
		title: "Autumn Offers Ad",
		image: "https://example.com/autumn-offers-ad.jpg",
	},
];

export const events = [
	{
		id: "1",
		title: "Summer Festival",
		images: [
			"https://example.com/summer-festival-1.jpg",
			"https://example.com/summer-festival-2.jpg",
		],
		description:
			"Join us for a fun-filled summer festival with music, food, and games!",
	},
	{
		id: "2",
		title: "Winter Wonderland",
		images: [
			"https://example.com/winter-wonderland-1.jpg",
			"https://example.com/winter-wonderland-2.jpg",
		],
		description:
			"Experience the magic of winter with our Winter Wonderland event.",
	},
	{
		id: "3",
		title: "Spring Gala",
		images: [
			"https://example.com/spring-gala-1.jpg",
			"https://example.com/spring-gala-2.jpg",
		],
		description: "Celebrate the arrival of spring with our annual Spring Gala.",
	},
	{
		id: "4",
		title: "Autumn Harvest",
		images: [
			"https://example.com/autumn-harvest-1.jpg",
			"https://example.com/autumn-harvest-2.jpg",
		],
		description:
			"Join us for a harvest celebration with food, music, and fun activities.",
	},
];

export const phases = [
	{
		id: "1",
		title: "Phase 1",
		description: "Initial phase of the project.",
		location: "Location A",
		status: "active",
		images: [
			"https://example.com/phase1-image1.jpg",
			"https://example.com/phase1-image2.jpg",
		],
		videos: [
			"https://example.com/phase1-video1.mp4",
			"https://example.com/phase1-video2.mp4",
		],
		services: ["Service 1", "Service 2"],
		type: "development",
	},
	{
		id: "2",
		title: "Phase 2",
		description: "Second phase of the project.",
		location: "Location B",
		status: "inactive",
		images: [
			"https://example.com/phase2-image1.jpg",
			"https://example.com/phase2-image2.jpg",
		],
		videos: [
			"https://example.com/phase2-video1.mp4",
			"https://example.com/phase2-video2.mp4",
		],
		services: ["Service 3", "Service 4"],
		type: "construction",
	},
	{
		id: "3",
		title: "Phase 3",
		description: "Third phase of the project.",
		location: "Location C",
		status: "active",
		images: [
			"https://example.com/phase3-image1.jpg",
			"https://example.com/phase3-image2.jpg",
		],
		videos: [
			"https://example.com/phase3-video1.mp4",
			"https://example.com/phase3-video2.mp4",
		],
		services: ["Service 5", "Service 6"],
		type: "planning",
	},
	{
		id: "4",
		title: "Phase 4",
		description: "Final phase of the project.",
		location: "Location D",
		status: "inactive",
		images: [
			"https://example.com/phase4-image1.jpg",
			"https://example.com/phase4-image2.jpg",
		],
		videos: [
			"https://example.com/phase4-video1.mp4",
			"https://example.com/phase4-video2.mp4",
		],
		services: ["Service 7", "Service 8"],
		type: "completion",
	},
];

export const facilities = [
	{
		id: "1",
		title: "Gym",
		description: "A state-of-the-art gym with modern equipment.",
		mainImage: "https://example.com/gym-main.jpg",
		images: ["https://example.com/gym-1.jpg", "https://example.com/gym-2.jpg"],
		services: ["Personal Training", "Group Classes", "Nutrition Advice"],
		link: "https://example.com/gym",
	},
	{
		id: "2",
		title: "Swimming Pool",
		description: "An Olympic-sized swimming pool with temperature control.",
		mainImage: "https://example.com/pool-main.jpg",
		images: [
			"https://example.com/pool-1.jpg",
			"https://example.com/pool-2.jpg",
		],
		services: ["Swimming Lessons", "Water Aerobics", "Lifeguard Services"],
		link: "https://example.com/pool",
	},
	{
		id: "3",
		title: "Spa",
		description: "A luxurious spa offering a range of treatments.",
		mainImage: "https://example.com/spa-main.jpg",
		images: ["https://example.com/spa-1.jpg", "https://example.com/spa-2.jpg"],
		services: ["Massage Therapy", "Facials", "Body Treatments"],
		link: "https://example.com/spa",
	},
	{
		id: "4",
		title: "Tennis Court",
		description: "Professional tennis courts available for booking.",
		mainImage: "https://example.com/tennis-main.jpg",
		images: [
			"https://example.com/tennis-1.jpg",
			"https://example.com/tennis-2.jpg",
		],
		services: ["Tennis Coaching", "Court Booking", "Tournaments"],
		link: "https://example.com/tennis",
	},
];

export const affiliates = [
	{
		id: "1",
		name: "Affiliate One",
		status: "active",
	},
	{
		id: "2",
		name: "Affiliate Two",
		status: "inactive",
	},
	{
		id: "3",
		name: "Affiliate Three",
		status: "active",
	},
	{
		id: "4",
		name: "Affiliate Four",
		status: "inactive",
	},
];

export const dealers = [
	{
		id: "1",
		agency: "Real Estate Agency One",
		fullName: "John Doe",
		address: "123 Main St, Cityville",
		phone: "123-456-7890",
		affiliateId: "A1",
	},
	{
		id: "2",
		agency: "Property Experts",
		fullName: "Jane Smith",
		address: "456 Elm St, Townsville",
		phone: "987-654-3210",
		affiliateId: "A2",
	},
	{
		id: "3",
		agency: "Home Finders",
		fullName: "Alice Johnson",
		address: "789 Oak St, Villageville",
		phone: "555-123-4567",
		affiliateId: "A3",
	},
	{
		id: "4",
		agency: "Estate Solutions",
		fullName: "Bob Brown",
		address: "321 Pine St, Hamletville",
		phone: "444-555-6666",
		affiliateId: "A4",
	},
];

export const activities = [
	{
		id: "1",
		title: "Hiking Adventure",
		description: "Explore the mountains with our guided hiking tours.",
		images: [
			"https://example.com/hiking1.jpg",
			"https://example.com/hiking2.jpg",
		],
		videos: [
			"https://example.com/hiking1.mp4",
			"https://example.com/hiking2.mp4",
		],
		bannerId: "B1",
		slug: "hiking-adventure",
	},
	{
		id: "2",
		title: "City Tour",
		description: "Discover the city with our comprehensive city tours.",
		images: [
			"https://example.com/citytour1.jpg",
			"https://example.com/citytour2.jpg",
		],
		videos: [
			"https://example.com/citytour1.mp4",
			"https://example.com/citytour2.mp4",
		],
		bannerId: "B2",
		slug: "city-tour",
	},
	{
		id: "3",
		title: "Beach Party",
		description: "Join us for a fun-filled beach party with music and games.",
		images: [
			"https://example.com/beachparty1.jpg",
			"https://example.com/beachparty2.jpg",
		],
		videos: [
			"https://example.com/beachparty1.mp4",
			"https://example.com/beachparty2.mp4",
		],
		bannerId: "B3",
		slug: "beach-party",
	},
	{
		id: "4",
		title: "Cultural Festival",
		description:
			"Experience the local culture with our annual cultural festival.",
		images: [
			"https://example.com/culturalfestival1.jpg",
			"https://example.com/culturalfestival2.jpg",
		],
		videos: [
			"https://example.com/culturalfestival1.mp4",
			"https://example.com/culturalfestival2.mp4",
		],
		bannerId: "B4",
		slug: "cultural-festival",
	},
];

export const purchaseProperties = [
	{
		id: "1",
		name: "John Doe",
		cnic: "12345-6789012-3",
		phone: "123-456-7890",
		email: "john.doe@example.com",
		type: "residential",
		phase: "Phase 1",
		size: "10 Marla",
		price: 5000000,
		status: "active",
	},
	{
		id: "2",
		name: "Jane Smith",
		cnic: "23456-7890123-4",
		phone: "987-654-3210",
		email: "jane.smith@example.com",
		type: "commercial",
		phase: "Phase 2",
		size: "1 Kanal",
		price: 10000000,
		status: "inactive",
	},
	{
		id: "3",
		name: "Alice Johnson",
		cnic: "34567-8901234-5",
		phone: "555-123-4567",
		email: "alice.johnson@example.com",
		type: "shop",
		phase: "Phase 3",
		size: "5 Marla",
		price: 3000000,
		status: "active",
	},
	{
		id: "4",
		name: "Bob Brown",
		cnic: "45678-9012345-6",
		phone: "444-555-6666",
		email: "bob.brown@example.com",
		type: "apartment",
		phase: "Phase 4",
		size: "2 Bed",
		price: 7000000,
		status: "inactive",
	},
];

export const propertyRegistrations = [
	{
		id: "1",
		name: "John Doe",
		phone: "123-456-7890",
		email: "john.doe@example.com",
		country: "USA",
		requirement: "Buy",
		phase: "Phase 1",
		size: "10 Marla",
		budgetPrice: 5000000,
		remarks: "Looking for a corner plot",
		status: "active",
	},
	{
		id: "2",
		name: "Jane Smith",
		phone: "987-654-3210",
		email: "jane.smith@example.com",
		country: "Canada",
		requirement: "Sell",
		phase: "Phase 2",
		size: "1 Kanal",
		budgetPrice: 10000000,
		remarks: "Urgent sale",
		status: "inactive",
	},
	{
		id: "3",
		name: "Alice Johnson",
		phone: "555-123-4567",
		email: "alice.johnson@example.com",
		country: "UK",
		requirement: "Rent",
		phase: "Phase 3",
		size: "5 Marla",
		budgetPrice: 3000000,
		remarks: "Prefer furnished",
		status: "active",
	},
	{
		id: "4",
		name: "Bob Brown",
		phone: "444-555-6666",
		email: "bob.brown@example.com",
		country: "Australia",
		requirement: "Lease",
		phase: "Phase 4",
		size: "2 Bed",
		budgetPrice: 7000000,
		remarks: "Long-term lease",
		status: "inactive",
	},
];

export const teamMembers = [
	{
		id: "1",
		name: "John Doe",
		designation: "Software Engineer",
		extension: "1234",
		status: "active",
	},
	{
		id: "2",
		name: "Jane Smith",
		designation: "Project Manager",
		extension: "5678",
		status: "inactive",
	},
	{
		id: "3",
		name: "Alice Johnson",
		designation: "UI/UX Designer",
		extension: "9101",
		status: "active",
	},
	{
		id: "4",
		name: "Bob Brown",
		designation: "QA Engineer",
		extension: "1121",
		status: "inactive",
	},
];

export const portalGuides = [
	{
		id: "1",
		title: "How to Register",
		video: "https://example.com/video1.mp4",
		status: "active",
	},
	{
		id: "2",
		title: "How to Login",
		video: "https://example.com/video2.mp4",
		status: "inactive",
	},
	{
		id: "3",
		title: "How to Reset Password",
		video: "https://example.com/video3.mp4",
		status: "active",
	},
	{
		id: "4",
		title: "How to Update Profile",
		video: "https://example.com/video4.mp4",
		status: "inactive",
	},
];

export const users = [
	{
		id: "1",
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		identityType: "Passport",
		identityNumber: "A12345678",
		membershipNumber: "M001",
		phone: "123-456-7890",
	},
	{
		id: "2",
		firstName: "Jane",
		lastName: "Smith",
		email: "jane.smith@example.com",
		identityType: "Driver License",
		identityNumber: "D98765432",
		membershipNumber: "M002",
		phone: "987-654-3210",
	},
	{
		id: "3",
		firstName: "Alice",
		lastName: "Johnson",
		email: "alice.johnson@example.com",
		identityType: "National ID",
		identityNumber: "N1234567890",
		membershipNumber: "M003",
		phone: "555-123-4567",
	},
	{
		id: "4",
		firstName: "Bob",
		lastName: "Brown",
		email: "bob.brown@example.com",
		identityType: "Passport",
		identityNumber: "A87654321",
		membershipNumber: "M004",
		phone: "444-555-6666",
	},
];
