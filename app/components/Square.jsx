import settings from '../settings.json'

import React from 'react'

const Square = ({sideLength}) => {
  const styles = {
    width: sideLength,
    height: sideLength,
    backgroundColor: settings.defaultColor
  }

  return (
    <div className="square" style={styles}>
    </div>
  )
}

export default Square