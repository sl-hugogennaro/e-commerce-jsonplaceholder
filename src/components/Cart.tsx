import React from 'react'
import styled from 'styled-components'

const CartUI = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  width: 100%;
  height: 100%;
`

export const Cart = () => {
  return <CartUI>Cart content</CartUI>
}
