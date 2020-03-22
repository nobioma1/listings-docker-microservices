import React from 'react';
import styled from 'styled-components';

const MainButton = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
`;

const Button = ({ title, ...rest }) => {
  return <MainButton {...rest}>{title}</MainButton>;
};

export default Button;
