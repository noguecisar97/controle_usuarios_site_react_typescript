import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Rota from './pages/Router'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Rota />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
