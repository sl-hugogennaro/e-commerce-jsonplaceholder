// externals
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
// locals
import { App } from './components/App'

const FullPageApp = styled.div`
  width: 100%;
  height: 100%;
`

render(
  <FullPageApp>
    <App />
  </FullPageApp>,
  document.getElementById('root')
)
