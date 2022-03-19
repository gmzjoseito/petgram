import React from 'react'
//
import { Button } from './styles.js'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes = 0, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' />
      {likes}
    </Button>
  )
}
