import settings from '../settings.json'

import React from 'react'
import Square from '../components/Square'
import handlers from '../lib/handlers'

class Squares extends React.Component {
  constructor(props) {
    super(props)

    const squares = new Array(props.count).fill({
      styles: {
        width: props.sideLength,
        height: props.sideLength,
        backgroundColor: settings.defaultColor
      },
      handlers: {
        onClick: handlers.defaultHandler
      }
    })

    this.state = {
      squares
    }
  }

  render() {
    return (
      <div>{this.state.squares.map((data, index, arr) => {
        return (<Square key={index} styles={data.styles} handlers={data.handlers} />)
      })}
      </div>
    )
  }
}

export default Squares