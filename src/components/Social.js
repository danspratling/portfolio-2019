import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
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
 *
 * @param {Object} props
 * @param {Boolean} [props.showAvatar] - If the avatar should be displayed alongside the social icons. Defaults to hidden (false)
 */
const Social = ({ showAvatar = false }) => {
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
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="flex items-center justify-start -mx-4 py-10 text-xl text-white">
      {showAvatar && (
        <div className="hidden md:flex items-center">
          <Image
            fixed={data.file.childImageSharp.fixed}
            className="rounded-full mr-10"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center max-w-380">
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
