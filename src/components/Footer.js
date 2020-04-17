import React from 'react'
import { Link } from 'gatsby'
import { Social } from '.'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="text-center md:text-left w-auto py-5">
            <Link
              to="/"
              className="px-4 hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="px-4 hover:text-green-400 transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="px-4 hover:text-green-400 transition duration-200"
            >
              Contact
            </Link>
          </div>

          <Social imagePosition="none" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
