const path = require('path')
const generateImage = require('./functions/socialImage')

//Build our social media (twitter/og) images using canvas
generateImage({
  title: '- Dan Spratling - Freelance web developer',
  slug: 'home',
})
generateImage({ title: '- Dan Spratling - Get in touch', slug: 'contact' })
generateImage({ title: '- Dan Spratling - Explore projects', slug: 'projects' })
// generateImage({ title: '', slug: 'uses' })

//create our pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get data from contentful, assigning the values we need
  const { data } = await graphql(`
    query {
      projects: allContentfulProject {
        edges {
          node {
            id: contentful_id
            title
            slug
          }
        }
      }
    }
  `)

  //create project pages from data
  data.projects.edges.forEach(({ node }) => {
    const seoImage = generateImage({
      title: `- Project review - ${node.title}`,
      slug: node.slug,
    })

    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve('./src/templates/project.js'),
      context: {
        id: node.id,
        seoImage: seoImage,
      },
    })
  })

  // //create posts from data
  // data.posts.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/${node.category.slug}/${node.slug}`,
  //     component: path.resolve('./src/templates/post-template.js'),
  //     context: {
  //       id: node.id,
  //     },
  //   })
  // })
}
