import React from 'react';
import styled from 'styled-components';

const MainButton = styled.button`
  padding: 0.5rem;
  cursor: pointer;
`;

const Button = ({ title }) => {
  return <MainButton>{title}</MainButton>;
};

export default Button;
