import './css/main.css'

import React from 'react';
import ReactDOM from 'react-dom'
import App from "./components/App"

import { createStore } from 'redux'
import sketchpadApp from './reducers'

let store = createStore(sketchpadApp)

ReactDOM.render(<App />, document.getElementById('app'))