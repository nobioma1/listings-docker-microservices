import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
