import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  FooterContainer,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'

// import FooterColumn from './FooterColumn'
// import { aboutData, siteData, contactData } from './DUMMY_DATA'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterColumn data={aboutData} title={'About Us'} />
              <FooterColumn data={siteData} title={'News and Info'} />
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterColumn data={contactData} title={'Contact Us'} />
            </FooterLinksWrapper>
          </FooterLinksContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome} >Portfolio</SocialLogo>
              <WebsiteRights>Developed by Sheersh Jindal.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='//github.com/SheershJindal/' target='_blank' aria-label='Github'>
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink href='//linkedin.com/in/sheershjindal/' target='_blank' aria-label='LinkedIn'>
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href='mailto:sheershjindal@gmail.com' target='_blank' aria-label='Gmail'>
                  <FaEnvelope />
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