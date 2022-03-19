import React, { useEffect, useRef, useState } from 'react'
//
import { MdFavoriteBorder } from 'react-icons/md'
import { Article, ImgWrapper, Image, Button } from './styles.js'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const elementRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(elementRef.current)
  }, [elementRef])

  return (
    <Article ref={elementRef}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />
            {likes} likes!
          </Button>
        </> //eslint-disable-line
      }
    </Article>
  )
}
