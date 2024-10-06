import { Outlet } from "react-router-dom";

const UserLayout = () => {
	return (
		<div>
			<div className="lg:w-[90%] w-full mx-auto md:px-8 px-4">
				<Outlet />
			</div>
		</div>
	);
};

export default UserLayout;
