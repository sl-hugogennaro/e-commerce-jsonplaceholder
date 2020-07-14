export const RECEIVED_DATA = 'RECEIVED_DATA'
export const FILTER_DATA = 'FILTER_DATA'

export interface DataType {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

export interface ReceivedDataAction {
  type: typeof RECEIVED_DATA
  payload: DataType[]
}
export interface FilterDataAction {
  type: typeof FILTER_DATA
  payload: string
}

export type EngineActionTypes = ReceivedDataAction | FilterDataAction

export type EngineState = {
  pureData: DataType[]
  data: DataType[]
}
