import React from 'react'
import { Link } from 'gatsby'
import { Social } from '.'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="flex flex-wrap text-center md:text-left justify-center md:justify-start w-auto -mx-4 py-5">
            <Link
              to="/"
              className="w-1/3 md:w-auto p-4 hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="w-1/3 md:w-auto p-4 hover:text-green-400 transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="w-1/3 md:w-auto p-4 hover:text-green-400 transition duration-200"
            >
              Blog
            </Link>
            <Link
              to="/uses"
              className="w-1/3 md:w-auto p-4 hover:text-green-400 transition duration-200"
            >
              Uses
            </Link>
            <Link
              to="/contact"
              className=" w-1/3 md:w-auto p-4 hover:text-green-400 transition duration-200"
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
