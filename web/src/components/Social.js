import React from 'react'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          socials {
            twitter
            github
          }
        }
      }
    }
  `)

  return (
    <div className="my-10 text-white flex items-center">
      <Image
        fixed={data.file.childImageSharp.fixed}
        className="rounded-full mr-8"
      />
      <a
        href={data.site.siteMetadata.socials.twitter}
        className="pr-4"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
        <span className="mr-2">Twitter</span>
      </a>
      <a
        href={data.site.siteMetadata.socials.github}
        className="pr-4"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        <span className="mr-2">Github</span>
      </a>
    </div>
  )
}

export default Social
