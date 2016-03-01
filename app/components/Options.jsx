import React from 'react'
import { showGrid, setDimensions, setEffect, Effects } from '../actions'

export default ({store}) => {
    return (
      <div id="options">
        <h2>Sketchpad!</h2>
        <p>Move your cursor over an area to change its color, choose from the options below:</p>
        <form>
          <input id="borders" type="checkbox" name="borders"
            onClick={() => {store.dispatch(showGrid(!store.getState().showGrid))}}/>Show Grid
          <button type="button" id="newSize">New Dimensions</button>
          <button type="button" id="default" 
            onClick={() => {store.dispatch(setEffect(Effects.DEFAULT))}}>Default</button>
          <button type="button" id="colorChoice">Change Color</button>
          <button type="button" id="trail" 
            onClick={() => {store.dispatch(setEffect(Effects.TRAIL))}}>Trail</button>
          <button type="button" id="gradient" 
            onClick={() => {store.dispatch(setEffect(Effects.GRADIENT))}}>Gradient</button>
          <button type="button" id="random" 
            onClick={() => {store.dispatch(setEffect(Effects.RANDOM_COLORS))}}>Random Colors</button>
      </form>
      </div>
    )
}