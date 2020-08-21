import React from 'react'
import { load as loadFathom } from 'fathom-client'
import { initIcons, isBrowser } from '../../utils'

import Header from './Header'
import Helmet from './Helmet'
import Footer from './Footer'

/**
 * Wrapper component for pages inserting global components & other initiations
 * @param {Object} props
 * @param {String} [props.title] - SEO title. Falls back to default title if undefined
 * @param {String} [props.description] - SEO desription. Falls back to default description if undefined
 * @param {String} [props.imagePath] - Relative path to SEO image. Defaults to homepage image.
 * @param {Boolean} [props.article] - Set to true if the current page is an article
 * @param {JSX.Element} props.children - All remaining page content
 */
const Layout = ({ title, description, imagePath, article, children }) => {
  const seo = { title, description, imagePath, article }

  initIcons()

  if (isBrowser) {
    loadFathom('KNXTCNOS', {
      url: 'https://rhinoceros.danspratling.dev/script.js',
      excludedDomains: ['localhost'],
    })
  }

  return (
    <>
      <Helmet {...seo} />
      <Header />
      <main className="max-w-full bg-black overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
