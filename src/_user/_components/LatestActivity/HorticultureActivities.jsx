import { Link } from "react-router-dom";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import banner from "../../../assets/Images/Latest-Activity/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useGetActivitiesQuery } from "../../../redux/slices/activitySlice";

const HorticultureActivities = () => {
	const { data: activities = [], error, isLoading } = useGetActivitiesQuery();

	// Handle loading and error states
	if (isLoading) {
		return <div className="text-center text-xl">Loading...</div>;
	}

	if (error) {
		return (
			<div className="text-center text-xl text-red-500">
				Error loading activities: {error.message}
			</div>
		);
	}

	return (
		<div className="bg-gray-200">
			<HeroSectionWithHeading
				backgroundImage={banner}
				heading="Horticulture Activities"
			/>
			<div className="w-[90%] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{activities.map((activity) => (
					<div
						key={activity._id}
						className="bg-white shadow-lg rounded-lg overflow-hidden"
					>
						<img
							src={activity.images[0]} // Display the first image as the banner
							alt={activity.title}
							className="w-full h-56 object-cover rounded-t-lg"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold text-blue-800 mb-2">
								{activity.title}
							</h3>
							<p className="text-gray-700 mb-4">{activity.description}</p>
							<div className="flex justify-end">
								<Link
									to={`/latest-activities/activity-details/${activity._id}`}
									className="text-blue-600 hover:text-blue-800 flex items-center"
								>
									<FontAwesomeIcon icon={faEye} className="mr-2" />
									<span className="hidden sm:block">View Details</span>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HorticultureActivities;
