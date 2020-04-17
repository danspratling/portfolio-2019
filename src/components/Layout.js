import React from 'react'
import { Header, Footer } from '.'
import { initIcons } from '../utils'
import '../scss/main.scss'

const Layout = ({ children }) => {
  initIcons()

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
