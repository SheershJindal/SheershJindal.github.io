import React from 'react'

import { ProjectImage, ProjectItemContainer } from './SliderElements'

const SliderItem = ({ children, width, src, href }) => {
  return (
    <ProjectItemContainer itemWidth={width}>
      <a href={href} target="_blank" style={{ textDecoration: "none" }}>

        <ProjectImage src={src} />
        {children}
      </a>
    </ProjectItemContainer>
  )
}

export default SliderItem