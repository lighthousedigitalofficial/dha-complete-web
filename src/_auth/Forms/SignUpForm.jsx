import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { useUserRegisterMutation } from "../../redux/slices/usersApiSlice";

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
	phone: z.string().min(1, "Phone number is required"),
	identityType: z.string().min(1, "Identity number is required"),
	identityNum: z.string().min(1, "Identity number is required"),
	membershipNum: z.string().min(1, "Membership number is required"),
});

const SignUpForm = () => {
	const [userRegister, { isLoading }] = useUserRegisterMutation();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const { userInfo } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo && userInfo.user) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	const onSubmit = async (data) => {
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		// remove confirm password
		data.confirmPassword = undefined;

		try {
			console.log(data);
			await userRegister(data).unwrap();
			toast.success("Registration successfully");
			navigate("/user/auth/sign-in");
		} catch (err) {
			toast.error(err?.data?.message || err.error);
			console.log(err);
		}
	};

	const handlePhoneChange = (value) => {
		setValue("phone", value);
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};
	const handleToggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="">
			<h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
				<div className="mb-4">
					<label className="input-label">First Name</label>
					<input
						{...register("firstName")}
						className={`input ${errors.firstName ? "border-red-500" : ""}`}
						placeholder="Ex. Jhon"
					/>
					{errors.firstName && (
						<p className="text-red-500 text-xs italic">
							{errors.firstName.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label className="input-label">Last Name</label>
					<input
						{...register("lastName")}
						className={`input ${errors.lastName ? "border-red-500" : ""}`}
						placeholder="Ex. Doe"
					/>
					{errors.lastName && (
						<p className="text-red-500 text-xs italic">
							{errors.lastName.message}
						</p>
					)}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
				<div className="mb-4">
					<label className="input-label">Email</label>
					<input
						{...register("email")}
						type="email"
						className={`input ${errors.email ? "border-red-500" : ""}`}
						placeholder="Enter email address"
					/>
					{errors.email && (
						<p className="text-red-500 text-xs italic">
							{errors.email.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label className="input-label">Phone Number</label>
					<PhoneInput
						country={"pk"}
						onChange={handlePhoneChange}
						inputClass="input"
						inputStyle={{
							appearance: "none",
							border: "1px solid #e2e8f0", // border-gray-300
							borderRadius: "0.375rem", // rounded
							width: "92%", // w-full
							padding: "0.75rem 1.5rem", // py-2 px-3
							marginLeft: "2rem",
							color: "#4a5568", // text-gray-700
							lineHeight: "1.25", // leading-tight
							outline: "none",
							boxShadow: "0 0 0 1px #c6f6d5", // focus:outline-1 outline-green-100
							transition: "box-shadow 0.2s ease-in-out",
						}}
						placeholder="Enter phone number"
					/>
					{errors.phone && (
						<p className="text-red-500 text-xs italic">
							{errors.phone.message}
						</p>
					)}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Identity Type
					</label>
					<select
						{...register("identityType", {
							required: "Identity Type is required",
						})}
						className={`input ${errors.identityType ? "border-red-500" : ""}`}
					>
						<option value="" disabled>
							Select Identity Type
						</option>
						<option value="CNIC">CNIC</option>
						<option value="NICOP">NICOP</option>
						<option value="POC">POC</option>
					</select>
					{errors.identityType && (
						<p className="text-red-500 text-sm">
							{errors.identityType.message}
						</p>
					)}
				</div>

				<div className="mb-4">
					<label className="input-label">
						<div className="mb-4">
							<label className="input-label">Identity Number</label>
							<input
								{...register("identityNum")}
								type="number"
								className={`input ${
									errors.identityNum ? "border-red-500" : ""
								}`}
								placeholder="Enter Identity Number"
							/>
							{errors.identityNum && (
								<p className="text-red-500 text-xs italic">
									{errors.identityNum.message}
								</p>
							)}
						</div>
					</label>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
				<div className="mb-4 relative">
					<label className="input-label">Password</label>
					<input
						{...register("password")}
						type={showPassword ? "text" : "password"}
						className={`input ${errors.password ? "border-red-500" : ""}`}
						placeholder="Minimum 8 characters long"
					/>
					<button
						type="button"
						onClick={handleTogglePassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
					>
						{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
					{errors.password && (
						<p className="text-red-500 text-xs italic">
							{errors.password.message}
						</p>
					)}
				</div>

				<div className="mb-4 relative">
					<label className="input-label">Confirm Password</label>
					<input
						{...register("confirmPassword")}
						type={showConfirmPassword ? "text" : "password"}
						className={`input ${
							errors.confirmPassword ? "border-red-500" : ""
						}`}
						placeholder="Minimum 8 characters long"
					/>
					<button
						type="button"
						onClick={handleToggleConfirmPassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
					>
						{showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
					{errors.confirmPassword && (
						<p className="text-red-500 text-xs italic">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
			</div>

			<div className="mb-4">
				<label className="input-label">
					{" "}
					<div className="mb-4">
						<label className="input-label">Membership Number</label>
						<input
							{...register("membershipNum")}
							type="number"
							className={`input ${
								errors.membershipNum ? "border-red-500" : ""
							}`}
							placeholder="Enter Membership Number"
						/>
						{errors.membershipNum && (
							<p className="text-red-500 text-xs italic">
								{errors.membershipNum.message}
							</p>
						)}
					</div>
				</label>
			</div>
			{/* <div className="mb-4">
				<ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" />
			</div> */}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm mb-2">
					<input
						type="checkbox"
						{...register("terms", {
							required: "You must agree to the terms and conditions",
						})}
					/>{" "}
					I agree to the{" "}
					<Link to="/" className="text-blue-500">
						Terms and Conditions
					</Link>
				</label>
				{errors.terms && (
					<p className="text-red-500 text-xs italic">{errors.terms.message}</p>
				)}
			</div>
			<div className="flex items-center justify-between ">
				<button type="submit" className="btn primary-btn w-full">
					{isLoading ? "Loading..." : "Sign Up"}
				</button>
			</div>
			<p className="text-center mt-4">
				Already have an account?{" "}
				<Link
					to="/user/auth/sign-in"
					className="text-blue-500 underline hover:no-underline"
				>
					Sign in
				</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
