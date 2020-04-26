// import React from 'react'
// import { graphql } from 'gatsby'
// import Image from 'gatsby-image'

// import { Layout, RichText, ContentList, SEO } from '../components'

// const ProjectTemplate = ({ data }) => {
//   //Get the page sections from the graphql data
//   const {
//     seo,
//     createdAt,
//     updatedAt,
//     title,
//     desktopImage,
//     mobileImage,
//     body,
//     categories,
//     node_locale,
//   } = data.contentfulProject

//   return (
//     <Layout>
//       <SEO title={seo.title} description={seo.description} />

//       <section
//         id="projects"
//         className="min-h-screen min-w-full bg-black px-6 pb-32"
//       >
//         <div className="-mx-12 pt-20 mb-20 bg-gray-900 border-b-2 border-green-400">
//           <Image
//             fluid={[
//               mobileImage.fluid,
//               { ...desktopImage.fluid, media: `(min-width: 768px)` },
//             ]}
//             className="w-full min-w-768"
//           />
//         </div>

//         <div className="container mx-auto">
//           <h1 className="text-4xl text-green-400 lg:px-8">{title}</h1>
//           <div className="flex flex-row flex-wrap text-white">
//             <div className="w-full hidden md:block md:order-last md:w-1/3 lg:px-8 mt-12">
//               <ContentList body={body} />
//             </div>
//             <div className="w-full md:order-first md:w-2/3 lg:px-8">
//               <RichText body={body} />
//             </div>
//           </div>
//           <div className="py-6 lg:px-8">
//             <p className="text-xs text-gray-600 uppercase font-bold">
//               {updatedAt > createdAt ? 'Last updated' : 'Created on'}
//             </p>
//             <p className="text-xl text-white">
//               {getDate(
//                 updatedAt > createdAt ? updatedAt : createdAt,
//                 node_locale
//               )}
//             </p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// //Gets date in locale format
// const getDate = (date, locale) => {
//   return new Intl.DateTimeFormat(locale, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }).format(new Date(date))
// }

// //Graphql query getting all the data we need from contentful (gatsby-config.js)
// export const query = graphql`
//   query getProject($id: String!) {
//     contentfulProject(contentful_id: { eq: $id }) {
//       seo {
//         title
//         description
//       }
//       title
//       createdAt(formatString: "")
//       updatedAt(formatString: "")
//       desktopImage: headerImage {
//         fluid {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//       mobileImage: headerImage {
//         fluid(maxWidth: 900, maxHeight: 260, quality: 100) {
//           ...GatsbyContentfulFluid_withWebp
//         }
//       }
//       body {
//         json
//       }
//       categories
//       node_locale
//     }
//   }
// `

// export default ProjectTemplate
