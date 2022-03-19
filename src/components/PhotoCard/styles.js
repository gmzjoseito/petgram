import styled from 'styled-components'
import { fadeIn } from '../../styles/animation.js'

export const Article = styled.article`
box-shadow: 0 5px 14px rgba(0,0,0, .2);
  margin: 0 0 10px 4%;
  min-height: 180px;
  padding-bottom: 10px;
  width: 92%;
`

export const ImgWrapper = styled.picture`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Image = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0,0,0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
