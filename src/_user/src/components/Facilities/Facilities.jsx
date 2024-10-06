import React, { useEffect } from "react";
import FacilitiesCard from "./FacilitiesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const facilitiesData = [
  {
    title: "Health",
    description:
      "Avicenna Medical Centre, Phase IAvicenna (MI room) located in Defence park near Enchanto Restaurant inaugurated by Vice President DHA Islamabad-Rawalp..",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNcgXLqL3HvoXbaa7liGAbz0gCzQCxDqSGw&s",
  },
  {
    title: "Sports",
    description:
      "The DHA Islamabad Sports Complex stands as a beacon of athletic excellence within the heart of the twin cities, offering a wide array of top-tier spor...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP9AZtHTRJmfcSjsK0jLC7FBL2sItsJabiw&s",
  },
  {
    title: "DHA Property Exchange",
    description:
      "DHA Property Exchange Islamabad-Rawalpindi was established in Nov 2008 with the core purpose to provide valued property services in a customer friendl...",
    imageUrl:
      "https://alsadatmarketing.com/wp-content/uploads/2023/09/dha-homes-islamabad-al-sadat-marketing-jpg.webp",
  },
  {
    title: "DHA Education System",
    description:
      "DES aims to provide a high standard of education in a warm and friendly environment focusing on personality development of students with emphasis on c...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvPS_QR14jZNBirO6tfJTWGM_OoMWffk3Mlrh2jQ3WDXhtH-Nxzw-Ehfy4SnoxahHNrI&usqp=CAU",
  },
  {
    title: "JACARANDA FAMILY CLUB",
    description:
      "An elegant club that guarantees spectacular luxury and extensive amenities, presented in the most secure and serene environment to match your aspirati...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTircToxB6-uXEwPDK5xMUi3ca2fBBYbWg4XQ&s",
  },
  {
    title: "Security",
    description:
      "DHA Islamabad-Rawalpindi provides its residents with 24-hour security. Security personnel conduct mobile patrolling during the night. All security per...",
    imageUrl:
      "https://makaansolutions.com/wp-content/uploads/2022/07/dha-rawalpindi-islamabad-introduction-1024x677.webp",
  },
  {
    title: "Complaint Management System",
    description:
      "Automated Complaint Management System In pursuance to enhance quality of service for valued residents, DHAI-R launches automated and interactive Com...",
    imageUrl:
      "https://blog.ipleaders.in/wp-content/uploads/2016/08/before-you-file-a-complaint.jpg",
  },
  {
    title: "JFC Cineplex",
    description: "Best Cinema in Town...More Details",
    imageUrl:
      "https://d2liqplnt17rh6.cloudfront.net/coverImages/jfccineplexcover_575b1bd2-c8c5-4c69-b307-434d4faf1609-585.jpeg",
  },
  {
    title: "JFC Bowling Alley",
    description:
      "In the series of Jacaranda Family Club sports and Leisure activities, Jacaranda offers 12 Lane Bowling Alley with Spectacular and supreme luxury envir...",
    imageUrl:
      "https://www.jacarandadha.com/wp-content/uploads/2023/11/JfcBolowing-club.jpg",
  },
];

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="text-white bg-brand pb-5">
      <HeroSectionWithHeading
        backgroundImage="https://cdn.pk.emaar.com/wp-content/uploads/2023/09/Dusk-Close-1620x832.jpg"
        heading="Facilities"
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full p-4"
        data-aos="zoom-in"
      >
        {facilitiesData.map((facility, index) => (
          <FacilitiesCard
            key={index}
            title={facility.title}
            description={facility.description}
            imageUrl={facility.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
