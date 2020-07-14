import React from 'react'
import styled from 'styled-components'
import { connect, ConnectedProps } from 'react-redux'

import { openCart } from '../redux/models/cart/actions'

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

const mapDispatchToProps = {
  goToCart: () => openCart()
}

export const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

type HeaderProps = PropsFromRedux & {}
const Header = ({ goToCart }: HeaderProps) => (
  <HeaderUI>
    <div className="">Logo ?</div>
    <SearchUI className="interactible hidden">
      <img width={`${svgSize}px`} height={`${svgSize}px`} src="assets/search.svg" alt="Chercher par titre" />
      <input type="text" name="search" />
    </SearchUI>
    <ShopButtonUI className="interactible" onClick={() => goToCart()}>
      <img src="assets/shopping-basket.svg" alt="Aller au panier" />
    </ShopButtonUI>
  </HeaderUI>
)

export default connector(Header)
