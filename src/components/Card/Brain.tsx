import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '../../redux/models/root'
import { addCartItem } from '../../redux/models/cart/actions'
const mapStateToProps = (state: RootState) => ({
  state
})

const mapDispatchToProps = {
  addToCart: (id: number) => addCartItem({ id })
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
