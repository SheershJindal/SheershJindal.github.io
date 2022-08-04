import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/HeroSection'

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
    </>
  )
}

export default Header