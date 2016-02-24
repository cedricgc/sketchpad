import React from 'react'

export default class Options extends React.Component {
  render() {
    return (
      <div id="options">
        <h2>Sketchpad!</h2>
        <p>Move your cursor over an area to change its color, choose from the options below:</p>
        <form>
          <input id="borders" type="checkbox" name="borders"/>Show Grid
          <button type="button" id="newSize">New Dimensions</button>
          <button type="button" id="default">Default</button>
          <button type="button" id="colorChoice">Change Color</button>
          <button type="button" id="trail">Trail</button>
          <button type="button" id="gradient">Gradient</button>
          <button type="button" id="random">Random Colors</button>
      </form>
      </div>
    );
  }
}