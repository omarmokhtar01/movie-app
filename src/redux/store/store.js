import { createStore, applyMiddleware } from 'redux'
import { reducer } from '../reducer/reducer'
import thunk from 'redux-thunk'

// 1- create store
export const store = createStore(reducer, applyMiddleware(thunk))