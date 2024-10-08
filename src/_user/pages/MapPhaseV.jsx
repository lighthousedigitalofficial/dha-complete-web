import React from "react";
import SectionTitle from "../../components/Card/SectionTitle";
import MapComponent from "../../components/Phases/MapComponent";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import video from "../../assets/Phases/phase5.mp4";

const MapPhaseV = () => {
  return (
    <div className="bg-brand">
      {/* <SectionTitle title={"Phase II"} /> */}
      <HeroSectionWithHeading heading="Phase 5"  backgroundVideo={video}/>
      <div>
      <MapComponent latitude={"33.5283"} longitude={"73.1615"} phase={"II"} />
      </div>
    </div>
  );
};

export default MapPhaseV;
