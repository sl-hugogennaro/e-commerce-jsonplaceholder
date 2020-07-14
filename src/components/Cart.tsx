import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getItems } from '../redux/models/cart/selectors'

const CartUI = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white; */
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Cart = () => {
  const items = useSelector(getItems)
  return <CartUI>
    {items.length}
  </CartUI>
}

export default Cart
