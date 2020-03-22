import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const InputField = styled(Field)`
  padding: 0.5rem;
  margin: 0.3rem 0;
`;

const Input = ({ name, errors, touched, ...rest }) => {
  return (
    <Label>
      {name}
      <InputField name={name} {...rest} />
      {errors[name] && touched[name] ? <div>{errors[name]}</div> : null}
    </Label>
  );
};

export default Input;
