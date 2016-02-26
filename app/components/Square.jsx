import React from 'react';

export default ({size}) => {
  const styles = {
    width: size,
    height: size,
    backgroundColor: 'black'
  }

  return (
    <div className="square" style={styles}>
    </div>
  );
}