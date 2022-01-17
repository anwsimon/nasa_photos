import React from "react"
import { gql, useQuery } from '@apollo/client';

const NEW_QUERY = gql`
 query get5Photos {
    title,
    url,
    explanation,
    date,
    media_type
  }`

function Photo() {
  const { loading, error, data } = useQuery(NEW_QUERY);
  if (loading) return (<p>Thank you for waiting while the photos load ...</p>);

  if (error) {
    // console.log("THIS IS THE ERROR", error)
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
        <p>
          {data}
        </p>
    </div>
  );
}

export default Photo;
