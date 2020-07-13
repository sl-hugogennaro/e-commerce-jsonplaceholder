// externals
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
// aliased
import configureStore from './redux/configureStore'
// locals
import { App } from './components/App'
import { Provider } from 'react-redux'

const FullPageApp = styled.div`
  width: 100%;
  height: 100%;
`
const initialStore = configureStore()
render(
  <Provider store={initialStore}>
    <FullPageApp>
      <App />
    </FullPageApp>
  </Provider>,
  document.getElementById('root')
)
