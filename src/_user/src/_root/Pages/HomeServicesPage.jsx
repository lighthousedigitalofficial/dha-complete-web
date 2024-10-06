import React from 'react'

import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'
import Homeservices from '../../components/Services/Home Serives/Homeservices'

const HomeServicesPage = () => {
  return (
    <div>
      <HeroSectionWithHeading  backgroundImage={"src/assets/Images/homeser.jpg"} heading='Home Maintenance Services '/>
      < Homeservices/>
    </div>
  )
}

export default HomeServicesPage
