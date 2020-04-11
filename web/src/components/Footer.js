import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            twitter
            github
            instagram
          }
        }
      }
    }
  `)

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
          <div className="w-auto text-xl py-5">
            <a
              to={data.site.siteMetadata.socials.twitter}
              className="pr-6 hover:text-green-400 cursor-pointer transition duration-200"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            </a>
            <a
              to={data.site.siteMetadata.socials.github}
              className="pr-6 hover:text-green-400 cursor-pointer transition duration-200"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
            </a>
            <a
              to={data.site.siteMetadata.socials.instagram}
              className="pr-6 hover:text-green-400 cursor-pointer transition duration-200"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
