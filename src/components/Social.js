import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

/**
 *
 * @param {Object} props
 * @param {'none' | 'start' | 'end'} props.imagePosition - alignment of the image
 */
const Social = ({ imagePosition = 'start' }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
    <div className="flex items-center justify-center py-10 text-xl text-white">
      {imagePosition === 'start' && (
        <div className="hidden md:block">
          <Image
            fixed={data.file.childImageSharp.fixed}
            className="rounded-full mr-10"
          />
        </div>
      )}
      <a
        href={data.site.siteMetadata.socials.twitter}
        name="Twitter profile"
        className="px-4 hover:text-green-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={data.site.siteMetadata.socials.github}
        name="Github profile"
        className="px-4 hover:text-green-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={data.site.siteMetadata.socials.instagram}
        name="Instagram account"
        className="px-4 hover:text-green-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      {imagePosition === 'end' && (
        <div className="hidden md:block">
          <Image
            fixed={data.file.childImageSharp.fixed}
            className="rounded-full mr-10"
          />
        </div>
      )}
    </div>
  )
}

export default Social
