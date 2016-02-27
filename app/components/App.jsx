import settings from '../settings.json'

import React from 'react'
import Options from './Options'
import Sketchpad from './Sketchpad'

export default () => {
  return (
    <div>
      <Options />
      <Sketchpad sketchpadSize={settings.sketchpadSize} boxesPerSide={settings.defaultSquares} />
    </div>
  )
}