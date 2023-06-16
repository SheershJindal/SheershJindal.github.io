import React, { useState } from 'react'

import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements'
import { Button } from '../utils/ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Sheersh Jindal</HeroH1>
          <HeroP>Building Immersive Web and Game Experiences that Engage and Inspire</HeroP>
          <HeroBtnWrapper>
            <Button
              to='projects'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              See Projects {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection