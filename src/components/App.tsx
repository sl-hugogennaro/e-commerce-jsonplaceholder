// externals
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { Card } from './Card'

const footerHeight = '15px'
const FooterUI = styled.footer`
  height: ${footerHeight};
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
  font-size: 12px;
  background: white;
`
const AppUI = styled.div`
  /* global styles */
`
type APIResponse = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}
export const App = () => {
  const [data, setData] = useState<APIResponse[]>([])
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
      {data.map(({ id, title, thumbnailUrl, url }) => (
        <Card key={id} {...{ id, title, thumbnail: thumbnailUrl, url }} />
      ))}
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
