import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children }) => {
  if (typeof window !== 'undefined' && to.includes(window.location.hostname)) {
    return <InternalLink link={to}>{children}</InternalLink>
  }

  return <ExternalLink link={to}>{children}</ExternalLink>
}

const ExternalLink = ({ link, children }) => (
  <a href={link} className="w-auto h-auto bg-green-400 px-6 py-3 text-lg">
    {children}
  </a>
)

const InternalLink = ({ link, children }) => (
  <GatsbyLink
    to={link}
    className="w-auto h-auto bg-green-400 px-6 py-3 text-lg"
  >
    {children}
  </GatsbyLink>
)

export default Link
