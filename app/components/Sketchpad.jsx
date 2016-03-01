import React from 'react'
import Square from './Square'

export default ({sketchpadSize, boxesPerSide, handlers}) => {
  const squareSize = sketchpadSize / boxesPerSide
  const boxes = boxesPerSide * boxesPerSide

  return (
    <div className="sketchpad" style={{width: sketchpadSize}}>
      {generateSquares(boxes, squareSize, handlers)}
    </div>
  )
}

function generateSquares(count, size, handlers) {
  let squares = []
  for(let i = 0; i < count; i++) {
    squares.push(<Square key={i} size={size} {...handlers} />)
  }
  return squares
}

