import React from 'react'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import video from '../../assets/Videos/PublicServiceMassage/message.mp4'
import video1 from '../../assets/Videos/PublicServiceMassage/a.mp4'
import video2 from '../../assets/Videos/PublicServiceMassage/b.mp4'
import video3 from '../../assets/Videos/PublicServiceMassage/c.mp4'
import video4 from '../../assets/Videos/PublicServiceMassage/d.mp4'
import video5 from '../../assets/Videos/PublicServiceMassage/e.mp4'
import video6 from '../../assets/Videos/PublicServiceMassage/f.mp4'
import CardPublicServices from '../../components/PublicServices/CardPublicServices'
const publicServicesData = [
  {
    title: "Public Service Video",
    videoSrc: video1,
    imageSrc: null,
  },
  {
    title: "Public Service Video",
    videoSrc: video2,
    imageSrc: null,
  },
  {
    title: "Public Service Video",
    videoSrc: video3,
    imageSrc: null,
  },
  {
    title: "Public Service Video",
    videoSrc: video4,
    imageSrc: null,
  },
  {
    title: "Public Service Video",
    videoSrc: video5,
    imageSrc: null,
  },
  {
    title: "Public Service Video",
    videoSrc: video6,
    imageSrc: null,
  }, 
];
const PublicServicesPage = () => {
  return (
    <div className='bg-primarylight'>
      <HeroSectionWithHeading heading='Public Services' backgroundVideo={video} />
      <div className="w-[80%] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {publicServicesData.map((service, index) => (
          <CardPublicServices
            key={index}
            title={service.title}
            videoSrc={service.videoSrc}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

export default PublicServicesPage
