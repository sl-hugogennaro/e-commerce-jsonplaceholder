import { EngineActionTypes, DataType, RECEIVED_DATA, FILTER_DATA } from './types'

export const receivedData = (newData: DataType[]): EngineActionTypes => ({
  type: RECEIVED_DATA,
  payload: newData
})

export const fetchData = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch(receivedData(data))
      })
  }
}

export const filterData = (like: string): EngineActionTypes => ({
  type: FILTER_DATA,
  payload: like
})
