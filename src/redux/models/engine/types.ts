export const RECEIVED_DATA = 'RECEIVED_DATA'

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

export type EngineActionTypes = ReceivedDataAction

export type EngineState = {
  data: DataType[]
}
