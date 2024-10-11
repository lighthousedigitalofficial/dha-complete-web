import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useGetPhasesQuery } from "../../../redux/slices/phasesSlice";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const Phase = () => {
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: false,
		});
	}, []);

	// Fetch phases data
	const { data: response = {}, isLoading, isError } = useGetPhasesQuery();

	// Logging the API response
	useEffect(() => {
		console.log("API Response:", response);
		console.log("Loading state:", isLoading);
		console.log("Error state:", isError);
	}, [response, isLoading, isError]);

	if (isLoading) {
		return <div className="text-center text-white">Loading phases...</div>;
	}

	if (isError) {
		return (
			<div className="text-center text-red-500">Error loading phases.</div>
		);
	}

	// Extract phases from the response
	const phases = response.doc || [];

	// Ensure phases is an array before mapping
	if (!Array.isArray(phases)) {
		console.error("Invalid data format:", phases);
		return <div className="text-center text-red-500">Invalid data format.</div>;
	}

	// Handle view details navigation
	const handleViewDetails = (phaseId) => {
		navigate(`/phase-detail/${phaseId}`);
	};

	return (
		<>
			<HeroSectionWithHeading
				heading="Some of Our Esteemed Projects:"
				backgroundVideo="/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4"
			/>
			<div className="bg-gray-100 text-white px-5 py-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{phases.map((phase, index) => (
						<div
							key={index}
							className="transform transition-transform hover:scale-102 hover:shadow-xl bg-teal-600 hover:bg-teal-500 duration-300 ease-in-out rounded-lg p-4"
							data-aos="zoom-in"
						>
							<h3 className="text-2xl font-bold mb-2 text-white">
								{phase.title}
							</h3>
							<p className="mb-4 text-teal-100">{phase.description}</p>

							{/* Displaying images */}
							{phase.images && phase.images.length > 0 ? (
								<div className="mb-4">
									{phase.images.map((image, imgIndex) => (
										<img
											key={imgIndex}
											src={image}
											alt={`Phase Image ${imgIndex + 1}`}
											className="w-full h-48 object-cover rounded-lg shadow-md"
										/>
									))}
								</div>
							) : (
								console.log("No images available for phase:", phase.title)
							)}

							{/* Displaying video if available */}
							{phase.videoUrl ? (
								<div className="mb-4">
									<video
										controls
										className="w-full h-48 rounded-lg shadow-md"
										src={phase.videoUrl}
									>
										Your browser does not support the video tag.
									</video>
								</div>
							) : (
								console.log("No video available for phase:", phase.title)
							)}

							{/* View Details button with FaEye */}
							<button
								className="mt-4 flex items-center justify-center text-white bg-blue-500 hover:bg-blue-700 p-2 rounded-md"
								onClick={() => handleViewDetails(phase._id)}
							>
								<FaEye className="mr-2" /> View Details
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Phase;
