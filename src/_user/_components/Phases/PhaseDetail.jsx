import { useParams } from "react-router-dom";
import { useGetPhasesQuery } from "../../../redux/slices/phasesSlice";

const PhaseDetail = () => {
	const { phaseId } = useParams(); // Get phaseId from URL parameters
	const { data: response = {}, isLoading, isError } = useGetPhasesQuery();

	if (isLoading) {
		return (
			<div className="text-center text-white">Loading phase details...</div>
		);
	}

	if (isError) {
		return (
			<div className="text-center text-red-500">
				Error loading phase details.
			</div>
		);
	}

	const phase = response.doc.find((item) => item._id === phaseId);

	if (!phase) {
		return <div className="text-center text-red-500">Phase not found.</div>;
	}

	return (
		<div className="p-5 bg-gray-100 text-black min-h-screen flex flex-col items-center">
			{/* Image Gallery */}
			<div className="w-full max-w-7xl p-6 bg-white rounded-lg shadow-lg mt-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{phase.images.map((image, imgIndex) => (
						<div
							key={imgIndex}
							className="relative group overflow-hidden rounded-lg shadow-md"
						>
							<img
								src={image}
								alt={`Phase Image ${imgIndex + 1}`}
								className="w-full h-64 object-cover transition-transform transform group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
								<p className="text-white text-lg">Image {imgIndex + 1}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Video Gallery */}
			{phase.videos && phase.videos.length > 0 && (
				<div className="w-full">
					<div className="w-full max-w-10xl p-6 bg-white rounded-lg shadow-lg mt-12 mx-auto">
						<div className="flex justify-end">
							<div className="w-full">
								{phase.videos.map((videoUrl, videoIndex) => (
									<div
										key={videoIndex}
										className="relative overflow-hidden rounded-lg shadow-md w-full"
									>
										<video
											controls
											autoPlay // Added autoPlay attribute
											loop // Optionally, you can add loop to make it replay automatically
											muted // Videos must be muted to autoplay in most browsers
											className="w-full rounded-lg shadow-md"
										>
											<source src={videoUrl} type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Phase Details */}
			<div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg mt-12 text-center">
				{/* Phase Title */}
				<h1 className="text-4xl font-bold mb-6 text-teal-700">{phase.title}</h1>

				{/* Phase Description */}
				<p className="text-lg mb-6 text-gray-700">{phase.description}</p>

				{/* Location, Type, and Services */}
				<div className="flex flex-col sm:flex-row sm:justify-around sm:gap-8">
					<div className="mb-6 sm:mb-0">
						<p className="font-semibold text-gray-600">Location</p>
						<p className="text-gray-800">{phase.location}</p>
					</div>
					<div className="mb-6 sm:mb-0">
						<p className="font-semibold text-gray-600">Type</p>
						<p className="text-gray-800">{phase.type}</p>
					</div>
					<div>
						<p className="font-semibold text-gray-600">Services</p>
						<p className="text-gray-800">{phase.services.join(", ")}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhaseDetail;
