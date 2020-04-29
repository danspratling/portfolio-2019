import React from 'react'
import { Light as ReactSyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

ReactSyntaxHighlighter.registerLanguage('javascript', js)

const SyntaxHighlighter = ({ showLineNumbers, children }) => {
  return (
    <ReactSyntaxHighlighter
      language="javascript"
      style={theme}
      showLineNumbers={showLineNumbers}
    >
      {children}
    </ReactSyntaxHighlighter>
  )
}

export default SyntaxHighlighter

const theme = {
  'hljs-comment': {
    color: fullConfig.theme.colors.gray[600],
  },
  'hljs-quote': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-variable': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-template-variable': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-tag': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-name': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-selector-id': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-selector-class': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-regexp': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-deletion': {
    color: fullConfig.theme.colors.gray[400],
  },
  'hljs-number': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-built_in': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-builtin-name': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-literal': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-type': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-params': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-meta': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-link': {
    color: fullConfig.theme.colors.purple[400],
  },
  'hljs-attribute': {
    color: fullConfig.theme.colors.yellow[400],
  },
  'hljs-string': {
    color: fullConfig.theme.colors.green[400],
  },
  'hljs-symbol': {
    color: fullConfig.theme.colors.green[400],
  },
  'hljs-bullet': {
    color: fullConfig.theme.colors.green[400],
  },
  'hljs-addition': {
    color: fullConfig.theme.colors.green[400],
  },
  'hljs-title': {
    color: fullConfig.theme.colors.teal[400],
  },
  'hljs-section': {
    color: fullConfig.theme.colors.teal[400],
  },
  'hljs-keyword': {
    color: fullConfig.theme.colors.yellow[300],
  },
  'hljs-selector-tag': {
    color: fullConfig.theme.colors.yellow[300],
  },
  hljs: {
    display: 'block',
    overflowX: 'auto',
    background: fullConfig.theme.colors.gray[900],
    color: fullConfig.theme.colors.gray[100],
    padding: fullConfig.theme.spacing[4],
    // fontFamily: Fira Code
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-strong': {
    fontWeight: 'bold',
  },
}
