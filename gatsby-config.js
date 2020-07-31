const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dan Spratling - UI & JavaScript Developer`,
    description: `Freelance Web and App developer, building high quality headless websites for small businesses.`,
    baseUrl: `danspratling.dev`,
    siteUrl: `https://danspratling.dev`,
    author: `@dan_spratling`,
    socials: {
      twitter: `https://twitter.com/dan_spratling`,
      github: `https://github.com/danspratling`,
      instagram: `https://www.instagram.com/danspratling`,
      linkedin: `https://www.linkedin.com/in/dan-spratling`,
      dev: `https://www.dev.to/danspratling`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`400`, `500`],
          },
          {
            family: `Cabin`,
            variants: [`400`, `700`],
          },
          {
            family: `Fira Code`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        host: process.env.CONTENTFUL_HOST,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Spratling - Freelance web developer`,
        short_name: `Dan_Spratling`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#68D391`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
