// externals
import { combineReducers } from 'redux'
// locals
import { reducer as cart } from './cart'
import { reducer as engine } from './engine'

export const rootReducer = combineReducers({ cart, engine })

export type RootState = ReturnType<typeof rootReducer>
