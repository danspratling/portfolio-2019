import React, { useEffect, useCallback } from 'react'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Carousel from '@brainhubeu/react-carousel'

const Lightbox = ({
  lightboxState,
  setLightboxState,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  const rootEl =
    typeof document !== 'undefined'
      ? document.getElementById('___gatsby')
      : null

  const onChange = value => {
    setCurrentIndex(value)
  }

  const handleKeypress = useCallback(
    e => {
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
    },
    [currentIndex, setCurrentIndex, setLightboxState, images]
  )

  const init = rootEl => {
    if (rootEl) {
      rootEl.classList.add('max-h-screen')
      rootEl.classList.add('overflow-hidden')
      document.addEventListener('keydown', e => handleKeypress(e))
    }
  }

  const exit = useCallback(() => {
    if (rootEl) {
      rootEl.classList.remove('max-h-screen')
      rootEl.classList.remove('overflow-hidden')
      document.addEventListener('keydown', e => handleKeypress(e))
    }
  }, [rootEl, handleKeypress])

  //Clean up on unmount
  useEffect(() => {
    return () => exit(rootEl)
  }, [exit, rootEl])

  //exit early if server
  if (typeof document === 'undefined') {
    return null
  }

  //exit early if lightbox is closed
  if (!lightboxState) {
    exit(rootEl)
    return null
  }

  //initialize
  init(rootEl)

  //render lightbox
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
