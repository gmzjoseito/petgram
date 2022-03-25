import React from 'react'
import { GlobalStyle } from './styles/global'
import { Logo } from './components/Logo'
//
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
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
      <Navbar />
    </>
  )
}
