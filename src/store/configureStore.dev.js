import {createStore, compose} from 'redux'
import rootReducer from '../reducers/reducers'

export default (initialState) => {
  let store = createStore(rootReducer, initialState, compose(
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
