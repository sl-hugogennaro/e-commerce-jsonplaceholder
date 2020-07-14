// locals
import { EngineState, EngineActionTypes, RECEIVED_DATA } from './types'

export const initialState: EngineState = {
  data: []
}

export const reducer = (state = initialState, action: EngineActionTypes): EngineState => {
  switch (action.type) {
    case RECEIVED_DATA:
      return { ...state, data: [...state.data, ...action.payload] }
    default:
      return state
  }
}
