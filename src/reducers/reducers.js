import {combineReducers} from 'redux'
import templateConfigState from './templateConfig'
import templateConfigOptionsState from './templateConfigOptions'

const rootReducer = combineReducers({
  templateConfigOptionsState,
  templateConfigState
})

export default rootReducer
