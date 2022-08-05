import React from 'react'

import { NavItem, NavLinks, NavMenu } from './NavbarElements'
import { navbarMenuItemsData } from '../DUMMY_DATA'

const NavbarMenuLinks = () => {
  return (
    <NavMenu>
      {navbarMenuItemsData.map(d =>
        <NavItem>
          <NavLinks
            to={d.to}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >{d.label}</NavLinks>
        </NavItem>
      )}
    </NavMenu>
  )
}

export default NavbarMenuLinks