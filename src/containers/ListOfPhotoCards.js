import React from 'react'
import { gql, useQuery } from '@apollo/client'
//
import { ContentLoader } from '../components/PhotoCard/ContentLoader.js'
import { PhotoCard } from '../components/PhotoCard'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS)
  //
  if (loading) return <ContentLoader />
  if (error) return <h2>Internal Server Error</h2>
  //
  return (
    <ul>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
