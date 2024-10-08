import { useParams } from "react-router-dom";
import { useGetActivitiesQuery } from "../../../redux/slices/activitySlice";

const ActivityDetails = () => {
	const { id } = useParams();
	const { data: activities = [] } = useGetActivitiesQuery();

	// Find the specific activity by id
	const activity = activities.find((activity) => activity._id === id);

	if (!activity) {
		return (
			<div className="text-center text-xl text-red-500">
				Activity not found.
			</div>
		);
	}

	return (
		<div className="bg-gray-200 p-6">
			<div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
				<img
					src={activity.images[0]}
					alt={activity.title}
					className="w-full h-72 object-cover rounded-t-lg"
				/>
				<div className="p-6">
					<h3 className="text-3xl font-bold text-blue-800 mb-4">
						{activity.title}
					</h3>
					<p className="text-gray-700 mb-4 leading-relaxed">
						{activity.description}
					</p>
					<div className="grid grid-cols-2 gap-4 mt-4">
						{activity.images.slice(1).map((url, index) => (
							<img
								key={index}
								src={url}
								alt={`Activity Image ${index + 1}`}
								className="w-full h-48 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityDetails;
