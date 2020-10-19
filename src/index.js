import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createAppStore from './state/store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

import theme from './theme';

const store = createAppStore();


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Provider store={store}>
      <BrowserRouter>
        <App />      
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
