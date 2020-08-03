import React from 'react'
import VisibilitySensor from '../../VisibilitySensor'

import Link from '../../Link'
import Social from '../../Social'
// import Markdown from '../../Markdown'
import RichText from '../../RichText'

const Hero = ({ megaHeading, heading, body, link }) => {
  return (
    <section
      id="intro"
      className="relative min-h-screen lg:min-h-1024 bg-black py-12 lg:py-40"
    >
      <div className="container mx-auto">
        <div className="my-10 md:my-0">
          <VisibilitySensor
            direction="from left"
            className="md:absolute left-0 bottom-0"
          >
            <span className="megaHeading">{megaHeading}</span>
          </VisibilitySensor>
        </div>
        <div className="flex flex-row flex-wrap lg:flex-no-wrap -mx-5">
          <div className="w-full md:w-2/5 lg:w-3/5 mx-5 order-last lg:order-first ml-auto lg:ml-0">
            <div className="md:flex">
              <Social showAvatar="true" />
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-2/5 mx-5 md:mx-auto lg:mx-5 z-10">
            <VisibilitySensor>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>
              <div className="text-gray-600">
                {body && <RichText body={body} />}
                {link && (
                  <Link to={link.to} variant="secondary">
                    {link.title}
                  </Link>
                )}
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
