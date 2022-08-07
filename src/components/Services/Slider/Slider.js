import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import {
  ProjectSliderButton,
  ProjectSliderContainer,
  ProjectSliderControls,
  ProjectSliderLeft,
  ProjectSliderRight,
  ProjectSliderWrapper
} from './SliderElements'

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 2000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const swipe = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    trackMouse: true,
    preventScrollOnSwipe: true
  })

  return (
    <ProjectSliderContainer onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} {...swipe}>
      <ProjectSliderWrapper transformWrapper={`translateX(-${activeIndex * 33.33}%)`}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "33.33%" })
        })}
      </ProjectSliderWrapper>
      <ProjectSliderControls>
        <ProjectSliderLeft onClick={() => updateIndex(activeIndex - 1)}>Prev</ProjectSliderLeft>
        {React.Children.map(children, (child, index) => {
          return (
            <ProjectSliderButton
              className={index === activeIndex ? 'active' : ''}
              buttonWidth={React.Children.count(children) * 5}
              onClick={() => {
                updateIndex(index)
              }}
            >
            </ProjectSliderButton>
          )
        })}
        <ProjectSliderRight onClick={() => updateIndex(activeIndex + 1)}>Next</ProjectSliderRight>
      </ProjectSliderControls>
    </ProjectSliderContainer >
  )
}

export default Slider