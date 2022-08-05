import React from 'react'

import HeroSection from '../components/HeroSection/HeroSection'
import { homeAbout, homeDiscover, homeServices } from './DUMMY_DATA'
import InfoSection from '../components/InfoSection/InfoSection'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeAbout} />
      <InfoSection {...homeDiscover} />
      <Services />
      <InfoSection {...homeServices} />
    </>
  )
}

export default Home