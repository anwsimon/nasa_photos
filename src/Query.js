import React from "react";
import { gql, useQuery } from '@apollo/client';

const PHOTO_QUERY = gql`
  query PhotoQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Photos(props){
    const { loading, error, data } = useQuery(PHOTO_QUERY);

    if (loading) {
      return <p>Thanks for your patience...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    return (
      <p>roger, we have a query.</p>
    )
}
