import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

/**
 * Styled 'primary' link. We want to use gatsby link functionality for internal links
 * @param {Object} props
 * @param {string} props.to - the link
 * @param {string} props.children - the link text
 */
const Link = ({ to, children }) => {
  if (typeof window !== 'undefined' && to.includes(window.location.hostname)) {
    return <InternalLink link={to}>{children}</InternalLink>
  }

  return <ExternalLink link={to}>{children}</ExternalLink>
}

//External links ar the default
const ExternalLink = ({ link, children }) => (
  <a
    href={link}
    className="inline-block w-auto h-auto bg-green-400 px-8 py-3 text-lg uppercase tracking-wider text-black"
  >
    {children}
  </a>
)

//Gatsby cleverly prefetches internal links. We want to keep that functionality
const InternalLink = ({ link, children }) => (
  <GatsbyLink
    to={link}
    className="inline-block w-auto h-auto bg-green-400 px-8 py-3 text-lg uppercase tracking-wider text-black"
  >
    {children}
  </GatsbyLink>
)

export default Link
