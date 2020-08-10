import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { isBrowser, trimTrailingSlash } from '../../utils'
import Link from '../Link'

/**
 * Header component for the page heading navigation & branding
 * @param {React.FunctionComponent<Props>} props
 * @param {Boolean} [props.fixed] - If the header should be fixed to the top of the page or not
 */
const Header = ({ sticky }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  /* allows custom styling based on if page has been scrolled */
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    setScrolled(window.pageYOffset !== 0)
    document.addEventListener('scroll', () =>
      setScrolled(window.pageYOffset !== 0)
    )
  }, [])

  const stickyClasses = `sticky top-0 text-white p-4 z-50 transition duration-500 ${
    scrolled ? 'bg-gray-900' : 'bg-black'
  }`

  return (
    <header className={`text-white p-4 z-50 ${sticky && stickyClasses}`}>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link to="/" className="relative flex items-center">
            <span className="absolute left-0 transform -translate-x-full -ml-4">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                className="rounded-full"
              />
            </span>
            <p className="font-bold">Dan Spratling</p>
          </Link>

          <div className="flex font-bold">
            <NavLink to="/" heading="Home" />
            {/* <NavLink to="/about" heading="About" /> */}
            <NavLink to="/projects" heading="Projects" />
            <NavLink to="/contact" heading="Contact" />
          </div>
        </nav>
      </div>
    </header>
  )
}

const NavLink = ({ to, heading }) => {
  const isCurrentPage =
    isBrowser &&
    trimTrailingSlash(to) === trimTrailingSlash(window.location.pathname)

  console.log(window.location.pathname, to)
  return (
    <Link to={to} className={`block m-2 ${isCurrentPage && 'text-green-500'}`}>
      {heading}
    </Link>
  )
}

export default Header
