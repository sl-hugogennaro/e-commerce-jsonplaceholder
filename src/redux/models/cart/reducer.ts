// locals
import { CartState, CartActionTypes, ADD_CART_ITEM, OPEN_CART, CLOSE_CART } from './types'

export const initialState: CartState = {
  items: [],
  isOpen: false
}

export const reducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, items: [...state.items, action.payload] }
    case OPEN_CART:
      return { ...state, isOpen: true }
    case CLOSE_CART:
      return { ...state, isOpen: false }
  }
  return state
}
