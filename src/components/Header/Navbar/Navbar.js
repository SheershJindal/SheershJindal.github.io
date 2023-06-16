import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  // NavBtn,
  // NavBtnLink,
  NavLogo,
} from './NavbarElements.js'

import NavbarMenuLinks from './NavbarMenuLinks.js'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            Portfolio
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenuLinks />
          {/* <NavBtn>
            <NavBtnLink to='/'>Login</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar