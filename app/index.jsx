import './css/main.css'

import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from "./components/App"
import sketchpadApp from './reducers'

let store = createStore(sketchpadApp)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)