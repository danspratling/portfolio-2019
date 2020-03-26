import React from 'react'
import { Header, Footer } from '.'
import '../scss/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
