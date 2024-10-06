import React from 'react'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import GuideCard from '../../components/MemberPortel/GuideCard';
import video from '../../assets/Videos/Guide/guide1.mp4'
import video1 from '../../assets/Videos/Guide/guide2.mp4'

const guideCardsData = [
  {
    title: "SignUp",
    description: "Learn the basics of React and how to build interactive UIs.",
    imageSrc: null,
    videoSrc: video,
  },
  {
    title: "How to Pay",
    description: "Deep dive into advanced JavaScript concepts and techniques.",
    imageSrc: null,
    videoSrc: video1,
  },
];

const GuidePage = () => {
  return (
    <div className='bg-golden'>
      <HeroSectionWithHeading backgroundImage='https://ecommunity.pk/images/home-bg.jpg' heading='Member Portal Guide'/>
      <div className="w-[80%] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {guideCardsData.map((guide, index) => (
        <GuideCard
          key={index}
          title={guide.title}
          description={guide.description}
          imageSrc={guide.imageSrc}
          videoSrc={guide.videoSrc}
        />
      ))}
    </div>
    </div>
  )
}

export default GuidePage
