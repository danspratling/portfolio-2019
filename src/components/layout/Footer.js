import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Link from '../Link'
import Social from '../Social'

/**
 * Footer component for all navigation routes & featured articles
 */
const Footer = () => {
  /* Static data, retrieving the two posts we consider 'featured'. */
  const data = useStaticQuery(graphql`
    query FooterQuery {
      article1: contentfulPost(
        id: { eq: "86ab0c7a-0745-5cc9-8ded-f71e2d42c6d9" }
      ) {
        slug
        title
      }
      article2: contentfulPost(
        id: { eq: "7d9131d6-a15f-5001-8257-4d69b094be44" }
      ) {
        slug
        title
      }
    }
  `)

  return (
    <footer className="bg-black text-white md:px-4 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap -mx-6 py-8">
          <div className="w-full md:flex-auto px-6 mb-6">
            <p className="font-bold text-3xl mb-6">Dan Spratling</p>
            <div className="text-gray-300">
              <p className="mb-2">
                UX Consultant & Website Specialist. I will help you create a
                website which works.
              </p>
              <p className="mb-2">
                User Experience. Design. Development. Results.
              </p>
            </div>
            <Social />
          </div>
          <div className="w-full md:w-1/3 px-6 mb-6">
            <p className="font-bold text-xl mb-4">Quick Links</p>
            <nav className="text-gray-300">
              <Link to="/" className="block mb-2">
                Home
              </Link>
              <Link to="/projects" className="block mb-2">
                Projects
              </Link>
              <Link to="/blog" className="block mb-2">
                Articles
              </Link>
              <Link to="/contact" className="block mb-2">
                Contact
              </Link>
              <Link to="/newsletter" className="block mb-2">
                Newsletter
              </Link>
            </nav>
          </div>
          <div className="w-full md:w-5/12 px-6 mb-6">
            <p className="font-bold text-xl mb-4">Featured Articles</p>
            <nav className="text-gray-300">
              <Link to={`/blog/${data.article1.slug}`} className="block mb-2">
                {data.article1.title}
              </Link>
              <Link to={`/blog/${data.article2.slug}`} className="block mb-2">
                {data.article2.title}
              </Link>
            </nav>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            &copy; Dan Spratling {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
