import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Link from '../Link'

const Header = ({ fixed }) => {
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

  const fixedClasses = `fixed top-0 left-0 right-0 text-white p-4 z-50 transition duration-500 ${
    scrolled ? 'bg-gray-900' : 'bg-black'
  }`

  return (
    <header className={`text-white p-4 z-50 ${fixed && fixedClasses}`}>
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
            <Link to="/" className="block m-2">
              Home
            </Link>
            {/* <Link to="/about" className="w-full mb-2">
                About
              </Link> */}
            <Link to="/projects" className="block m-2">
              Projects
            </Link>
            <Link to="/contact" className="block m-2">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
