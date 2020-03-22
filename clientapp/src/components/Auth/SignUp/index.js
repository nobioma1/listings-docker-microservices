import React from 'react';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import * as Yup from 'yup';

import { Button, Form, Input } from '../../shared';

const mutation = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

const Signup = ({ setIsSignUp }) => {
  const [createUser] = useMutation(mutation);

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
          password: Yup.string()
            .required()
            .test(
              'sameAsConfirmPassword',
              '${path} is not the same as confirmation password',
              function() {
                return this.parent.password === this.parent.confirmPassword;
              }
            ),
        })}
        onSubmit={async values => {
          const { data } = await createUser({
            variables: {
              ...values,
            },
          });
          if (data) {
            setIsSignUp(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              errors={errors}
              touched={touched}
              name="name"
              placeholder="enter your email"
            />
            <Input
              type="email"
              errors={errors}
              touched={touched}
              name="email"
              placeholder="enter your email"
            />
            <Input
              type="password"
              errors={errors}
              touched={touched}
              name="password"
              placeholder="enter your password"
            />
            <Input
              type="password"
              errors={errors}
              touched={touched}
              name="confirmPassword"
              placeholder="confirm your password"
            />
            <Button type="submit" title="Signup" />
            <button onClick={e => setIsSignUp(false)}>
              Don't have an Account?, Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
