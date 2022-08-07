import React from 'react'

import { ServicesContainer, ServicesH1, ServicesWrapper } from './ServicesElements'
import Service from './Service'
import SliderItem from './Slider/SliderItem'
import Slider from './Slider/Slider'
import { SlideData } from './DUMMY_DATA'

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>
          Our Projects
        </ServicesH1>
        <ServicesWrapper>
          <Slider>
            {SlideData.map((slide, index) => <SliderItem src={slide.src} key={index} />)}
          </Slider>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services