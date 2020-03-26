import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </footer>
)

export default Footer
