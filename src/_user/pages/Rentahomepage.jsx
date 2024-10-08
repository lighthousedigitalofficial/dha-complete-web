import React from 'react'
import Renthome from '../../components/DhaPropertyExchange/Renthome'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import video from '../../assets/Videos/App/rentvideo.mp4'
const Rentahomepage = () => {
  return (
    <>
     <div>
      <HeroSectionWithHeading backgroundVideo={video} heading='Rent a Properity'/>
      <Renthome/>
    </div>
    </>
  )
}

export default Rentahomepage
