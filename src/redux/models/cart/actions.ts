import { CartItem, ADD_CART_ITEM, OPEN_CART, CLOSE_CART, CartActionTypes } from './types'

export const addCartItem = (newCartItem: CartItem): CartActionTypes => {
  return {
    type: ADD_CART_ITEM,
    payload: newCartItem
  }
}

export const openCart = (): CartActionTypes => ({ type: OPEN_CART })
export const closeCart = (): CartActionTypes => ({ type: CLOSE_CART })
