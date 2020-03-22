import React from 'react';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import * as Yup from 'yup';

import { Input, Button, Form } from '../shared';
import { setSession } from '../../store/actions/sessions';

const mutation = gql`
  mutation($title: String!, $description: String!) {
    createListing(title: $title, description: $description) {
      id
    }
  }
`;

const AddListing = ({ refetchListings }) => {
  const dispatch = useDispatch();
  const [createListing] = useMutation(mutation);

  return (
    <div>
      <h1>Add Listing</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required('Title is required'),
          description: Yup.string().required('Listing description is required'),
        })}
        onSubmit={async values => {
          const { data } = await createListing({
            variables: {
              ...values,
            },
          });
          refetchListings();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="title"
              placeholder="enter your title"
              errors={errors}
              touched={touched}
            />
            <Input
              name="description"
              placeholder="enter your description"
              errors={errors}
              touched={touched}
            />
            <Button type="submit" title="Add Listing" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddListing;
