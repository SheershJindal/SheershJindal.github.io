import React, { useState } from 'react'

import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      <Navbar toggle={toggleOpen} />
    </>
  )
}

export default Header