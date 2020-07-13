import { CartItem, ADD_CART_ITEM, CartActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function addCartItem(newCartItem: CartItem): CartActionTypes {
  return {
    type: ADD_CART_ITEM,
    payload: newCartItem
  }
}
