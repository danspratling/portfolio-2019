const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get data from contentful, assigning the values we need
  const { data } = await graphql(`
    query {
      projects: allContentfulProject {
        edges {
          node {
            id: contentful_id
            slug
          }
        }
      }
    }
  `)

  //create project pages from data
  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve('./src/templates/project.js'),
      context: {
        id: node.id,
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
