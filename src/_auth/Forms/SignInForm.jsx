import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useLoginMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import useAuth from "../../hooks/useAuth";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const user = useAuth();

	useEffect(() => {
		if (user && user.doc) {
			navigate("/");
		}
	}, [user, navigate]);

	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data) => {
		const { email, password } = data;

		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			toast.success("Login successfully");
			console.log(res);
			navigate("/");
		} catch (err) {
			console.error(err);
			toast.error(err?.data?.message || err.error);
		}
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="">
			<h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="email" className="input-label">
						Email
					</label>
					<input
						id="email"
						type="email"
						{...register("email", { required: true })}
						className="input"
						placeholder="Enter email"
					/>
					{errors.email && (
						<p className="text-red-500 text-xs italic">
							{errors.email.message}
						</p>
					)}
				</div>
				<div>
					<div className="mb-4">
						<label className="input-label">Password</label>
						<div className="relative">
							<input
								{...register("password")}
								type={showPassword ? "text" : "password"}
								className={`input ${errors.password ? "border-red-500" : ""}`}
								placeholder="Minimum 8 characters long"
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={handleTogglePassword}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
							{errors.password && (
								<p className="text-red-500 text-xs italic">
									{errors.password.message}
								</p>
							)}
						</div>
						<div className="text-right mb-4 py-2">
							<Link
								to="/forgot-password"
								className="text-green-600 hover:underline cursor-pointer"
							>
								Forgot Password?
							</Link>
						</div>
					</div>
				</div>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						{isLoading ? "Loading..." : "Login"}
					</button>
				</div>
			</form>

			<div>
				<p className="text-center mt-4">
					Enjoy New experience
					<Link
						to="/user/auth/sign-up"
						className="text-blue-500 underline hover:no-underline ml-2"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignInForm;
