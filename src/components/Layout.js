import React from 'react'
import { Footer } from '.'
import { initIcons } from '../utils'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '../scss/main.scss'

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
