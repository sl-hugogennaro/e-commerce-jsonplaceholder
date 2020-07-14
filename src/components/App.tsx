// externals
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader'
import { useSelector, useDispatch } from 'react-redux'

import { isCartOpen } from '../redux/models/cart/selectors'
import { fetchData } from '../redux/models/engine/actions'
import { getData } from '../redux/models/engine/selectors'
import Header from './Header'
import Cart from './Cart'
import { CardsContainer } from './CardsContainer'

const footerHeight = '15px'
const FooterUI = styled.footer`
  height: ${footerHeight};
  font-size: 12px;
  background: white;
`
const AppUI = styled.div`
  & > section[role='main'] {
    position: relative;
    height: 100%;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)
  const shouldShowCart = useSelector(isCartOpen)
  useEffect(() => {
    fetchData()(dispatch)
  }, [])
  return (
    <AppUI>
      <Header />
      <section role="main">
        {shouldShowCart ? <Cart /> : data && data.length > 0 ? <CardsContainer data={data} /> : <Loader />}
      </section>
      <FooterUI>
        Icons made by:{' '}
        <ul>
          <li>
            <a href="http://www.freepik.com/" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
              iconixar
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {' '}
              www.flaticon.com
            </a>
          </li>
        </ul>
      </FooterUI>
    </AppUI>
  )
}

export default App
