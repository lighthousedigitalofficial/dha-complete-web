import { useGetFacilitiesQuery } from "../../../redux/slices/facilities";
const FacilitiesPage = () => {
	// Fetch facilities using the useGetFacilitiesQuery hook
	const { data, error, isLoading } = useGetFacilitiesQuery();

	if (isLoading) {
		return <div className="text-center text-lg text-white">Loading...</div>; // Change loading text color
	}

	if (error) {
		return (
			<div className="text-red-500 text-center">
				Error loading facilities: {error.message}
			</div>
		); // Change error text color
	}

	// Check if data is available and facilities exist
	const facilities = data?.doc || [];

	return (
		<div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5">
			{" "}
			{/* Updated color scheme */}
			<h1 className="text-center text-3xl font-bold text-white mb-5">
				Facilities
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{facilities.map((facility) => (
					<div
						key={facility._id}
						className="bg-white rounded-lg shadow-md overflow-hidden"
					>
						<img
							src={facility.mainImage}
							alt={facility.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-lg font-bold">{facility.title}</h3>
							<p className="text-gray-700 mt-2">{facility.description}</p>
							<a
								href={facility.link}
								className="mt-4 inline-block text-blue-500 hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn More
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FacilitiesPage;
