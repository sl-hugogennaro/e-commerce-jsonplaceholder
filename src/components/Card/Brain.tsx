import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '../../redux/models/root'
import { addCartItem } from '../../redux/models/cart/actions'
import { CartItem } from '../../redux/models/cart/types'

const mapStateToProps = (state: RootState) => ({
  state
})

const mapDispatchToProps = {
  addToCart: ({ id, title, thumbnail }: CartItem) => addCartItem({ id, title, thumbnail })
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
