import React from 'react'
import { Button } from '../utils/ButtonElement'

import {
  BtnWrap,
  Heading,
  Img,
  ImgWrap,
  InfoColumn1,
  InfoColumn2,
  InfoContainer,
  InfoRow, InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from './InfoElements'

const InfoSection = ({
  id,
  to,
  lightBg,
  lightText,
  darkText,
  topLine,
  headline,
  description,
  imgStart,
  img,
  alt,
  btnLabel,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{btnLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn1>
            <InfoColumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </InfoColumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection