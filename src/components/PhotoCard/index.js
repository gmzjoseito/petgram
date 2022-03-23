import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { useNearScreen } from '../../hooks/useNearScreen.js'
//
import { Article, ImgWrapper, Image } from './styles.js'
import { FavButton } from '../FavButton'
//
import { useLikePhoto } from '../../hooks/useLikePhoto.js'
//
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  //
  const [show, elementRef] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)
  const [toggleLike] = useLikePhoto()

  const handleFavClick = () => {
    toggleLike({ variables: //eslint-disable-line
      { input: { id } }
    })
    setLiked(!liked)
  }
  //
  return (
    <Article ref={elementRef}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </> //eslint-disable-line
      }
    </Article>
  )
}
