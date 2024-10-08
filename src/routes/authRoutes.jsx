import AuthLayout from "../_auth/AuthLayout";
import SignInForm from "../_auth/Forms/SignInForm";
import SignUpForm from "../_auth/Forms/SignUpForm";

const authRoutes = [
	{
		path: "/user/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "sign-in",
				element: <SignInForm />,
			},
			{
				path: "sign-up",
				element: <SignUpForm />,
			},
		],
	},
];

export default authRoutes;
