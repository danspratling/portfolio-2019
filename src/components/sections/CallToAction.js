import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '../Link'
import Markdown from '../markdown/Markdown'
import VisibilitySensor from '../VisibilitySensor'

/**
 * Contact section with CTA
 * @param {React.FunctionComponent<Props>} param
 * @param {String} param.heading - Descriptive contact section heading
 * @param {Object} param.body - Descriptive contact section detail
 * @param {Object} props.link - Contact link button
 * @param {String} props.link.to - Link URL
 * @param {String} props.link.title - Link Heading
 * @param {Array} param.promoCards - Promotional cards
 */
const CallToAction = ({ heading, body, link, promoCards }) => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <VisibilitySensor
            className="grid md:grid-cols-2 gap-8 mb-10"
            direction="right"
            fade
          >
            {promoCards.map((card, index) => (
              <PromoCard key={index} {...card} />
            ))}
          </VisibilitySensor>

          <VisibilitySensor
            className="w-full md:w-2/3 lg:w-full text-center lg:text-left mx-auto mb-20"
            direction="left"
            fade
          >
            <h2 className="text-2xl md:text-3xl text-white mb-8">{heading}</h2>
            <Markdown className="mb-12">{body.childMdx.body}</Markdown>
            <Link
              to={link.to}
              className="btn btn-lg btn-primary text-left"
              icon="default"
            >
              {link.heading}
            </Link>
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}

/**
 * Short promotional content with icon
 * @param {Object} props
 * @param {string} props.heading - Descriptive promo card heading
 * @param {Object} props.body - Descriptive promo card detail
 * @param {string} props.icon - Symbolic fontawesome icon
 */
const PromoCard = ({ heading, body, icon }) => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <FontAwesomeIcon
        icon={icon}
        className="text-2xl text-green-500 mt-8 mb-6"
      />
      <p className="text-xl font-semibold mb-2">{heading}</p>
      <p className="text-sm text-gray-500">{body}</p>
    </div>
  )
}

export default CallToAction
export { PromoCard }
