import React, { useState } from 'react'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import { Button } from '../utils/ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Woodworking Service at your doorsteps.</HeroH1>
          <HeroP>Sign up today and get a free check on our next visit.</HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection