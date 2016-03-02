import React from 'react'
import Options from './Options'
import Sketchpad from './Sketchpad'

const App = ({store}) => {
  const state = store.getState()

  return (
    <div>
      <Options store={store} />
      <Sketchpad sketchpadWidth={state.sketchpadWidth} boxesPerSide={state.squares} />
    </div>
  )
}

export default App