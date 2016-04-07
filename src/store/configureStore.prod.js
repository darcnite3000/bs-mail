import {createStore} from 'redux'
import rootReducer from '../reducers/reducers'

export default (initialState) => createStore(rootReducer, initialState)
