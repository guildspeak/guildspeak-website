import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { style } from './styles'
import { injectGlobal } from 'styled-components'
import { AppContainer } from 'react-hot-loader'

injectGlobal`${style}`

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept()
}

registerServiceWorker()
