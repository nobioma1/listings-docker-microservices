import React, { useState } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import { Input, Button } from '../shared';
import { setSession } from '../../store/actions/sessions';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        id
        name
        email
      }
    }
  }
`;

const Login = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createUserSession] = useMutation(mutation);

  const onChangeHandler = event => {
    const target = event.target;
    setFields(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSubmitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    const { data } = await createUserSession({
      variables: {
        ...fields,
      },
    });
    setIsSubmitting(false);
    dispatch(setSession(data.createUserSession));
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
