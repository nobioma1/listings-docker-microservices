import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';

import * as theme from './theme';
import Main from './components/Main';
import graphqlClient from './api/graphqlClient';
import { setSession } from './store/actions/sessions';

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

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        name
        email
      }
    }
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialized(true);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
