// locals
import { RootState } from '../root'
import { CartState } from './types'

const getCartState = (state: RootState): CartState => state.cart
export const getItems = (state: RootState): CartState['items'] => getCartState(state).items
export const getItemsCount = (state: RootState): number => getItems(state).reduce((acc, [i, qty]) => acc + qty, 0)
export const isCartOpen = (state: RootState): CartState['isOpen'] => getCartState(state).isOpen
