import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  margin: 0 0 20px;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    {
      ${fadeIn()};
      background: #ffffff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0, .3);
      left: 0;
      margin: 0 auto;
      max-width: 500px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -10px;
      transform: scale(.75);
      z-index: 1;
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
