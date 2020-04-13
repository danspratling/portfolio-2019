import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  MegaHeading,
  ProjectCard,
  // SEO
  SectionIntro,
  Social,
} from '../components'

const errorPage = () => {
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
              <MegaHeading>
                404
                <br />
                Game Over
              </MegaHeading>
              <Social />
            </div>
            <div className="col-span-2 z-10">
              <SectionIntro
                data={{
                  heading: 'Mission failed',
                  title: 'Snake? Snake?! SNAAAAKE!',
                  body: `<p className="pb-4">
                        There's no page at <i>${window.location.href}</i>.
                        <br />
                        Don't abandon your mission! Go back and try again.
                      </p>`,
                  link: {
                    url: '/',
                    title: 'Continue',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default errorPage
