import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link, PromoCard } from '../components'

const Upsell = ({ title, body, link, cards }) => {
  return (
    <>
      <h2 className="text-3xl text-white mb-12">{title}</h2>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {cards.map((card, index) => (
          <PromoCard key={index} {...card} />
        ))}
      </div>

      <div className="text-gray-600">
        {documentToReactComponents(body.json, documentRichTextOptions)}
      </div>

      <div className="flex justify-end">
        <Link to={link.link}>{link.title}</Link>
      </div>
    </>
  )
}

//Options adjusting rich text elements
const documentRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
  },
}

export default Upsell
