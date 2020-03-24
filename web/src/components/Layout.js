import React from 'react'
import { Header, Footer } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main class="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
