// Action Types

export const SHOW_GRID = 'SHOW_GRID'
export const SET_DIMENSIONS = 'SET_DIMENSIONS'
export const SET_EFFECT = 'SET_EFFECT'

// Effect Types

export const Effects = {
  DEFAULT: 'DEFAULT',
  SET_COLOR: 'SET_COLOR',
  TRAIL: 'TRAIL',
  GRADIENT: 'GRADIENT',
  RANDOM_COLORS: 'RANDOM_COLORS'
}

// Action Creators

export function showGrid(show) {
  return { type: SHOW_GRID, show }
}

export function setDimensions(squares) {
  return { type: SET_DIMENSIONS, squares }
}

export function setEffect(effect) {
  return { type: SET_EFFECT, effect }
}

