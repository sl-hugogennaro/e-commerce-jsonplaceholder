// externals
import { combineReducers } from 'redux'
// locals
import { reducer as cart } from './cart'

export const rootReducer = combineReducers({ cart })

export type RootState = ReturnType<typeof rootReducer>
