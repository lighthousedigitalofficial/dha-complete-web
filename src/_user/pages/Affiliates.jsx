import React, { useEffect } from "react";
import { useGetAffiliatesQuery } from "../../redux/slices/affiliates";

const Affiliates = () => {
	const { data: affiliatesData, error, isLoading } = useGetAffiliatesQuery();

	useEffect(() => {
		// This useEffect block can now be used for other side effects if needed, logging is removed.
	}, [isLoading, affiliatesData, error]);

	if (isLoading) {
		return <p>Loading affiliates...</p>;
	}

	if (error) {
		return <p>Error loading affiliates: {error.message}</p>;
	}

	const affiliates = affiliatesData?.doc || []; // Access the affiliates from `doc`

	return (
		<div className="w-full max-w-7xl p-6 bg-white rounded-lg shadow-lg mt-12 mx-auto">
			<h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">
				Affiliates
			</h2>

			<div className="overflow-x-auto">
				<table className="min-w-full bg-green-700 text-white rounded-lg">
					<thead>
						<tr className="border-b border-white">
							<th className="p-4 text-left">Affiliate Name</th>
							<th className="p-4 text-left">Status</th>
							<th className="p-4 text-left">Created At</th>
						</tr>
					</thead>
					<tbody>
						{affiliates.length > 0 ? (
							affiliates.map((affiliate) => (
								<tr
									key={affiliate._id}
									className="border-b border-white hover:bg-green-800 transition duration-300"
								>
									<td className="p-4">{affiliate.name}</td>
									<td
										className={`p-4 font-semibold ${
											affiliate.status === "active"
												? "text-green-300"
												: "text-red-300"
										}`}
									>
										{affiliate.status}
									</td>
									<td className="p-4">
										{new Date(affiliate.createdAt).toLocaleDateString()}
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="4" className="p-4 text-center">
									No affiliates found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Affiliates;
