import React from 'react'

import Link from '../Link'
import Social from '../Social'
// import Markdown from '../../Markdown'
import RichText from '../RichText'
import VisibilitySensor from '../VisibilitySensor'

/**
 * Page hero section
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.megaHeading - Giant page heading
 * @param {String} props.heading - Descriptive hero heading
 * @param {String} props.body - Descriptive hero detail
 * @param {Object} [props.link] - Hero link button
 * @param {String} props.link.to - Link URL
 * @param {String} props.link.heading - Link Heading
 */
const Hero = ({ megaHeading, heading, body, link }) => {
  return (
    <section
      id="intro"
      className="relative min-h-screen md:min-h-1024 py-12 lg:py-40"
    >
      <div className="container mx-auto">
        <div className="my-10 md:my-0">
          <VisibilitySensor
            fade
            direction="right"
            className="md:absolute left-0 bottom-0 mb-24 md:mt-24"
          >
            <span className="megaHeading">{megaHeading}</span>
          </VisibilitySensor>
        </div>
        <div className="flex flex-row flex-wrap lg:flex-no-wrap">
          <div className="w-full md:w-2/5 lg:w-3/5 mx-5 order-last lg:order-first ml-auto lg:ml-0">
            <div className="flex justify-center md:justify-start">
              <Social />
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-2/5 md:mx-auto">
            <VisibilitySensor fade>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>
              <div className="text-gray-600">
                {body && <RichText body={body} />}
                {link && (
                  <Link
                    to={link.to}
                    className="btn btn-secondary"
                    icon="default"
                  >
                    {link.heading}
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
