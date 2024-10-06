import React from 'react'
import ArchitectsTable from '../../components/Architects/ArchitectsTable'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'

const Architectspage = () => {
  return (
    <div>
      <HeroSectionWithHeading backgroundImage={"https://premierchoiceint.com/wp-content/uploads/2024/01/Grand-Orchard-Elevation6.webp"} heading='Architects'/>
      <ArchitectsTable/>
    </div>
  )
}

export default Architectspage
