import React from 'react'
import Context from '../Context'
//
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <UserForm onSubmit={activateAuth} />
      )
    }
  </Context.Consumer>
)
