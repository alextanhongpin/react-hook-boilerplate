import { createStore } from 'redux'

import Module from 'store/module'

const reducer = ({ module }, action) => {
  return {
    module: Module.reducer(module, action)
  }
}

const initialState = {
  module: Module.store
}

export default createStore(reducer, initialState)
