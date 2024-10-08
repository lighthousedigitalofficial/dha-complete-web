import { menuData } from "../../../utils/userData";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="sticky top-0 z-50">
			<Navbar menuData={menuData} />
		</header>
	);
};

export default Header;
