import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Account from './Account';

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

const Main = ({ initialized }) => {
  return (
    <Wrapper>
      <Container>
        <Content>This is Content</Content>
        <Sidebar>{initialized ? <Account /> : <Login />}</Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Main;
