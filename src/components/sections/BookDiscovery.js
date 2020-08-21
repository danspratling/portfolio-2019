import React from 'react'

import Link from '../Link'
import VisibilitySensor from '../VisibilitySensor'
import RichText from '../RichText'

/**
 * Section adding a calendly booking widget to the page
 * @param {React.FunctionComponent<Props>} props
 * @param {String} props.heading
 * @param {String} [props.body]
 * @param {Object} [props.link]
 * @param {String} props.link.to
 * @param {String} props.link.heading
 */
const BookDiscovery = ({ heading, body, link }) => {
  return (
    <section
      id="bookDiscovery"
      className="relative md:min-h-screen bg-black py-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto justify-around items-center">
          <div className="w-full lg:w-1/2 px-6 mb-20">
            <VisibilitySensor className="text-center" direction="bottom" fade>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>

              {body && <RichText body={body} />}
              {link && (
                <Link to={link.to} className="btn btn-secondary" icon="default">
                  {link.heading}
                </Link>
              )}
            </VisibilitySensor>
          </div>

          <div
            className="w-full calendly-inline-widget"
            style={{ height: 680 }}
            data-url="https://calendly.com/dan_spratling/discovery"
          ></div>
        </div>
      </div>
    </section>
  )
}

export default BookDiscovery
