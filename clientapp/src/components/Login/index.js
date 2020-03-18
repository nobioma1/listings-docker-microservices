import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../shared/Input';
import Button from '../shared/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeHandler = event => {
    const target = event.target;
    setFields(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <h1>Login</h1>
      <Input
        type="email"
        name="email"
        value={fields.email}
        onChange={onChangeHandler}
        placeholder="enter your email"
      />
      <Input
        type="password"
        name="password"
        value={fields.password}
        onChange={onChangeHandler}
        placeholder="enter your password"
      />
      <Button title="Login" disabled={isSubmitting} />
    </Form>
  );
};

export default Login;
