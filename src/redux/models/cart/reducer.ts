// locals
import { CartState, CartActionTypes, ADD_CART_ITEM } from './types'

export const initialState: CartState = {
  items: []
}

export const reducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, items: [...state.items, action.payload] }
  }
  return state
}
