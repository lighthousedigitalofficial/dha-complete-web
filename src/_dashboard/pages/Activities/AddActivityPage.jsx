import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../_components/shared/InputField";
import toast from "react-hot-toast";
import { useCreateActivityMutation } from "../../../redux/slices/activitySlice";
import { useGetBannersQuery } from "../../../redux/slices/bannerSlice";
import { useNavigate } from "react-router-dom";

const AddActivityPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [createActivity] = useCreateActivityMutation();
	const { data: banners, isLoading: bannersLoading } = useGetBannersQuery();

	const [mediaBanner, setMediaBanner] = useState("");
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			// Ensure mediaActivity is included in the data
			const payload = {
				bannerId: mediaBanner,
				title: data.title,
				description: data.description,
			};

			// Log the request payload
			console.log("Request Payload:", payload);

			await createActivity(payload).unwrap();
			toast.success("Activity created successfully");
			navigate("/dashboard/activities/list");
			reset();
			setMediaBanner("");
		} catch (error) {
			console.error("Failed to create media:", error);
		}
	};

	const handleMediaChange = (event) => {
		setMediaBanner(event.target.value);
	};

	const handleReset = () => {
		reset();
		setMediaBanner("");
	};

	return (
		<div className="p-4 rounded-md shadow-md m-5">
			<h2 className="text-2xl font-semibold mb-6">Upload Activity</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-1 gap-6"
			>
				<div>
					{/* Title Input */}
					<InputField
						label="Title"
						name="title"
						register={register}
						required={true}
						errors={errors}
						errorMessage="Title is required."
					/>

					{/* Description Input */}
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-[1rem] font-semibold mb-2"
						>
							Description
						</label>
						<textarea
							id="description"
							{...register("description", {
								required: "Description is required.",
							})}
							rows="5"
							className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
								errors.description
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-blue-500"
							}`}
						></textarea>
						{errors.description && (
							<p className="text-red-500 text-sm mt-1">
								{errors.description.message}
							</p>
						)}
					</div>

					{/* Activity Activity Dropdown */}
					<div className="mt-4 w-full">
						<label
							htmlFor="media-select"
							className="block text-[1rem] font-semibold mb-2"
						>
							Activity Activity
						</label>
						<select
							id="media-select"
							{...register("mediaActivity", {
								required: "Activity Activity is required.",
							})}
							value={mediaBanner}
							onChange={handleMediaChange}
							className={`block w-full text-sm text-gray-500 border rounded-md cursor-pointer p-2 focus:outline-none focus:ring-2 ${
								errors.mediaActivity
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-blue-500"
							}`}
						>
							<option value="">Select a Activity Activity</option>
							{bannersLoading ? (
								<option>Loading...</option>
							) : (
								Array.isArray(banners?.doc) &&
								banners.doc.map((activity) => (
									<option key={activity._id} value={activity._id}>
										{activity.title}
									</option>
								))
							)}
						</select>
						{errors.mediaActivity && (
							<p className="text-red-500 text-sm mt-1">
								{errors.mediaActivity.message}
							</p>
						)}
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex justify-end mt-6 gap-2 col-span-2">
					<button
						type="button"
						onClick={handleReset}
						className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
					>
						Reset
					</button>
					<button
						type="submit"
						className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-500 transition duration-300"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddActivityPage;
