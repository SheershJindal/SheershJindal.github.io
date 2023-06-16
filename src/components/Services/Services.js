import React from 'react'

import { ServicesButtonContainer, ServicesContainer, ServicesH1, ServicesWrapper } from './ServicesElements'
// import Service from './Service'
import SliderItem from './Slider/SliderItem'
import Slider from './Slider/Slider'
import { SlideData } from './DUMMY_DATA'
import { ButtonLink } from '../utils/ButtonLink'

const Services = () => {
  return (
    <>
      <ServicesContainer id='projects'>
        <ServicesH1>
          Projects
        </ServicesH1>
        <ServicesWrapper>
          <Slider>
            {SlideData.map((slide, index) => <SliderItem src={slide.src} key={index} href={slide.href} />)}
          </Slider>
        </ServicesWrapper>
        <ServicesButtonContainer>

          <ButtonLink
            href="//github.com/SheershJindal"
            target='_blank'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary={0}
            dark={0}
            dark2={0}
          >View More</ButtonLink>
        </ServicesButtonContainer>
      </ServicesContainer>
    </>
  )
}

export default Services