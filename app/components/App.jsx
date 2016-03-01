import React from 'react'
import Options from './Options'
import Sketchpad from './Sketchpad'

export default ({store}) => {
  const state = store.getState()

  return (
    <div>
      <Options store={store} />
      <Sketchpad sketchpadSize={state.sketchpadWidth} boxesPerSide={state.squares} />
    </div>
  )
}