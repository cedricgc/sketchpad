import React from 'react'
import Square from '../components/Square'
import handlers from '../lib/handlers'

class Squares extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {count, sideLength, handers} = this.props
    return (
      <div>
        {generateSquares(count, sideLength, handlers)}
      </div>
    )
  }
}

function generateSquares(count, sideLength, handlers) {
  let squares = []
  for(let i = 0; i < count; i++) {
    squares.push(<Square key={i} sideLength={sideLength} {...handlers} />)
  }
  return squares
}

export default Squares