import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faSortAmountUp,
  faUsers,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

import dengro from '../images/dengro-preview-slice.png'

import {
  Layout,
  MegaHeading,
  ProjectCard,
  // SEO
  SectionIntro,
  Social,
} from '../components'

const IndexPage = () => {
  const projects = [...Array(3).keys()]

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <section
        id="intro"
        className="relative h-screen min-h-1024 bg-black pt-40 pb-40"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <MegaHeading>Dan Spratling.</MegaHeading>
              <Social />
            </div>
            <div className="col-span-2 z-10">
              <SectionIntro
                data={{
                  heading: 'Introduction',
                  title: 'Website developer and designer, based in the UK',
                  body: `<p className="pb-4">
                        I'm a Software Engineer with 5 years experience in web development. I
                        love turning beautiful designs into interactive websites, with a special
                        focus on user experience ensuring websites deliver as much value as
                        possible.
                      </p><br />
                      <p>
                        I'm available for freelance work, and always looking for interesting
                        challenges to take on.
                      </p>`,
                  link: {
                    url: '#projects',
                    title: 'See my work',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen bg-black pt-64 pb-32">
        <div className="container mx-auto">
          <div
            className="flex flex-col flex-wrap -mx-24"
            style={{ maxHeight: 1200 }}
          >
            <div className="w-1/2 px-24 my-12">
              <SectionIntro
                data={{
                  heading: `Projects`,
                  title: `A selection of projects I've worked on.`,
                  body: `<p>With 5 years in agency I've worked on many large and small
                        websites. Here's a few of my favourites.</p>`,
                  link: {
                    url: `/projects`,
                    title: `Explore more`,
                  },
                }}
                animation={{
                  visibility: true,
                  direction: 'from top',
                }}
              />
            </div>

            {projects.map(project => (
              <div className="w-1/2 px-24 my-12">
                <ProjectCard
                  data={{
                    title: `Project ${project}.`,
                    categories: ['Development', 'UX'],
                    image: dengro,
                  }}
                />
              </div>
            ))}
          </div>

          {/* <Portfolio /> */}

          <div className="flex justify-center my-8"></div>
        </div>
      </section>
      {/* <section
        id="blog"
        className="min-h-screen bg-black pt-40 pb-40"
      ></section> */}
      <section id="contact" className="min-h-screen bg-black pt-32 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-24">
            <div className="col-span-3">
              <h2 className="text-3xl text-white mb-12">
                If you're trying to make more sales, find new customers, or grow
                your brand, you need a website.
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-900 text-white p-6">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-2xl text-green-400 mt-8 mb-6"
                  />
                  <p className="text-xl font-semibold mb-2">Sell products.</p>
                  <p className="text-sm text-gray-500">
                    Create an online shop to sell to a wider audience and
                    increase your turnover.
                  </p>
                </div>
                <div className="bg-gray-900 text-white p-6">
                  <FontAwesomeIcon
                    icon={faSortAmountUp}
                    className="text-2xl text-green-400 mt-8 mb-6"
                  />
                  <p className="text-xl font-semibold mb-2">Raise awareness.</p>
                  <p className="text-sm text-gray-500">
                    You can't make a sale if nobody knows what you do. A website
                    makes it easy to find out.
                  </p>
                </div>
                <div className="bg-gray-900 text-white p-6">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-2xl text-green-400 mt-8 mb-6"
                  />
                  <p className="text-xl font-semibold mb-2">
                    Reach new customers
                  </p>
                  <p className="text-sm text-gray-500">
                    A website is one of the most sharable mediums. Enhance your
                    online presence.
                  </p>
                </div>
                <div className="bg-gray-900 text-white p-6">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-2xl text-green-400 mt-8 mb-6"
                  />
                  <p className="text-xl font-semibold mb-2">
                    Leave an impression.
                  </p>
                  <p className="text-sm text-gray-500">
                    A good website will leave a lasting impression, which leads
                    to return visits and more sharing.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                A website can do so much for you. Make sure you're getting the
                most out of it. If your website isn't pulling its weight, it's
                time to upgrade.
              </p>

              <div className="flex justify-end">
                <button className="w-auto h-auto bg-green-400 px-6 py-3 text-lg">
                  Enquire
                </button>
              </div>
            </div>
            <div className="col-span-2">
              <SectionIntro
                data={{
                  heading: `Contact`,
                  title: `Have any questions?`,
                  body: `<p>If you want a website but aren't sure where to start, are thinking about a project for the future, 
                  a developer looking for ideas, or have any other questions, get in touch.</p>`,
                  link: {
                    url: `mailto:hello@danspratling.com`,
                    title: `hello@danspratling.com`,
                  },
                }}
                animation={{
                  visibility: true,
                  direction: 'from right',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
