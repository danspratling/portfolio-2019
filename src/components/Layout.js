import React from 'react'
import { load as loadFathom } from 'fathom-client'
import { Footer } from '.'
import { initIcons, isBrowser } from '../utils'

const Layout = ({ children }) => {
  initIcons()

  if (isBrowser) {
    loadFathom('KNXTCNOS', {
      url: 'https://rhinoceros.danspratling.dev/script.js',
      excludedDomains: ['localhost'],
    })
  }

  return (
    <>
      <main className="max-w-full overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
