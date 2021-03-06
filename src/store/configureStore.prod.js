import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/reducers'
import thunk from 'redux-thunk'

export default (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk))
