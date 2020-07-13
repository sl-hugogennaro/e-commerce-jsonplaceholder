// externals
import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'

const AppUI = styled.div`
  /* global styles */
`
const FooterUI = styled.footer`
  font-size: 12px;
`

export const App = () => (
  <AppUI>
    <Header />
    <section role="main"></section>
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
