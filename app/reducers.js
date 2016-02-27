import { SHOW_GRID, SET_DIMENSIONS, SET_EFFECT, Effects } from './actions'

const initialState = {
  showGrid: false,
  sketchpadWidth: 1000,
  squares: 25,
  effect: Effects.DEFAULT
}

function sketchpadApp(state = initialState, action) {
  switch (action.type) {
    case SHOW_GRID:
      return { ...state, ...{ showGrid: action.show } }
    case SET_DIMENSIONS:
      return { ...state, ...{ squares: action.squares } }
    case SET_EFFECT:
      return { ...state, ...{ effect: action.effect } }
    default:
      return state
  }
}

export default sketchpadApp