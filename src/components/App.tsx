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
  position: relative;
  /* global styles */
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
      {shouldShowCart ? <Cart /> : data && data.length > 0 ? <CardsContainer data={data} /> : <Loader />}
      <FooterUI>
        Icons made by{' '}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </FooterUI>
    </AppUI>
  )
}

export default App
