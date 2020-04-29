const fs = require('fs')
const { createCanvas } = require('canvas')

function generateImage({ title, slug }) {
  //define canvas size
  let width = 1200
  let height = 630

  //draw canvas
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  //Fill the background
  context.fillStyle = '#68d391'
  context.fillRect(0, 0, width, height)

  //readjust width and height
  width = width - 50
  height = height - 50

  //fill an inner container to simulate a border
  context.fillStyle = '#000'
  context.fillRect(25, 25, width, height)

  //set the copy style
  context.font = 'bold 70pt Fira Code'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#fff'

  //readjust width and height again
  width = width - 50
  height = height - 50

  //redraw the title over multiple lines
  const words = title.split(' ')
  let line = ''
  let fromTop = 100
  words.forEach(word => {
    let testLine = line + word + ' '
    if (context.measureText(testLine).width > width) {
      context.fillText(line.trim(), 600, fromTop)
      line = word + ' '
      fromTop = fromTop + 110
    } else {
      line = line + word + ' '
    }
  })
  context.fillText(line.trim(), 600, fromTop)
  context.fillStyle = '#fff'

  // const textWidth = context.measureText(title).width

  //insert ttitle
  // context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
  // context.fillStyle = '#fff'
  // context.fillText(title, 600, 170)

  //insert domain
  context.fillStyle = '#718096'
  context.font = 'bold 30pt Fira Code'
  context.fillText('danspratling.dev', 600, 500)

  //export image
  const buffer = canvas.toBuffer('image/png')
  const imageLocation = `/images/seo/${slug}.png`
  fs.writeFileSync(`static/${imageLocation}`, buffer)

  return imageLocation
}

module.exports = generateImage
