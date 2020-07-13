// externals
import React from 'react'
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
const fakeData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
export const App = () => {
  return (
    <AppUI>
      <Header />
      {fakeData.map((d, i) => (
        <Card key={i} />
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
