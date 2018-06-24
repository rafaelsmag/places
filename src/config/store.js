import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './../redux/'

const middlewares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
