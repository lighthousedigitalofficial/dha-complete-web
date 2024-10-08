import React from 'react'
import Registration from '../../components/DhaPropertyExchange/Registration'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'

const RegistrationPage = () => {
  return (
    <div>
      <HeroSectionWithHeading backgroundImage={"https://isbproperty.com/wp-content/uploads/2020/04/DHA-Islamabad-03.jpg"} heading='Registration'/>
      <Registration/>
    </div>
  )
}

export default RegistrationPage
