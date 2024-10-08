import React from "react";
import ptcl from "../../assets/Images/PTCL_Logo.jpg";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const Ptcl = () => {
  return (
    <>
      <div className="bg-golden">
        {/* Header Section */}
        <HeroSectionWithHeading backgroundImage={ptcl} heading="PTCl" />

        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-10 p-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-cream mb-4 text-center">
            Pakistan Telecommunication Company Limited (PTCL):
          </h1>
          <p className="text-cream text-base md:text-lg lg:text-xl leading-relaxed text-justify w-full md:w-4/5 lg:w-3/5 mx-auto">
            DHA Islamabad-Rawalpindi entered into an MOU on 6th January, 2011.
            PTCL has set up the infrastructure to provide Information and
            Communication Technology (ICT) facilities to the residents of
            Phase-II and other projects of DHA Islamabad-Rawalpindi. The ICT
            facilities include telephony, DSL, IPTV, and security services for
            domestic customers, and leased lines, DXX, IPLC, and conference
            calling for corporate customers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ptcl;
