import React, { useEffect } from 'react'
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
  const onChange = value => {
    setCurrentIndex(value)
  }

  const handleKeypress = e => {
    //escape
    if (e.keyCode === 27) {
      setLightboxState(false)
    }

    //left arrow or A
    if ((e.keyCode === 37 || e.key === 'a') && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    //right arrow or D
    if (
      (e.keyCode === 39 || e.key === 'd') &&
      currentIndex < images.length - 1
    ) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const rootEl = document.getElementById('___gatsby')

    //mount

    rootEl.classList.add('max-h-screen')
    rootEl.classList.add('overflow-hidden')
    document.addEventListener('keydown', e => handleKeypress(e))

    //unmount
    return () => {
      rootEl.classList.remove('max-h-screen')
      rootEl.classList.remove('overflow-hidden')
      document.addEventListener('keydown', e => handleKeypress(e))
    }
  }, [])

  if (!lightboxState) {
    return null
  }
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="relative z-20 max-h-full">
        <button
          className="absolute top-0 right-0 p-3 lg:p-10 text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          onClick={() => setLightboxState(false)}
          onKeyDown={e => (e.keyCode === 13 ? setLightboxState(false) : null)}
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
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
