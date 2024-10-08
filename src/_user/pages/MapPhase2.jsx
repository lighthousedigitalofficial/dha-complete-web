import React from "react";
import SectionTitle from "../../components/Card/SectionTitle";
import MapComponent from "../../components/Phases/MapComponent";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import video from '../../assets/Phases/phase2.mp4';

const MapPhase2 = () => {
  return (
    <div className="bg-brand">
      <HeroSectionWithHeading heading="Phase 2"  backgroundVideo={video}/>
      <div>
        <MapComponent latitude={"33.5283"} longitude={"73.1615"} phase={"II"} />
      </div>
    </div>
  );
};

export default MapPhase2;
