const analytics = ({ id, value = 0 }) => {
  if (typeof window !== 'undefined') {
    window.fathom.trackGoal(id, value)
  }
}

export default analytics
