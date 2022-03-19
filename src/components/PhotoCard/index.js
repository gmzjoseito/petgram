import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { useNearScreen } from '../../hooks/useNearScreen.js'
//
import { Article, ImgWrapper, Image, Button } from './styles.js'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  //
  const [show, elementRef] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={elementRef}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </> //eslint-disable-line
      }
    </Article>
  )
}
