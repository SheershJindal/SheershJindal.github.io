import React from 'react'

import {
  CloseIcon,
  Icon,
  SidebarBtnLink,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper
} from './SidebarElements'
import { navbarMenuItemsData } from '../DUMMY_DATA'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navbarMenuItemsData.map((d, index) => <SidebarLink key={index} to={d.to} onClick={toggle}>{d.label}</SidebarLink>)}
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtnLink to='/'>Login</SidebarBtnLink>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar