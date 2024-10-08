import React from 'react'
import Solarfirms from '../../components/Solar Firms/Solarfirms'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'

const SolarFirmspage = () => {
  return (
    <div>
      <HeroSectionWithHeading backgroundImage={"https://images.pexels.com/photos/14613940/pexels-photo-14613940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"} heading='Solar Firms'/>
      <Solarfirms/>
    </div>
  )
}

export default SolarFirmspage
