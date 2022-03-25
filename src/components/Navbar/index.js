import React from 'react'
import { Nav, Link } from './styles.js'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const ICON_SIZE = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={ICON_SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={ICON_SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={ICON_SIZE} /></Link>
    </Nav>
  )
}
