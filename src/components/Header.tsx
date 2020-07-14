import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { openCart, closeCart } from '../redux/models/cart/actions'
import { isCartOpen } from '../redux/models/cart/selectors'

const pad = 20
const HeaderUI = styled.header`
  width: calc(100% - ${2 * pad}px);
  height: 10vh;
  min-height: 50px;
  padding: 0 ${pad}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .interactible {
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .hidden {
    display: none;
  }
`
const svgSize = 25
const ShopButtonUI = styled.button`
  background: initial;
  border-radius: 4px;
  & > img {
    width: ${svgSize}px;
    height: ${svgSize}px;
  }
`

const SearchUI = styled.div`
  display: flex;
`

const Header = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isCartOpen)

  return (
    <HeaderUI>
      <div className="">Logo ?</div>
      <SearchUI className="interactible hidden">
        <img width={`${svgSize}px`} height={`${svgSize}px`} src="assets/search.svg" alt="Chercher par titre" />
        <input type="text" name="search" />
      </SearchUI>
      <ShopButtonUI
        className="interactible"
        onClick={() => {
          if (isOpen) {
            dispatch(closeCart())
          } else {
            dispatch(openCart())
          }
        }}
      >
        <img src="assets/shopping-basket.svg" alt="Aller au panier" />
      </ShopButtonUI>
    </HeaderUI>
  )
}

export default Header
