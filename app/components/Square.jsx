import settings from '../settings.json'

import React from 'react'

export default ({size}) => {
  const styles = {
    width: size,
    height: size,
    backgroundColor: settings.defaultColor
  }

  return (
    <div className="square" style={styles}>
    </div>
  )
}