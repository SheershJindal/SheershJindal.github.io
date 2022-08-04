import React, { useState } from 'react'

import HeroSection from '../components/HeroSection/HeroSection'
import { homeAbout, homeDiscover, homeServices } from '../components/InfoSection/DUMMY_DATA'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      <Navbar toggle={toggleOpen} />
      <HeroSection />
      <InfoSection {...homeAbout} />
      <InfoSection {...homeDiscover} />
      <InfoSection {...homeServices} />
    </>
  )
}

export default Header