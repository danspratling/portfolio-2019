const path = require('path')
const generateImage = require('./src/utils/socialImage')

//Build our social media (twitter/og) images using canvas
generateImage({
  title: 'Dan Spratling Website Specialist & UX Consultant',
  slug: 'home',
})
generateImage({
  title: 'Contact me about your next project',
  slug: 'contact',
})
generateImage({
  title: 'Explore recent projects & find inspiration',
  slug: 'projects',
})
generateImage({
  title: 'Keep up to date with the latest articles',
  slug: 'blog',
})
generateImage({
  title: 'Everything that makes me an effective developer',
  slug: 'uses',
})
generateImage({
  title: 'Sign up to my newsletter',
  slug: 'newsletter',
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get data from contentful, assigning the values we need
  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            id: contentful_id
            title
            slug
          }
        }
      }
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
      title: `From my portfolio: ${node.title}`,
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

  //create blog posts from data
  data.posts.edges.forEach(({ node }) => {
    const seoImage = generateImage({
      title: node.title,
      slug: node.slug,
    })

    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: node.id,
        seoImage: seoImage,
      },
    })
  })
}
