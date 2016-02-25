import React from 'react';
import Square from './Square';

export default class Sketchpad extends React.Component {
  render() {
    const squareSize = 1000 / this.props.boxesPerSide;
    const boxes = this.props.boxesPerSide * this.props.boxesPerSide;

    return (
      <div className="sketchpad">{Array(boxes).fill(<Square size={squareSize} />)}</div>
    );
  }
}