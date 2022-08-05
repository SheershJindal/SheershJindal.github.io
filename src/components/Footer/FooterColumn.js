import React from 'react'

import { FooterLink, FooterLinkItems, FooterLinkTitle } from './FooterElements'

const FooterColumn = ({ data, title }) => {
  return (
    <FooterLinkItems>
      <FooterLinkTitle>{title}</FooterLinkTitle>
      {data.map(d => <FooterLink to={d.to}>{d.label}</FooterLink>)}
    </FooterLinkItems>
  )
}

export default FooterColumn