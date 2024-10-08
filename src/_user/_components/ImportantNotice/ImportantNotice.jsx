import { useGetNoticesQuery } from "../../../redux/slices/noticesApiSlice";

const ImportantNotice = () => {
	// Fetch notices using the useGetNoticesQuery hook
	const { data, error, isLoading } = useGetNoticesQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error loading notices: {error.message}</div>;
	}

	// Check if data is available and notices exist
	const notices = data?.doc || [];

	return (
		<div className="bg-brand p-5">
			{/* Notices Section */}
			{notices.length > 0 && (
				<div className="space-y-8 mt-5">
					{notices.map((notice) => (
						<div key={notice._id} className="flex flex-col items-center">
							<div className="overflow-hidden rounded-md shadow-md w-full md:w-[80%] lg:w-[70%]">
								<img
									src={notice.image} // Use the image URL from the notice data
									alt={notice.title} // Use title as the alt text
									className="h-[700px] w-full object-cover object-center" // Increased height
								/>
							</div>
							{/* Apply the same styling as the Important Announcement */}
							<div className="flex justify-center items-center py-5 text-center bg-brand w-full">
								<h2 className="text-white w-[80vw] bg-golden text-[1.3rem] md:text-[1.8rem] font-bold mt-4">
									{notice.title}
								</h2>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ImportantNotice;
