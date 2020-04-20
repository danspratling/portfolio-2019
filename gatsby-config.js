const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dan Spratling - UI & JavaScript Developer`,
    description: `Freelance Web and App developer, building high quality headless websites for small businesses.`,
    baseUrl: `danspratling.dev`,
    author: `@dan_spratling`,
    socials: {
      twitter: `https://twitter.com/dan_spratling`,
      github: `https://github.com/danspratling`,
      instagram: `https://www.instagram.com/danspratling`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
