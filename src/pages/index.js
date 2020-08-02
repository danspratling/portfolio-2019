import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  MegaHeading,
  ProjectList,
  SEO,
  SectionIntro,
  Social,
  ContactSection,
} from '../components'

const IndexPage = ({ data }) => {
  //Gets avatar for social image
  const socialImage = data.file.childImageSharp

  //descructure our pagedata as js objects so we can use them
  const {
    seo,
    pageIntro,
    projectIntro,
    projectList,
    contactSection,
  } = data.contentfulHomepage

  //Render the page
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={'/images/seo/home.png'}
      />

      {/* page section - Introduction */}
      <section
        id="intro"
        className="relative min-h-screen lg:min-h-1024 bg-black py-12 lg:py-40"
      >
        <div className="container mx-auto">
          <div className="my-10 md:my-0">
            <MegaHeading>Dan Spratling.</MegaHeading>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-no-wrap -mx-5">
            <div className="w-full md:w-2/5 lg:w-3/5 mx-5 order-last lg:order-first ml-auto lg:ml-0">
              <div className="md:flex">
                <Social image={socialImage} />
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/5 mx-5 md:mx-auto lg:mx-5 z-10">
              <SectionIntro data={pageIntro} />
            </div>
          </div>
        </div>
      </section>

      {/* page section - Projects */}
      <section
        id="projects"
        className="min-h-screen min-w-full bg-black py-12 lg:py-32"
      >
        <div className="container mx-auto">
          <ProjectList
            sectionIntro={{
              data: projectIntro,
              animation: {
                visibility: true,
                direction: 'from top',
              },
            }}
            projectList={projectList}
          />
        </div>
      </section>

      {/* page section - Blog */}
      {/* <section
        id="blog"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section> */}

      {/* page section - Contact */}
      <section id="contact" className="min-h-screen bg-black py-32">
        <div className="container mx-auto">
          <ContactSection {...contactSection} />
        </div>
      </section>
    </Layout>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contentfulHomepage {
      seo {
        title
        description
      }
      pageIntro {
        heading
        title
        body {
          json
        }
        link {
          link
          title
        }
      }
      projectIntro {
        heading
        title
        body {
          json
        }
        link {
          link
          title
        }
      }
      projectList {
        title
        slug
        categories: industries {
          title
        }
        previewImage {
          fixed(width: 600, height: 380, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      contactSection {
        cards {
          title
          body
          icon
        }
        title
        body {
          childMdx {
            body
          }
        }
        link {
          link
          title
        }
      }
    }
  }
`

export default IndexPage
