import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetActivitiesQuery } from "../../../redux/slices/activitySlice";

const ActivityDetails = () => {
	const { id } = useParams(); // Get ID from URL
	const { data: activities = [], error, isLoading } = useGetActivitiesQuery();

	// Initialize AOS for animations
	useEffect(() => {
		AOS.init({
			duration: 2000, // Animation duration in ms
			easing: "ease-in-out", // Smooth easing for animations
			once: false, // Whether animation should happen only once
		});
	}, []);

	// Find the specific activity by ID
	const activity = activities.find((activity) => activity._id === id);

	// Handle loading and error states
	if (isLoading) {
		return <div className="text-center text-xl">Loading...</div>;
	}

	if (error) {
		return (
			<div className="text-center text-xl text-red-500">
				Error loading activity: {error.message}
			</div>
		);
	}

	if (!activity) {
		return <div className="text-center text-xl">Activity not found.</div>;
	}

	return (
		<div>
			<HeroSectionWithHeading
				backgroundVideo="/plantation.mp4"
				heading={activity.title} // Update heading with activity title
			/>
			<div className="flex flex-wrap justify-center gap-6 m-8">
				{activity.images.map((image, index) => (
					<div
						data-aos="zoom-in"
						key={index}
						className="rounded-md bg-brand shadow-lg border-2 p-2 border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
					>
						<img
							src={image}
							alt={`Activity Image ${index + 1}`}
							className="w-full h-48 object-cover"
						/>
					</div>
				))}
				<div className="mt-4 p-4 bg-white rounded-md shadow-md">
					<h3 className="text-2xl font-bold mb-2">Description</h3>
					<p className="text-gray-800">{activity.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ActivityDetails;
