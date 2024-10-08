import React from 'react';
import banner from '../../assets/Videos/Guide/openAccount.mp4';
import HeroSectionWithHeading from '../Share/HeroScetionWithHeading';
import video1 from '../../assets/Videos/Guide/FBL.mp4';
import video2 from '../../assets/Videos/Guide/UBL.mp4';
import video3 from '../../assets/Videos/Guide/MCB.mp4';
import video4 from '../../assets/Videos/Guide/MBL.mp4';
import video5 from '../../assets/Videos/Guide/HBL.mp4';
import video6 from '../../assets/Videos/Guide/BAFL.mp4';
import CardPublicServices from '../PublicServices/CardPublicServices';


const data = [
  {
    title: "Faysal Bank Limited (FBL)",
    videoSrc: video1,
    imageSrc: null,
  },
  {
    title: "United Bank Limited (UBL)",
    videoSrc: video2,
    imageSrc: null,
  },
  {
    title: "Muslim Commercial Bank (MCB)",
    videoSrc: video3,
    imageSrc: null,
  },
  {
    title: "Meezan Bank Limited (MBL)",
    videoSrc: video4,
    imageSrc: null,
  },
  {
    title: "Habib Bank Limited (HBL)",
    videoSrc: video5,
    imageSrc: null,
  },
  {
    title: "Bank Alfalah Limited (BAFL)",
    videoSrc: video6,
    imageSrc: null,
  },
];

const HowToPay = () => {
  return (
    <div className='bg-brand'>
      <HeroSectionWithHeading backgroundVideo={banner} heading='How to Open Roshan Digital Account and Payment Procedure' />
      <div className="w-[80%] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.map((service, index) => (
          <CardPublicServices
            key={index}
            title={service.title}
            videoSrc={service.videoSrc}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default HowToPay;