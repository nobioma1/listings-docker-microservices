import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const InputField = styled.input`
  padding: 0.5rem;
  margin: 0.3rem 0;
`;

const Input = props => {
  return (
    <Label>
      {props.name}
      <InputField {...props} />
    </Label>
  );
};

export default Input;
