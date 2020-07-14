import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { getItems } from '../redux/models/cart/selectors'
import { removeCartItem, addCartItem } from '../redux/models/cart/actions'
import { CardUI, CardLeftUI, CardRightUI, CardMiscUI, CardInfoUI } from './Card/UI'
import ResponsiveGrid from './ResponsiveGrid'

const CartUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const QuantityUI = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-evenly;
`
const QuantityButtonUI = styled.button`
  background: initial;
  border-radius: 4px;
  & > img {
    width: 25px;
    height: 25px;
  }
`
const Cart = () => {
  const items = useSelector(getItems)
  const dispatch = useDispatch()
  return (
    <CartUI>
      {items.length > 0 ? (
        <ResponsiveGrid>
          {items.map(([{ id, thumbnail, title }, qty]) => (
            <CardUI key={id}>
              <CardLeftUI>
                <img src={thumbnail} alt="Card thumbnail" />
              </CardLeftUI>
              <CardRightUI>
                <CardInfoUI>
                  <h3>{title}</h3>
                </CardInfoUI>
                <CardMiscUI>
                  <QuantityUI>
                    <QuantityButtonUI onClick={() => dispatch(removeCartItem({ itemId: id, qty: 1 }))}>
                      -
                    </QuantityButtonUI>
                    <div>Quantity: {qty}</div>
                    <QuantityButtonUI onClick={() => dispatch(addCartItem({ id, title, thumbnail }))}>
                      +
                    </QuantityButtonUI>
                  </QuantityUI>
                </CardMiscUI>
              </CardRightUI>
            </CardUI>
          ))}
        </ResponsiveGrid>
      ) : (
        <div>Your cart is empty</div>
      )}
    </CartUI>
  )
}

export default Cart
