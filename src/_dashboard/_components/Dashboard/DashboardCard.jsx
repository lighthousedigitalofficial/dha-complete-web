import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Icon } from "@heroicons/react/outline";

const DashboardCard = ({
	title,
	total,
	bgColor,
	link,
	icon: IconComponent,
}) => {
	return (
		<div
			className={`p-4 rounded-lg shadow-lg ${bgColor} text-white  flex flex-col justify-between`}
		>
			<div className="flex items-center justify-between p-4">
				<div className="flex flex-col gap-2 items-center">
					<IconComponent className="text-2xl" />
					<Link
						to={link}
						className="block mt-4 text-sm hover:underline transition-all ease-in  p-2"
					>
						view more
					</Link>
				</div>
				<div className="text-right flex flex-col gap-2 ">
					<p className="text-3xl font-bold ">{total}</p>
					<h2 className="text-2xl font-semibold">{title}</h2>
				</div>
			</div>
		</div>
	);
};

DashboardCard.propTypes = {
	title: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
	bgColor: PropTypes.string,
	link: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
};

DashboardCard.defaultProps = {
	bgColor: "bg-gray-800",
};

export default DashboardCard;