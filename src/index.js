import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { StoreContext } from 'redux-react-hook'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import initialState from 'store'
import reducer from 'reducer'

ReactDOM.render(
  <StoreContext.Provider value={createStore(reducer, initialState)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
