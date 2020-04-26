// import React from 'react'
// import { graphql } from 'gatsby'

// import { Layout, ProjectList, SEO } from '../components'

// const ProjectPage = ({ data }) => {
//   //Get the page sections from the graphql data
//   const seo = data.contentfulPage.seo
//   const pageIntro = data.contentfulPage.intro
//   const projectList = data.allContentfulProject.nodes

//   return (
//     <Layout>
//       <SEO title={seo.title} description={seo.description} />

//       <section
//         id="projects"
//         className="min-h-screen min-w-full bg-black px-6 py-32"
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-row flex-wrap text-white">
//             <div className="w-full md:w-2/3">Blog post</div>
//             <div className="w-full md:w-1/3">Sidebar</div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// //Graphql query getting all the data we need from contentful (gatsby-config.js)
// export const query = graphql`
//   query {
//     contentfulPage(slug: { eq: "projects" }) {
//       seo {
//         title
//         description
//       }
//       intro {
//         heading
//         title
//         body {
//           json
//         }
//         link {
//           link
//           title
//         }
//       }
//     }
//     allContentfulProject {
//       nodes {
//         title
//         slug
//         categories
//         previewImage {
//           fixed(width: 600, height: 380) {
//             ...GatsbyContentfulFixed_withWebp
//           }
//         }
//       }
//     }
//   }
// `

// export default ProjectPage
