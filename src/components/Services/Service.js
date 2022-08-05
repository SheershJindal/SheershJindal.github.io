import React from 'react'

import { ServicesCard, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements'

const Service = ({ icon }) => {
  return (
    <ServicesCard>
      <ServicesIcon src={icon} />
      <ServicesH2>H2</ServicesH2>
      <ServicesP>Text</ServicesP>
    </ServicesCard>
  )
}

export default Service