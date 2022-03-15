import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles.js'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map(category => <Item key={category.index}><Category /></Item>)
      }
    </List>
  )
}
