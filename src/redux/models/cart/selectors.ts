// locals
import { RootState } from '../root'
import { CartState } from './types'

const getCartState = (state: RootState): CartState => state.cart
export const getItems = (state: RootState): CartState['items'] => getCartState(state).items
