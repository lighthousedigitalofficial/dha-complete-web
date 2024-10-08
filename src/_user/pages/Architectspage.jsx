import React from "react";
import HeroSectionWithHeading from "../_components/Share/HeroScetionWithHeading";
import ArchitectsTable from "../_components/Architects/ArchitectsTable";

const Architectspage = () => {
	return (
		<div>
			<HeroSectionWithHeading
				backgroundImage={
					"https://premierchoiceint.com/wp-content/uploads/2024/01/Grand-Orchard-Elevation6.webp"
				}
				heading="Architects"
			/>
			<ArchitectsTable />
		</div>
	);
};

export default Architectspage;
