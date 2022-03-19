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

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-left: 5px;
  padding: 8px 0 0 0;
  & svg {
    margin: 0 4px 0 0;
  }
`
