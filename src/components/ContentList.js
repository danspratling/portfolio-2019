import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ContentList = ({ body }) => {
  return (
    <div>
      <p className="text-lg mb-4">Table of contents</p>
      {documentToReactComponents(body.json, documentRichTextOptions)}
    </div>
  )
}

//Options adjusting rich text elements
const documentRichTextOptions = {
  renderMark: {
    [MARKS.CODE]: () => null,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      const ref = `#${children[0].toLowerCase().replace(' ', '')}`
      return (
        <a href={ref}>
          <p className="text-sm py-2 transition duration-400 hover:text-green-400">
            {children}
          </p>
        </a>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const ref = `#${children[0].toLowerCase().replace(' ', '')}`
      return (
        <a href={ref}>
          <p className="text-sm pl-5 py-2 transition duration-400 hover:text-green-400">
            {children}
          </p>
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: () => null,
    [BLOCKS.QUOTE]: () => null,
    [BLOCKS.UL_LIST]: () => null,
    [BLOCKS.LI_LIST]: () => null,
    [BLOCKS.LIST_ITEM]: () => null,
  },
}

export default ContentList
