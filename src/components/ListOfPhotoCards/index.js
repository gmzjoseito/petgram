import React from 'react'
import { PhotoCard } from '../PhotoCard'
//
import { withPhotos } from '../../hoc/withPhotos.js'
import { useQuery } from '@apollo/client'

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
