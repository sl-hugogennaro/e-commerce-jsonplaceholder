export const ADD_CART_ITEM = 'ADD_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

export interface CartItem {
  id: number
}

interface AddCartItemAction {
  type: typeof ADD_CART_ITEM
  payload: CartItem
}

interface RemoveCartItemAction {
  type: typeof REMOVE_CART_ITEM
  payload: CartItem['id']
}

export type CartActionTypes = AddCartItemAction | RemoveCartItemAction

export type CartState = {
  items: CartItem[]
}
