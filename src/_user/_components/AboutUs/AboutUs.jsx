import React, { useEffect } from "react";
import GoalsCard from "./GoalsCard";
import Profile from "./Profile";
import Hero_Section from "./Hero_Section";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);

  const profiles = [
    {
      position: "CEO, The Vertical",
      name: "MUTEEB SIDDIQI",
      sincerely: "Sincerely,",
      heading: "Dear Esteemed Stakeholders,",
      paragraph:
        'I am pleased to extend my sincere greetings as the Chief Executive Officer of The Vertical. It is with great enthusiasm that I present to you our latest advancements in high-rise corporate tower construction. Our innovative design philosophy, the "New Classic," seamlessly integrates state-of-the-art technology with timeless elegance, resulting in structures that epitomize enduring sophistication. Beyond mere architectural aesthetics, our buildings are meticulously crafted to enrich and complement the communities they serve. Our team of experts in architecture, engineering, and construction is dedicated to delivering not only visually striking designs but also ensuring functionality, sustainability, and energy efficiency. Moreover, our commitment extends to the highest standards of safety, security, and accessibility. Looking ahead, we remain steadfast in our dedication to delivering projects that contribute to the growth and development of the communities they inhabit. The New Classic design approach is a testament to our mission – creating spaces that stand the test of time and elevate the lives of those who occupy them.',
      img: "https://tashheer.com/wp-content/uploads/2023/11/rafiq-m-habib.jpg",
      bgColor: "bg-golden",
    },
    {
      position: "CEO, The Vertical",
      name: "MUTEEB SIDDIQI",
      sincerely: "Sincerely,",
      heading: "Dear Esteemed Stakeholders,",
      paragraph:
        'I am pleased to extend my sincere greetings as the Chief Executive Officer of The Vertical. It is with great enthusiasm that I present to you our latest advancements in high-rise corporate tower construction. Our innovative design philosophy, the "New Classic," seamlessly integrates state-of-the-art technology with timeless elegance, resulting in structures that epitomize enduring sophistication. Beyond mere architectural aesthetics, our buildings are meticulously crafted to enrich and complement the communities they serve. Our team of experts in architecture, engineering, and construction is dedicated to delivering not only visually striking designs but also ensuring functionality, sustainability, and energy efficiency. Moreover, our commitment extends to the highest standards of safety, security, and accessibility. Looking ahead, we remain steadfast in our dedication to delivering projects that contribute to the growth and development of the communities they inhabit. The New Classic design approach is a testament to our mission – creating spaces that stand the test of time and elevate the lives of those who occupy them.',
      img: "https://cdn.shopify.com/s/files/1/0707/0895/3393/files/picture_muteeb.jpg?v=1675920960",
      bgColor: "bg-brand",
    },
  ];

  return (
    <div>
      <Hero_Section />

      {/* Vision and Mission Section */}
      <div className="bg-brand text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 p-5 md:p-10">
          <GoalsCard
            heading={"Our Vision"}
            pragraph={
              "To be a leading Housing Authority of Pakistan by providing safe, secure and healthy living community environment to all the clients of Housing Authority Islamabad-Rawalpindi."
            }
            data-aos="fade-up" // Apply AOS animation
          />
          <GoalsCard
            heading={"Our Mission"}
            pragraph={
              "Defence Housing Authority Islamabad-Rawalpindi is committed to develop and maintain safe, secure and environmental friendly living community meeting all the social needs of its clients through quality services at affordable cost using state of the art technology."
            }
            data-aos="fade-up" // Apply AOS animation
          />
        </div>
      </div>

      {/* Profile Sections */}
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={profile.bgColor}
          data-aos="fade-up" // Apply AOS animation
        >
          <Profile
            position={profile.position}
            name={profile.name}
            sincerely={profile.sincerely}
            heading={profile.heading}
            paragraph={profile.paragraph}
            img={profile.img}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
