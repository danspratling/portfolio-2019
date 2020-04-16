import React from 'react'
import { Link } from 'gatsby'
import { Social } from '.'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-auto py-5">
            <Link
              to="/"
              className="pr-6 hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="pr-6 hover:text-green-400 transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="pr-6 hover:text-green-400 transition duration-200"
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
