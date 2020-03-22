import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Account from '../Account';
import Auth from '../Auth';
import graphqlClient from '../../api/graphqlClient';
import Listings from '../Listings';
import { setSession } from '../../store/actions/sessions';
import * as theme from '../../theme';

const GlobalStyle = createGlobalStyle`
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
  const [error, setError] = useState('');

  useEffect(() => {
    graphqlClient
      .query({ query })
      .then(({ data }) => {
        if (data.userSession) {
          dispatch(setSession(data.userSession));
        }
      })
      .catch(console.error);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Content>
            <Listings />
          </Content>
          <Sidebar>{session ? <Account /> : <Auth />}</Sidebar>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
