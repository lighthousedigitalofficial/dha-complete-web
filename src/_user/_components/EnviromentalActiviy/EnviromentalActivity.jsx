import React, { useEffect } from "react";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import AOS from "aos";
import "aos/dist/aos.css";
const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iybLQ-o5tgWywPuXofLde3Rg4iu96WeTBw&s",
    alt: "EnviromentalActivity Drive Image 1",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9saRhsihmOAyX0RzU-_dXcmZ2VB4zBxsBtQ&s",
    alt: "EnviromentalActivity Drive Image 2",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-BzzX5epQ9YjUZNCj7aorbkmB-1BNKpKZSkRfjR6VEI_R87F0ISW3JOw7ZzSdwVjjZM&usqp=CAU",
    alt: "EnviromentalActivity Drive Image 3",
  },
];

const EnviromentalActivity = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <HeroSectionWithHeading
        backgroundVideo="/plantation.mp4"
        heading="Environmental Activities"
      />
      <div className="flex flex-wrap justify-center gap-6  m-8">
        {images.map((image, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className=" rounded-md bg-brand shadow-lg border-2  p-2 border-gray-300 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnviromentalActivity;
