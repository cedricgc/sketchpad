import React from 'react';

export default ({size}) => {
  return (
    <div className="square" style={{width: size, height: size, color: 'black'}}></div>
  );
}