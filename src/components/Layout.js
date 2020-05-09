import React from 'react'
import { Footer } from '.'
import { initIcons } from '../utils'

const Layout = ({ children }) => {
  initIcons()

  return (
    <>
      <main className="max-w-full overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
