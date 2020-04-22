import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { SyntaxHighlighter } from '../components'

const RichText = ({ body }) => {
  return (
    <div>{documentToReactComponents(body.json, documentRichTextOptions)}</div>
  )
}

//Options adjusting rich text elements
const documentRichTextOptions = {
  renderMark: {
    [MARKS.CODE]: text => {
      return (
        <div className="text-sm">
          <SyntaxHighlighter>{text}</SyntaxHighlighter>
        </div>
      )
    },
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2
        id={children[0].toLowerCase().replace(' ', '')}
        className="text-2xl mt-12 mb-6"
      >
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3
        id={children[0].toLowerCase().replace(' ', '')}
        className="text-xl mt-12 mb-6"
      >
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-4 text-gray-300">{children}</p>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="bg-gray-900 border-l-4 border-green-400 px-6 py-3">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.LI_LIST]: (node, children) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li>{node.content[0].content[0].value}</li>
    ),
  },
}

export default RichText
