// externals
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader'
import { useSelector } from 'react-redux'

import { isCartOpen } from '../redux/models/cart/selectors'
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
export type DataType = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

const App = () => {
  const [data, setData] = useState<DataType[]>([])
  const shouldShowCart = useSelector(isCartOpen)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    })
      .then((r) => r.json())
      .then(setData)
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
