import React from 'react'

import { ServicesContainer, ServicesH1, ServicesWrapper } from './ServicesElements'
import icon1 from '../../images/svg1.svg'
import icon2 from '../../images/svg2.svg'
import icon3 from '../../images/svg3.svg'
import Service from './Service'

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>
          Our Services
        </ServicesH1>
        <ServicesWrapper>
          <Service icon={icon1} />
          <Service icon={icon2} />
          <Service icon={icon3} />
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services