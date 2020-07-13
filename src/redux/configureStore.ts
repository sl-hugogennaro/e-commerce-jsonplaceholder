// externals
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// locals
import { rootReducer } from './models/root'

const composeEnhancers = composeWithDevTools

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

  return store
}
