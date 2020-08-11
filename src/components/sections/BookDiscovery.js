import React from 'react'

import { RichText } from '..'

import Link from '../Link'
import VisibilitySensor from '../VisibilitySensor'

const BookDiscovery = ({ heading, body, link }) => {
  return (
    <section
      id="bookDiscovery"
      className="relative md:min-h-screen bg-black pt-32"
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
            style={{ height: 640 }}
            data-url="https://calendly.com/dan_spratling/discovery"
          ></div>
        </div>
      </div>
    </section>
  )
}

export default BookDiscovery
