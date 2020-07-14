import { CartItem, ADD_CART_ITEM, OPEN_CART, CLOSE_CART, CartActionTypes, REMOVE_CART_ITEM } from './types'

export const addCartItem = (newCartItem: CartItem): CartActionTypes => {
  return {
    type: ADD_CART_ITEM,
    payload: newCartItem
  }
}
export const removeCartItem = ({ itemId, qty }: { itemId: CartItem['id']; qty: number }): CartActionTypes => {
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      itemId,
      qty
    }
  }
}

export const openCart = (): CartActionTypes => ({ type: OPEN_CART })
export const closeCart = (): CartActionTypes => ({ type: CLOSE_CART })
