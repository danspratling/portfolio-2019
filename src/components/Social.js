import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faDev,
  faFacebookSquare,
  faPinterestSquare,
  faSlackHash,
  faDiscord,
  faTwitch,
  faYoutube,
  faMedium,
  faDribbbleSquare,
} from '@fortawesome/free-brands-svg-icons'

/**
 * Social media link component
 */
const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            twitter
            github
            instagram
            linkedin
            dev
          }
        }
      }
    }
  `)

  return (
    <div className="flex items-center justify-start py-10 text-xl text-white">
      <div className="flex flex-wrap items-center max-w-380 -mx-4">
        {Object.entries(data.site.siteMetadata.socials).map(([key, url]) => (
          <a
            href={url}
            title={`Social profile - ${key}`}
            className="px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={iconMap[key]} />
          </a>
        ))}
      </div>
    </div>
  )
}

const iconMap = {
  twitter: faTwitter,
  facebook: faFacebookSquare,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  dribbble: faDribbbleSquare,
  pinterest: faPinterestSquare,
  dev: faDev,
  medium: faMedium,
  github: faGithub,
  youtube: faYoutube,
  twitch: faTwitch,
  slack: faSlackHash,
  discord: faDiscord,
}

export default Social
