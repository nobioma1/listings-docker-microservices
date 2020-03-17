import _ from 'lodash';

const formatGraphQLErrors = error => {
  const errorDetails = _.get(error, 'extensions.exception.response.data');

  if (errorDetails) {
    return errorDetails;
  }
  return error;
};

export default formatGraphQLErrors;
