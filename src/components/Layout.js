import React from 'react'
import { load as loadFathom } from 'fathom-client'
import { Footer } from '.'
import { initIcons } from '../utils'

const Layout = ({ children }) => {
  initIcons()
  loadFathom('KNXTCNOS', {
    url: 'https://rhinoceros.danspratling.dev/script.js',
    excludedDomains: ['localhost'],
  })

  return (
    <>
      <main className="max-w-full overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
