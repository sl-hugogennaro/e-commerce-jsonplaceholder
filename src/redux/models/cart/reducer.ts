// locals
import {
  CartState,
  CartActionTypes,
  RemoveCartItemAction,
  ADD_CART_ITEM,
  OPEN_CART,
  CLOSE_CART,
  REMOVE_CART_ITEM,
  CartItem
} from './types'

export const initialState: CartState = {
  items: [],
  isOpen: false
}

const addItemToList = (items: CartState['items'], item: CartItem) => {
  const prev = items.find(([{ id }]) => id === item.id)
  if (!!prev) {
    prev[1]++
  } else {
    items.push([item, 1])
  }
  return items
}
const removeItemInList = (items: CartState['items'], { itemId, qty }: RemoveCartItemAction['payload']) => {
  const prevIndex = items.findIndex(([{ id }]) => id === itemId)
  if (prevIndex > -1) {
    items[prevIndex][1] = items[prevIndex][1] - 1
  }
  return [...items.filter(([_, qty]) => qty > 0)]
}
export const reducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, items: addItemToList([...state.items], action.payload) }
    case REMOVE_CART_ITEM:
      return { ...state, items: removeItemInList(state.items, action.payload) }
    case OPEN_CART:
      return { ...state, isOpen: true }
    case CLOSE_CART:
      return { ...state, isOpen: false }
    default:
      return state
  }
}
