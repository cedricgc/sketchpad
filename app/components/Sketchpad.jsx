import React from 'react'
import Squares from '../containers/Squares'

const Sketchpad = ({sketchpadWidth, boxesPerSide, handlers}) => {
  const squareLength = sketchpadWidth / boxesPerSide
  const boxes = boxesPerSide * boxesPerSide

  return (
    <div className="sketchpad" style={{width: sketchpadWidth}}>
      <Squares count={boxes} sideLength={squareLength} handlers={handlers} />
    </div>
  )
}

export default Sketchpad
