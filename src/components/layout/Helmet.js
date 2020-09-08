/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Helmet component for adapting the site <head>, typically for SEO
 * @param {React.FunctionComponent<Props>} props
 * @param {String} [props.title] - SEO title. Falls back to default title if undefined
 * @param {String} [props.description] - SEO desription. Falls back to default description if undefined
 * @param {String} [props.imagePath] - Relative path to SEO image. Defaults to homepage image.
 * @param {Boolean} [props.article] - Set to true if the current page is an article
 */
const SEO = ({ title, description, imagePath, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    author,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `https://${baseUrl}${imagePath || '/images/seo/home.png'}`,
    url: `https://${baseUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={`${baseUrl}${pathname}`} />

      {/* Calendly */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>

      {/* Analytics */}
      <script>{`(function(v,i,s,a){if(!v._visaSettings){v._visaSettings={};}v._visaSettings["c52608a9-ef5e-11ea-b589-901b0edac50a"]={v:"0.3",s:"c52608a9-ef5e-11ea-b589-901b0edac50a",a:"1"};_v=i.getElementsByTagName("head")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["c52608a9-ef5e-11ea-b589-901b0edac50a"].v;_a.appendChild(_s);})(window,document,"//app-worker.visitor-analytics.io/main",".js?s=c52608a9-ef5e-11ea-b589-901b0edac50a&v=")`}</script>

      {/* Pinterest */}
      <meta name="p:domain_verify" content="7b65eb5b0f0b74dffec61d33cb281410"/>

      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {author && <meta name="twitter:creator" content={author} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        baseUrl
        author
      }
    }
  }
`

export default SEO
