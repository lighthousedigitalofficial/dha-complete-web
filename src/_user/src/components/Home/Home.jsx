import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SectionBlocks from "./SectionBlocks";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="text-white">
      {/* Phase I */}
      <div className="bg-golden" data-aos="fade-up">
        <SectionBlocks
          img="https://www.pins.pk/uploads/project/229-439.jpg"
          heading={"Phase I"}
          paragraph={
            "DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi mountainous area with breath taking views. Residents are enjoying contemporary lifestyle that is the exclusive of DHA."
          }
        />
      </div>

      {/* Phase II - Reversed Layout */}
      <div className="bg-brand" data-aos="fade-up">
        <SectionBlocks
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSojgEdZcuG1rK-g1qGmK-F7kD89p53OufGA&s"
          heading={"Phase II"}
          paragraph={
            "Nestled between Grand Trunk Road and Islamabad Highway lies our DHA phase II comprising of approx 15,075 kanals. All the sectors are fully urbanized and now home to a number of families. This Phase exhibits peace, harmony, security, luxury and convenience."
          }
          reverse
        />
      </div>

      {/* Phase III */}
      <div className="bg-golden" data-aos="fade-up">
        <SectionBlocks
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpez-wM6yclpeLOqSZ-vH2LtPrPQ6996gt7A&s"
          heading={"Phase III"}
          paragraph={
            "Located in the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with beating heart concept comprising modernized residential and commercial areas. Its town plan also encompasses a golf course, theme park and a lake (already constructed). Development of this Phase has commenced since Jan 2017 with full swing and so far 1050 Kanal has been fully developed while earthwork of 3800 kanal (approx) has been completed."
          }
        />
      </div>

      {/* Phase IV - Reversed Layout */}
      <div className="bg-brand" data-aos="fade-up">
        <SectionBlocks
          img="https://theleadmarketing.com/wp-content/uploads/2023/01/DHA-Phase-4-Islamabad.jpg"
          heading={"Phase IV"}
          paragraph={
            "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set  in a semi-hilly area having eye catching natural landscape with contoured terraces providing scenic view to residents. The natural topography has been respected to the greatest possible extent while trying to achieve a viable number of plots with an economical and well engineered infrastructure of civic and municipal services. The project will offer high-end amenities with recreational facilities & green areas. "
          }
          reverse
        />
      </div>

      {/* Phase V */}
      <div className="bg-golden" data-aos="fade-up">
        <SectionBlocks
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpez-wM6yclpeLOqSZ-vH2LtPrPQ6996gt7A&s"
          heading={"Phase V"}
          paragraph={
            "Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A, B, C, D,E, F, G & H. Phase-V is located along the Main Islamabad Highway, having dual access through DHA Expressway and L.A.K Boulevard. It exists in the area, which has tremendous landscape and natural beauty."
          }
        />
      </div>

      {/* Phase VI - Reversed Layout */}
      <div className="bg-brand" data-aos="fade-up">
        <SectionBlocks
          img="https://media.licdn.com/dms/image/D4D12AQGB2C5p01W4FA/article-cover_image-shrink_720_1280/0/1683022326498?e=2147483647&v=beta&t=BbEswTdCIWoZLgPvqjHFLZ0wIin--OuiWmHP7rimiHg"
          heading={"Phase VI (Ex Phase - II Extn)"}
          paragraph={
            "DHA Islamabad-Rawalpindi Phase VI (Ex Phase – II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals (estimated). After re-designing of masterplan incorporat DHA Islamabad-Rawalpindi has made another exceptional move towards the development of its phases according to modren infrastructure and design. The masterplan is designed by world-renowned Town Planning company ‘OJRM’ Los Angeles, USA."
          }
          reverse
        />
      </div>

      {/* DHA Valley */}
      <div className="bg-golden" data-aos="fade-up">
        <SectionBlocks
          img="https://www.skymarketing.com.pk/wp-content/uploads/2022/06/DHA-Valley-Islamabad.jpg"
          heading={"DHA Valley"}
          paragraph={
            "Launched on 18 August “2008” and is adjacent to DHA Phase II Extension. The project has written new stories of success & met with unmatched response from the general public. Heavy earth moving equipment have been deployed at the site to transform the existing landscapes & valleys to a world class township.In this regard the development work of Expressway has already been started which will link Islamabad Highway with DHA Valley. Residents of DHA Valley will have an exclusive access to all the world class services & amenities like Jamia Mosque, Golf Course, Theme Park & Community club etc."
          }
        />
      </div>
    </div>
  );
};

export default Home;
