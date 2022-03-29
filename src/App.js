import React from 'react'
import Context from './Context'
import { GlobalStyle } from './styles/global'
import { Logo } from './components/Logo'
//
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Navbar } from './components/Navbar'
//
import { Router } from '@reach/router'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router> //eslint-disable-line
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router> //eslint-disable-line
        }
      </Context.Consumer>
      <Navbar />
    </>
  )
}
