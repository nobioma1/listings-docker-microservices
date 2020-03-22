import React from 'react';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import * as Yup from 'yup';

import { Input, Button, Form } from '../../shared';
import { setSession } from '../../../store/actions/sessions';

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

const Login = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const [createUserSession] = useMutation(mutation);

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid email')
            .required('Email Required'),
          password: Yup.string().required(),
        })}
        onSubmit={async values => {
          const { data } = await createUserSession({
            variables: {
              ...values,
            },
          });
          dispatch(setSession(data.createUserSession));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              type="email"
              name="email"
              placeholder="enter your email"
              errors={errors}
              touched={touched}
            />
            <Input
              type="password"
              name="password"
              placeholder="enter your password"
              errors={errors}
              touched={touched}
            />
            <Button type="submit" title="Login" />
            <button onClick={e => setIsSignUp(true)}>
              Don't have an Account?, Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
