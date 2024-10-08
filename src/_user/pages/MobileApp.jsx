import React from 'react'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import video from '../../assets/Videos/App/dhamobileapp.mp4'
import Accordion from '../../components/Share/Accordions/Accordion';
import video1 from '../../assets/Videos/MobileApp/SignUp1.mp4';
import video2 from '../../assets/Videos/MobileApp/SignUpIOS.mp4';
import video3 from '../../assets/Videos/MobileApp/SignUp2.mp4';
// import video4 from '../../assets/Videos/MobileApp/SignUp4.mp4';


const items = [
  {
    id: 1,
    label: "Mobile App Downloading and Signup Procedure (Android Version)",
    image: null,
    videoSrc: video1, // No video for this item
  },
  {
    id: 2,
    label: "Mobile App Downloading Procedure (iOS Version)",
    image: null, // No image for this item
    videoSrc: video2,
  },
  {
    id: 3,
    label: "Mobile App Security and Complaints Feature",
    image: null,
    videoSrc: video3, // No video for this item
  },
  {
    id: 4,
    label: "Mobile App Other Features",
    image: null, // No image for this item
    videoSrc: video3,
  },
];

const MobileApp = () => {
  return (
    <div className='bg-golden'>
      <HeroSectionWithHeading backgroundVideo={video} heading='DHA Mobile App'/>
      <div className='p-4'>
      <Accordion items={items} />
      </div>
      {/* <CarouselWithNav/> */}
    </div>
  )
}

export default MobileApp
