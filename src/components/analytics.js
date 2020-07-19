const analytics = ({ id, value = 0 }) => {
  setTimeout(() => {
    if (typeof window !== 'undefined' && window.fathom) {
      console.log(window.fathom, 'tracking ' + id)
      window.fathom.trackGoal(id, value)
    }
  }, 200)
}

export default analytics
