import React from "react";
import SectionTitle from "../../components/Card/SectionTitle";
import MapComponent from "../../components/Phases/MapComponent";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import video from '../../assets/Phases/phase1.mp4';

const MapPhase1 = () => {
  return (
    <div className="bg-brand">
      <HeroSectionWithHeading heading="Phase 1"  backgroundVideo={video}/>
      <div>
      <MapComponent latitude={"33.54336"} longitude={"73.05997"} phase={"I"} />
      </div>
    </div>
  );
};

export default MapPhase1;
