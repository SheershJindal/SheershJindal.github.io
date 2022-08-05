import React from 'react'
import { FaFacebook } from 'react-icons/fa'

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/workexample'>How we work</FooterLink>
                <FooterLink to='/projects'>Projects</FooterLink>
                <FooterLink to='/careers'>Careers</FooterLink>
                <FooterLink to='/tos'>Terms of Service  </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/workexample'>How we work</FooterLink>
                <FooterLink to='/projects'>Projects</FooterLink>
                <FooterLink to='/careers'>Careers</FooterLink>
                <FooterLink to='/tos'>Terms of Service  </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/workexample'>How we work</FooterLink>
                <FooterLink to='/projects'>Projects</FooterLink>
                <FooterLink to='/careers'>Careers</FooterLink>
                <FooterLink to='/tos'>Terms of Service  </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/workexample'>How we work</FooterLink>
                <FooterLink to='/projects'>Projects</FooterLink>
                <FooterLink to='/careers'>Careers</FooterLink>
                <FooterLink to='/tos'>Terms of Service  </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Wood.work</SocialLogo>
              <WebsiteRights>Wood.work &copy; {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='//facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
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