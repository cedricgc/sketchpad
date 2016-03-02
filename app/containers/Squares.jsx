import React from 'react'
import Square from '../components/Square'

const Squares = ({count, sideLength, handlers}) => {
  return (
    <div>
      {generateSquares(count, sideLength, handlers)}
    </div>
  )
}

function generateSquares(count, sideLength, handlers) {
  let squares = []
  for(let i = 0; i < count; i++) {
    squares.push(<Square key={i} sideLength={sideLength} {...handlers} />)
  }
  return squares
}

export default Squares