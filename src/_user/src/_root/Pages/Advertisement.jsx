import React from 'react'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import { advertisementData } from '../../Utils/data'
import AdvertisementCard from '../../components/Advertisement/AdvertisementCard'

const Advertisement = () => {
  return (
    
    <div className='bg-golden'>
      <HeroSectionWithHeading backgroundImage='https://irealprojects.com/wp-content/uploads/2023/11/Zameen-Ace-Mall-dha-2-islamabad.jpeg' heading='Advertisements' />
      <div className="w-[90%] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 p-4">
          {advertisementData.map((ad, index) => (
            <AdvertisementCard key={index} imageUrl={ad.imageUrl} title={ad.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Advertisement
