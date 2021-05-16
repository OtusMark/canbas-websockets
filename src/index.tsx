import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {NormalizeCss} from './styles/NormalizeCss';
import {GlobalStyles} from './styles/GlobalStyles';
import {Provider} from 'react-redux';
import {theme} from "./styles/theme";
import {store} from "./bll/store";
import {App} from "./App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <NormalizeCss/>
        <GlobalStyles/>
        <Provider store={store}>

            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
