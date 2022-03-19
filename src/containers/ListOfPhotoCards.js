import React from 'react'
import { gql, useQuery } from '@apollo/client'
//
import { PhotoCard } from '../components/PhotoCard'

const withPhotos = gql`
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
  const { loading, error, data } = useQuery(withPhotos)
  //
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  //
  return (
    <ul>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
