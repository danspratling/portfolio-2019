import React from 'react'
import { Link, PromoCard, Markdown } from '.'

/**
 * Page section for promoting content
 * @param {Object} param
 * @param {string} param.title
 * @param {Object} param.body
 * @param {Object} param.link
 * @param {array} param.cards
 */
const ContactSection = ({ title, body, link, cards }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {cards.map((card, index) => (
          <PromoCard key={index} {...card} />
        ))}
      </div>

      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl text-white mb-8">{title}</h2>
        <Markdown className="mb-12">{body.childMdx.body}</Markdown>
        <Link to={link.link} variant="primary">
          {link.title}
        </Link>
      </div>
    </div>
  )
}

export default ContactSection
