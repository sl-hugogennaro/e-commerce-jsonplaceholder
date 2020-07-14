export const ADD_CART_ITEM = 'ADD_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'

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

interface OpenCartAction {
  type: typeof OPEN_CART
}
interface CloseCartAction {
  type: typeof CLOSE_CART
}

export type CartActionTypes = AddCartItemAction | RemoveCartItemAction | OpenCartAction | CloseCartAction

export type CartState = {
  items: CartItem[]
  isOpen: boolean
}
