import React from 'react'
import { Link, PromoCard, RichText } from '../components'

/**
 * Page section for promoting content
 * @param {Object} param
 * @param {string} param.title
 * @param {Object} param.body
 * @param {Object} param.link
 * @param {array} param.cards
 */
const Upsell = ({ title, bodyStart, body, link, cards }) => {
  return (
    <div className="flex flex-row flex-wrap lg:flex-no-wrap items-center lg:-mx-12">
      <div className="lg:w-1/2 lg:mx-6">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {cards.map((card, index) => (
            <PromoCard key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 lg:mx-6">
        <h2 className="text-2xl md:text-3xl text-white mb-8">{title}</h2>

        {/* Render contentful rich text as html */}
        <div className="text-gray-600 mb-12">
          <RichText body={bodyStart} />
        </div>

        {/* Clickable link */}
        <div className="mb-20">
          <Link to={link.link}>{link.title}</Link>
        </div>
      </div>
    </div>
  )
}

export default Upsell
