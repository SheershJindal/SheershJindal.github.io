import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'
import FooterColumn from './FooterColumn'
import { aboutData, siteData, contactData } from './DUMMY_DATA'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterColumn data={aboutData} title={'About Us'} />
              <FooterColumn data={siteData} title={'News and Info'} />
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterColumn data={contactData} title={'Contact Us'} />
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome} >Wood.work</SocialLogo>
              <WebsiteRights>Wood.work &copy; {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='//facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//instagram.com' target='_blank' aria-label='Indtagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='//twitter.com' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='//linkedin.com' target='_blank' aria-label='LinkedIn'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer