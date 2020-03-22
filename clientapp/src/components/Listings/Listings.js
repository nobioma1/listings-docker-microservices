import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { useSelector } from 'react-redux';

import AddListing from './AddListing';

const FETCH_LISTINGS = gql`
  {
    listings {
      description
      id
      title
    }
  }
`;

const Listings = () => {
  const { loading, data, refetch } = useQuery(FETCH_LISTINGS);
  const session = useSelector(({ session }) => session);

  return (
    <div>
      <h1>Listings</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {data.listings.length > 0 ? (
            data.listings.map(listItem => (
              <li key={listItem.id}>
                <h2>{listItem.title}</h2>
                <p>{listItem.title}</p>
              </li>
            ))
          ) : (
            <p>There are no available listings</p>
          )}
        </ul>
      )}
      {session ? (
        <AddListing refetchListings={() => refetch()} />
      ) : (
        <p>Login to add Listing</p>
      )}
    </div>
  );
};

export default Listings;
