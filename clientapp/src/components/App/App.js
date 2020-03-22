import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Account from '../Account';
import graphqlClient from '../../api/graphqlClient';
import Login from '../Login';
import { setSession } from '../../store/actions/sessions';
import * as theme from '../../theme';

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

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 70rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;
const Sidebar = styled.div`
  flex: 0 auto;
  width: 20rem;
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
  const session = useSelector(({ session }) => session);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Content>This is Content</Content>
          <Sidebar>{session ? <Account /> : <Login />}</Sidebar>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
