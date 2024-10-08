import { Outlet } from "react-router-dom";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/index";
import BottomMenu from "./_components/Share/BottomMenu/BottomMenu";

const UserLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<div className="fixed bottom-4 right-4">
				<BottomMenu />
			</div>
			<Footer />
		</div>
	);
};

export default UserLayout;
