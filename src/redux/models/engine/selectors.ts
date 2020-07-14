// locals
import { RootState } from '../root'
import { EngineState } from './types'

const getEngineState = (state: RootState): EngineState => state.engine
export const getData = (state: RootState): EngineState['data'] => getEngineState(state).data
