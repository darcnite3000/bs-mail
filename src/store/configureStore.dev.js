import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../reducers/reducers'
import thunk from '../redux-thunk'

export default (initialState) => {
  let store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

  if (module.hot) {
    module.hot.accept('../reducers/reducers', () => {
      const nextReducer = require('../reducers/reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
