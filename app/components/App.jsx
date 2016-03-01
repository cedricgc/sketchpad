import settings from '../settings.json'

import React from 'react'
import Options from './Options'
import Sketchpad from './Sketchpad'

export default ({store}) => {
  return (
    <div>
      <Options store={store} />
      <Sketchpad sketchpadSize={settings.sketchpadSize} boxesPerSide={settings.defaultSquares} />
    </div>
  )
}