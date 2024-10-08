import React from "react";
import PropertyCard from "../Card/PropertyCard";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import "aos/dist/aos.css";
const SaleProperty = () => {
  const handleEmail = () => {
    console.log("Email button clicked");
  };

  const handleCall = () => {
    console.log("Call button clicked");
  };
  return (
    <>
      <HeroSectionWithHeading
        heading="Properties for Sale in DHA"
        backgroundVideo="/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4"
      />
      <div className=" justify-left p-5 gap-4 bg-golden" data-aos="zoom-in">
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://yesproperty.pk/wp-content/uploads/2022/04/278221986_1426125291163106_4851191533860011223_n-848x565.jpg"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2V6LLIaGpk0Gwp1EooKN4wR-LqIsEPQJ-XfZwVwAMhiXAnA6_4bwvkXd3pbDwWQ2MLk&usqp=CAU"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQqrFWnl_D0AKt_R01tZEyvwA9uJG5ExCbzrXPfitN-EKUJuj0OUD0MgLTtwRO5rGDwc&usqp=CAU"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dcwsdsVb5c-AgV2d6axpU0xcNW6UeO8qMM5kTcp1fc5vMU9WoZXX3P6pbOe8hewpssk&usqp=CAU"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HrbriuYBJWsTArdHBo1v0VQrtZR3tCck5YiujB46ia4nCdjx6TbvEZpuwKp18ZkWlo&usqp=CAU"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sXbQMqkXWYVuPeMlWMSnEPK0NIvFDNGgWA&s"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://s3.amazonaws.com/images-aarz/uploads/properties/2017/7/11-marla-house-for-rent-in-dha-phase-1-defence-villas-rawalpindi-for-rs-75-000-96947-1501323734-image-0-actual.jpg"
          onEmail={handleEmail}
          onCall={handleCall}
        />
        <PropertyCard
          price="31,552"
          location="MPCHS - Block C1, MPCHS - Multi Gardens"
          size="3.9"
          beds="2"
          baths="2"
          imgUrl="https://s3.amazonaws.com/images-aarz/uploads/properties/2017/10/32-marla-house-for-rent-in-dha-phase-1-sector-f-islamabad-for-rs-14-lac-124551-image-1-actual.jpg"
          onEmail={handleEmail}
          onCall={handleCall}
        />
      </div>
    </>
  );
};

export default SaleProperty;
