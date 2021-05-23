import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components/macro'
import {NormalizeCss} from './styles/NormalizeCss'
import {GlobalStyles} from './styles/GlobalStyles'
import {theme} from './styles/theme'
import {App} from './App'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <NormalizeCss/>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)
