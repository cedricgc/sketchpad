import React from 'react';
import Square from './Square';

export default () => {
  const squareSize = this.props.sketchpadSize / this.props.boxesPerSide;
  const boxes = this.props.boxesPerSide * this.props.boxesPerSide;

  return (
    <div className="sketchpad" style={{width: this.props.sketchpadSize}}>
      {Array(boxes).fill(<Square size={squareSize} />)}
    </div>
  );
}