import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const ProjectSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

export const ProjectSliderWrapper = styled.div`
  display: flex;
  transform: ${({ transformWrapper }) => transformWrapper};
  transition: transform 0.3s;
`

export const ProjectItemContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  height: 100%;
  width: ${({ itemWidth }) => itemWidth};
  margin: 0 10px;
`

export const ProjectImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25);
  border-radius: 10px;
  z-index: -10;
`

export const ProjectSliderControls = styled.div`
  margin-top: 15px;
  max-height: 20px;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectSliderLeft = styled(FaArrowLeft)`
  margin: 5px;
  min-width: 60%;
  font-size: 1.5rem;
  cursor: pointer;
`

export const ProjectSliderRight = styled(FaArrowRight)`
  margin: 5px;
  min-width: 60%;
  font-size: 1.5rem;
  cursor: pointer;
`

export const ProjectSliderButton = styled.div`
  height: 2.5px;
  min-width: 20%;
  background-color: #ddd;
  padding: 0 8px;
  cursor: pointer;

  &.active{
    background-color: #01bf71;
    color: #010606;
  }
`