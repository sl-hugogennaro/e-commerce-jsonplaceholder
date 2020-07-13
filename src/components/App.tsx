// externals
import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { Card } from './Card'

const footerHeight = '5vh'
const FooterUI = styled.footer`
  height: ${footerHeight};
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
  font-size: 12px;
`
const AppUI = styled.div`
  /* global styles */
`

export const App = () => (
  <AppUI>
    <Header />
    <Card />
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
