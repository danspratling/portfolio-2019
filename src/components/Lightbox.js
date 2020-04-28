import React from 'react'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import '../scss/lightbox.scss'

const Lightbox = ({
  lightboxState,
  setLightboxState,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  if (!lightboxState) {
    return null
  }

  const rootEl = document.getElementById('___gatsby')
  rootEl.classList.add('max-h-screen')
  rootEl.classList.add('overflow-hidden')

  const onChange = value => {
    console.log(value)
    setCurrentIndex(value)
  }

  const closeLightbox = () => {
    rootEl.classList.remove('max-h-screen')
    rootEl.classList.remove('overflow-hidden')
    setLightboxState(false)
  }

  const handleEscape = e => e.keyCode === 27 && closeLightbox

  document.addEventListener('keydown', e => handleEscape(e))

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="relative z-20 max-h-full">
        <div
          className="absolute top-0 right-0 p-3 lg:p-10 text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          onClick={closeLightbox}
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </div>
        <Carousel value={currentIndex} onChange={onChange} arrows>
          {images.map(image => (
            <Image
              key={image.fluid.src}
              fluid={image.fluid}
              className="w-full max-w-640 mx-auto"
            />
          ))}
        </Carousel>
      </div>
      <div className="absolute top-0 left-0 right-0 min-h-full bg-black z-10" />
    </div>
  )
}

export default Lightbox
