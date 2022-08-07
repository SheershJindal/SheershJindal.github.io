import React from 'react'

import { ProjectImage, ProjectItemContainer } from './SliderElements'

const SliderItem = ({ children, width, src }) => {
  return (
    <ProjectItemContainer itemWidth={width}>
      <ProjectImage src={src} />
      {children}
    </ProjectItemContainer>
  )
}

export default SliderItem