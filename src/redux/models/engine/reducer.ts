// locals
import { EngineState, EngineActionTypes, RECEIVED_DATA, FILTER_DATA } from './types'

export const initialState: EngineState = {
  pureData: [],
  data: []
}

export const reducer = (state = initialState, action: EngineActionTypes): EngineState => {
  switch (action.type) {
    case RECEIVED_DATA:
      const pureData = [...state.data, ...action.payload]
      return { ...state, data: pureData, pureData }
    case FILTER_DATA:
      const reg = new RegExp(action.payload, 'ig')
      return { ...state, data: [...state.pureData].filter(({ title }) => reg.test(title)) }
    default:
      return state
  }
}
