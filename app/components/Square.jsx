import settings from '../settings.json'

import React from 'react'

const Square = ({styles, handlers}) => {
  return (
    <div className="square" style={styles} {...handlers}> </div>
  )
}

export default Square