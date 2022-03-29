import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <form onSubmit={activateAuth}>
          <button>Iniciar sesión</button>
        </form>
      )
    }
  </Context.Consumer>
)
