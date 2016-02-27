import React from 'react'
import Square from './Square'

export default ({sketchpadSize, boxesPerSide}) => {
  const squareSize = sketchpadSize / boxesPerSide;
  const boxes = boxesPerSide * boxesPerSide;

  return (
    <div className="sketchpad" style={{width: sketchpadSize}}>
      {Array(boxes).fill(<Square size={squareSize} />)}
    </div>
  )
}