import React from 'react'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
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
    <div className="flex items-center my-10 text-xl text-white">
      <Image
        fixed={data.file.childImageSharp.fixed}
        className="rounded-full mr-10"
      />
      <a
        href={data.site.siteMetadata.socials.twitter}
        className="pr-6 hover:text-green-400 transition duration-200"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
      </a>
      <a
        href={data.site.siteMetadata.socials.github}
        className="pr-6 hover:text-green-400 transition duration-200"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
      </a>
      <a
        href={data.site.siteMetadata.socials.instagram}
        className="pr-6 hover:text-green-400 transition duration-200"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
      </a>
    </div>
  )
}

export default Social
